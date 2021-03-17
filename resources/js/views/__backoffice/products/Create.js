import React, { useState } from 'react';

import {
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
    Button,
    withStyles,
    Grid,
} from '@material-ui/core';
import { ReactMic } from 'react-mic';

import * as NavigationUtils from '../../../helpers/Navigation';
import { Product } from '../../../models';
import { LinearIndeterminate } from '../../../ui/Loaders';
import { Master as MasterLayout } from '../layouts';
import Camera from 'react-html5-camera-photo';
import { Product as ProductForm } from './Forms';
import AddProductImg from '../../../../img/add_products.png';


function Create(props) {
    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState([]);
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState({});

    const [record, setRecord] =  useState(false);

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
                closed: () => {
                    setMessage({});
                }
            });


            setLoading(false);
            setFormValues(newFormValues);
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

            setErrors(errors);

            setLoading(false);
        }
    };

    const { classes, ...other } = props;
    const { history } = props;


    const renderForm = () => {
        const defaultProfileValues = {
            label: '',
            // experiation_date: '',
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

    const startRecording = () => {
        setRecord(true);
      }
     
    const stopRecording = () => {
        setRecord(false);
      }
    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    }
    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
    }

    const handleTakePhoto = (dataUri) => {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
    return (
        <MasterLayout
            {...other}
            pageTitle="Create a product"
            // tabs={[]}
            message={message}
        >
            <div className={classes.pageContentWrapper} style={{'marginTop':0}}>
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
                    {/* <img src={AddProductImg}/> */}
                </Grid>
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
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        wrap="nowrap">
                        <ReactMic
                        record={record}
                        className="sound-wave"
                        onStop={onStop}
                        onData={onData}
                        strokeColor="primary"
                        backgroundColor="#424242" />  
                    </Grid>
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        wrap="nowrap"
                        style={
                            {
                                "paddingTop":20,
                                "paddingBottom":20
                            }
                        }>

                        {record === false ? <Button className="mdc-button mdc-button--raised" onClick={startRecording} variant="contained" color="primary" type="button">Start</Button> : null }
                        {record === true ? <Button className="mdc-button mdc-button--raised" onClick={stopRecording} variant="contained" color="secondary" type="button">Stop</Button> :null}
                    </Grid>
                        {/* <Camera
                        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                        /> */}
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
