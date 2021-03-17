import React, { useState, useEffect } from 'react';

import {
    CircularProgress,
    Grid,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
    withStyles,
} from '@material-ui/core';

import * as UrlUtils from '../../../helpers/URL';
import * as NavigationUtils from '../../../helpers/Navigation';
import { Product } from '../../../models';
import { LinearIndeterminate } from '../../../ui/Loaders';
import { Master as MasterLayout } from '../layouts';

import { ProductEdit } from './Forms';
import AddProductImg from '../../../../img/add_products.png';

function Edit(props) {
    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState([]);
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState({});


    const { history } = props;

    /**
     * Fetch the product.
     *
     * @param {number} id
     *
     * @return {undefined}
     */
    const fetchProduct = async id => {
        setLoading(true);

        try {
            const product = await Product.show(id);

            setProduct(product);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    /**
     * This should return back to the previous step.
     *
     * @return {undefined}
     */
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

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

        const { params } = props.match;

        setLoading(true);

        try {
           
            const product = await Product.update(params.id,values);
            setMessage({
                type: 'success',
                body: Lang.get('resources.updated', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
            });

            setLoading(false);
            setFormValues(values);
            setProduct(product);
            if(product.success){
                setTimeout( history.push(
                    NavigationUtils.route('backoffice.resources.products.index'),
                ), 500);
            }
        } catch (error) {
            if (!error.response) {
                throw new Error('Unknown error');
            }

            const { errors } = error.response.data;
            console.log(errors);
            setErrors(errors);

            setLoading(false);
        }
    };

    useEffect(() => {
        if (Object.keys(product).length > 0) {
            return;
        }

        const { params } = props.match;
        const { location } = props;

        const queryParams = UrlUtils.queryParams(location.search);

        if (queryParams.hasOwnProperty('step')) {
            setActiveStep(parseInt(queryParams.step));
        }

        fetchProduct(params.id);
    });

    const { classes, ...other } = props;
 
    const renderForm = () => {
        let defaultProfileValues = {};
            defaultProfileValues = {
                label: product.data.label === null ? '' : product.data.label,
                // experiation_date: product.data.experiation_date === null ? '' : product.data.experiation_date,
                metric: product.data.metric === null ? '' : product.data.metric,
                quantity: product.data.quantity === null ? '' : product.data.quantity,
            };
             

       return <ProductEdit
            {...other}
            values={
                defaultProfileValues
            }
            handleSubmit={handleSubmit}
        />
             
    };

    return (
        <MasterLayout
            {...other}
            pageTitle="Edit product"
            tabs={[]}
            message={message}
        >
            <div className={classes.pageContentWrapper}>
                {loading && <LinearIndeterminate />}
                <Grid container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        style={{
                            'backgroundImage':`url(${AddProductImg})`,
                            }
                        }
                        className="image-background"
                        wrap="nowrap">
                </Grid>
                <Paper>
                    <div className={classes.pageContent}>
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            gutterBottom
                        >
                            Edit Product
                        </Typography>

                        <Typography
                            component="p"
                            variant="p"
                            align="center"
                            gutterBottom
                        >
                            Here you can edit the product
                        </Typography>

                        {Object.keys(product).length>0 ?
                            renderForm() : null }
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

    loadingContainer: {
        minHeight: 200,
    },
});

export default withStyles(styles)(Edit);
