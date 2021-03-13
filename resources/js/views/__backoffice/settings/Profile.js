import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    Hidden,
    Input,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    withStyles,
} from '@material-ui/core';

import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import * as UrlUtils from '../../../helpers/URL';
import {
    Clean as CleanLayout,
    Settings as SettingsLayout,
    Slave as SlaveLayout,
} from '../layouts';
import { AppContext } from '../../../AppContext';

function Profile(props) {
    const { user } = useContext(AppContext);
    const { classes, ...other } = props;
    const { location } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [formVisible, setFormVisibility] = useState(false);

    /**
     * Handle form submit, this should send an API response
     * to update the profile.
     *
     * @param {object} values
     * @param {object} form
     *
     * @return {undefined}
     */
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setSubmitting(false);

        const updateProfile = () =>
            axios.patch('/api/v1/settings/profile', values);

        try {
            setLoading(true);

            await updateProfile();

            setMessage({
                type: 'success',
                body: Lang.get('settings.profile_updated'),
                closed: () => setMessage({}),
            });

            setLoading(false);
        } catch (error) {
            if (!error.response) {
                return;
            }

            const { errors } = error.response.data;

            if (errors) {
                setErrors(errors);
            } else {
                setMessage({
                    type: 'error',
                    body: Lang.get('settings.profile_not_updated'),
                    closed: () => setMessage({}),
                    actionText: Lang.get('actions.retry'),
                    action: async () => await updateProfile(),
                });
            }

            setLoading(false);
        }
    };

    useEffect(() => {
        const queryParams = UrlUtils.queryParams(location.search);

        if (queryParams.hasOwnProperty('visible')) {
            setFormVisibility(true);
        } else if (queryParams.hasOwnProperty('hidden')) {
            setFormVisibility(false);
        }
    });

    const renderForm = (
        <Grid item md={8} sm={12} xs={12}>
            <Paper className={classes.form}>
                <Formik
                    initialValues={{
                        name: user.name,
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required(
                            Lang.get('validation.required', {
                                attribute: 'name',
                            }),
                        )
                    })}
                    onSubmit={async (values, form) => {
                        let mappedValues = {};
                        let valuesArray = Object.values(values);

                        // Format values specially the object ones (i.e Moment)
                        Object.keys(values).forEach((filter, key) => {
                            if (
                                valuesArray[key] !== null &&
                                typeof valuesArray[key] === 'object' &&
                                valuesArray[key].hasOwnProperty(
                                    '_isAMomentObject',
                                )
                            ) {
                                mappedValues[filter] = moment(
                                    valuesArray[key],
                                ).format('YYYY-MM-DD');

                                return;
                            }

                            mappedValues[filter] = valuesArray[key];
                        });

                        await handleSubmit(mappedValues, form);
                    }}
                    validateOnBlur={false}
                >
                    {({
                        values,
                        errors,
                        submitCount,
                        isSubmitting,
                        handleChange,
                        setFieldValue,
                    }) => (
                        <Form>
                            <Typography variant="h6" gutterBottom>
                                Personal Information
                            </Typography>

                            <TextField
                                id="name"
                                name="name"
                                label="Name"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                fullWidth
                                margin="dense"
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('name')
                                }
                                helperText={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('name') &&
                                    errors.name
                                }
                            />

                            <div className={classes.dense} />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={
                                    (errors &&
                                        Object.keys(errors).length > 0 &&
                                        submitCount > 0) ||
                                    isSubmitting
                                }
                            >
                                {loading && (
                                    <div className={classes.spinner}>
                                        <CircularProgress
                                            size={14}
                                            color="inherit"
                                        />
                                    </div>
                                )}

                                <Typography color="inherit">Update</Typography>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );

    const renderBody = (
        <SettingsLayout
            navigationProps={{
                ...other,
                formVisible,
                setFormVisibility: () => setFormVisibility(!formVisible),
            }}
        >
            <Hidden mdUp>{formVisible && renderForm}</Hidden>

            <Hidden smDown>{renderForm}</Hidden>
        </SettingsLayout>
    );

    const Layout = formVisible ? SlaveLayout : CleanLayout;

    return (
        <Layout {...other} pageTitle="Profile" message={message}>
            {renderBody}
        </Layout>
    );
}

const styles = theme => ({
    form: {
        padding: theme.spacing.unit * 3,
        minHeight: '100%',
    },

    dense: {
        marginTop: 16,
    },

    spinner: {
        marginRight: theme.spacing.unit,
    },
});

export default withStyles(styles)(Profile);
