import React, { useState } from 'react';

import {
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
    withStyles,
} from '@material-ui/core';

import * as NavigationUtils from '../../../helpers/Navigation';
import { Product } from '../../../models';
import { LinearIndeterminate } from '../../../ui/Loaders';
import { Master as MasterLayout } from '../layouts';

import { Product as ProductForm } from './Forms';

function Create(props) {
    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState([]);
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState({});

   
    /**
     * Handle form submit, this should send an API response
     * to create a product.
     *
     * @param {object} values
     *
     * @param {object} form
     *
     * @return {undefined}
     */
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setSubmitting(false);

       

        setLoading(true);

        try {
            let previousValues = {};

            // Merge the form values here.
    
            // Instruct the API the current step.
            values.step = activeStep;

            const product = await Product.store({ ...previousValues, ...values });

            // After persisting the previous values. Move to the next step...
            let newFormValues = [...formValues];
            newFormValues[activeStep] = values;

           
            setMessage({
                type: 'success',
                body: Lang.get('resources.created', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
            });


            setLoading(false);
            setFormValues(newFormValues);
            setProduct(product);
        } catch (error) {
            if (!error.response) {
                throw new Error('Unknown error');
            }

            const { errors } = error.response.data;

            setErrors(errors);

            setLoading(false);
        }
    };

    const { classes, ...other } = props;
    const { history } = props;


    const renderForm = () => {
        const defaultProfileValues = {
            label: '',
            experiation_date: '',
            metric: '',
            quantity: '',
        };

        
       return <ProductForm
            {...other}
            values={
                formValues[0] ? formValues[0] : defaultProfileValues
            }
            handleSubmit={handleSubmit}
        />
             
    };

    return (
        <MasterLayout
            {...other}
            pageTitle="Create a product"
            tabs={[]}
            message={message}
        >
            <div className={classes.pageContentWrapper}>
                {loading && <LinearIndeterminate />}

                <Paper>
                    <div className={classes.pageContent}>
                    <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            gutterBottom
                        >
                            Add a product
                        </Typography>
                        <Typography
                            component="p"
                            variant="p"
                            align="center"
                            gutterBottom
                        >
                            Here you can add products to your inventory
                        </Typography>

                        {renderForm()}
                    </div>
                </Paper>
            </div>
        </MasterLayout>
    );
}

const styles = theme => ({
    pageContentWrapper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        minHeight: '75vh',
        overflowX: 'auto',
    },

    pageContent: {
        padding: theme.spacing.unit * 3,
    },
});

export default withStyles(styles)(Create);
