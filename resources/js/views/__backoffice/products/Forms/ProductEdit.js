import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    withStyles,
} from '@material-ui/core';

import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

const ProductEdit = props => {
    const { classes, values, handleSubmit } = props;
    return (
        <Formik
            initialValues={values}
            validationSchema={Yup.object().shape({
                label: Yup.string().required(
                    Lang.get('validation.required', {
                        attribute: 'label',
                    }),
                ),
                // experiation_date: Yup.date().required(
                //     Lang.get('validation.required', {
                //         attribute: 'experiation_date',
                //     }),
                // ),
                metric: Yup.string().required(
                    Lang.get('validation.required', {
                        attribute: 'metric',
                    }),
                ),
                quantity: Yup.number().required(
                    Lang.get('validation.required', {
                        attribute: 'quantity',
                    }),
                ),
            })}
            onSubmit={async (values, form) => {
                let mappedValues = {};
                let valuesArray = Object.values(values);

                // Format values specially the object ones (i.e Moment)
                Object.keys(values).forEach((filter, key) => {
                    if (
                        valuesArray[key] !== null &&
                        typeof valuesArray[key] === 'object' &&
                        valuesArray[key].hasOwnProperty('_isAMomentObject')
                    ) {
                        mappedValues[filter] = moment(valuesArray[key]).format(
                            'YYYY-MM-DD',
                        );

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
                    <Grid className="mb-4" container spacing={24}>
                        <Grid item xs={12} sm={4}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('label')
                                }
                            >
                                <InputLabel htmlFor="label">
                                    Label{' '}
                                    <span className={classes.required}>*</span>
                                </InputLabel>

                                <Input
                                    id="label"
                                    name="label"
                                    value={values.label}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('label') && (
                                        <FormHelperText>
                                            {errors.label}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('quantity')
                                }
                            >
                                <InputLabel htmlFor="quantity">
                                    Quantity{' '}
                                    <span className={classes.required}>*</span>
                                </InputLabel>

                                <Input
                                    id="quantity"
                                    name="quantity"
                                    value={values.quantity}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('quantity') && (
                                        <FormHelperText>
                                            {errors.quantity}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                          {/* <Grid item xs={12} sm={6}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('experiation_date')
                                }
                            >
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <DatePicker
                                        id="experiation_date"
                                        name="experiation_date"
                                        label="Experiation date"
                                        placeholder="Please pick the experiation date"
                                        value={values.experiation_date}
                                        onChange={date =>
                                            setFieldValue('experiation_date', date)
                                        }
                                        format="YYYY-MM-DD"
                                        keyboard
                                        clearable
                                        disableFuture
                                    />
                                </MuiPickersUtilsProvider>

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('experiation_date') && (
                                        <FormHelperText>
                                            {errors.experiation_date}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid> */}

                        <Grid item xs={12} sm={4}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('metric')
                                }
                            >
                                <InputLabel htmlFor="metric">Metric</InputLabel>

                                <Select
                                    id="metric"
                                    name="metric"
                                    value={values.metric}
                                    onChange={handleChange}
                                    input={<Input fullWidth />}
                                    autoWidth
                                >
                                    <MenuItem value="">
                                        Please select the metric
                                    </MenuItem>

                                    <MenuItem value="grams">grams</MenuItem>
                                    <MenuItem value="ounces">ounces</MenuItem>
                                    <MenuItem value="ml">ml</MenuItem>

                                    <MenuItem value="bla bal">bla bal</MenuItem>
                                </Select>

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('metric') && (
                                        <FormHelperText>
                                            {errors.metric}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <div className={classes.sectionSpacer} />

                    <Grid container spacing={24} justify="flex-end">
                        <Grid item>
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
                                Update Product
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

ProductEdit.propTypes = {
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

const styles = theme => ({
    formControl: {
        minWidth: '100%',
    },

    required: {
        color: theme.palette.error.main,
    },
});

export default withStyles(styles)(ProductEdit);
