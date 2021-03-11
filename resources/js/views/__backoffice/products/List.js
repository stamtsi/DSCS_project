import React, { useState, useEffect, useContext } from 'react';

import {
    Avatar,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';

import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Image as ImageIcon,
} from '@material-ui/icons';

import * as RandomUtils from '../../../helpers/Random';
import * as NavigationUtils from '../../../helpers/Navigation';
import * as UrlUtils from '../../../helpers/URL';
import { Table } from '../../../ui';
import { Master as MasterLayout } from '../layouts';
import { Product } from '../../../models';
import { AppContext } from '../../../AppContext';

function List(props) {
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({});
    const [sorting, setSorting] = useState({
        by: 'name',
        type: 'asc',
    });
    const [filters, setFilters] = useState({});
    const [message, setMessage] = useState({});
    const [alert, setAlert] = useState({});

    /**
     * Event listener that is triggered when a resource delete button is clicked.
     * This should prompt for confirmation.
     *
     * @param {string} resourceId
     *
     * @return {undefined}
     */
    const handleDeleteClick = resourceId => {
        setAlert({
            type: 'confirmation',
            title: Lang.get('resources.delete_confirmation_title', {
                name: 'Product',
            }),
            body: Lang.get('resources.delete_confirmation_body', {
                name: 'Product',
            }),
            confirmText: Lang.get('actions.continue'),
            confirmed: async () => await deleteProduct(resourceId),
            cancelled: () => setAlert({}),
        });
    };

    /**
     * Event listener that is triggered when a filter is removed.
     * This should re-fetch the resource.
     *
     * @param {string} key
     *
     * @return {undefined}
     */
    const handleFilterRemove = async key => {
        const newFilters = { ...filters };
        delete newFilters[key];

        await fetchProducts({
            ...defaultQueryString(),
            filters: newFilters,
        });
    };

    /**
     * Event listener that is triggered when the filter form is submitted.
     * This should re-fetch the resource.
     *
     * @param {object} values
     * @param {object} form
     *
     * @return {undefined}
     */
    const handleFiltering = async (values, { setSubmitting }) => {
        setSubmitting(false);

        const newFilters = {
            ...filters,
            [`${values.filterBy}[${values.filterType}]`]: values.filterValue,
        };

        await fetchProducts({
            ...defaultQueryString(),
            filters: newFilters,
        });
    };

    /**
     * Event listener that is triggered when a sortable TableCell is clicked.
     * This should re-fetch the resource.
     *
     * @param {string} column
     *
     * @return {undefined}
     */
    const handleSorting = async (sortBy, sortType) => {
        await fetchProducts({
            ...defaultQueryString(),
            sortBy,
            sortType,
        });
    };

    /**
     * Event listener that is triggered when a Table Component's Page is changed.
     * This should re-fetch the resource.
     *
     * @param {number} page
     *
     * @return {undefined}
     */
    const handlePageChange = async page => {
        await fetchProducts({
            ...defaultQueryString(),
            page,
        });
    };

    /**
     * Event listener that is triggered when a Table Component's Per Page is changed.
     * This should re-fetch the resource.
     *
     * @param {number} perPage
     * @param {number} page
     *
     * @return {undefined}
     */
    const handlePerPageChange = async (perPage, page) => {
        await fetchProducts({
            ...defaultQueryString(),
            perPage,
            page,
        });
    };

    /**
     * This should send an API request to restore a deleted resource.
     *
     * @param {string} resourceId
     *
     * @return {undefined}
     */
    const restoreProduct = async resourceId => {
        setLoading(true);

        try {
            const pagination = await Product.restore(resourceId);

            setLoading(false);
            setPagination(pagination);
            setAlert({});
            setMessage({
                type: 'success',
                body: Lang.get('resources.restored', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
            });
        } catch (error) {
            setLoading(false);
            setAlert({});
            setMessage({
                type: 'error',
                body: Lang.get('resources.not_restored', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
                actionText: Lang.get('actions.retry'),
                action: () => restoreProduct(resourceId),
            });
        }
    };

    /**
     * This should send an API request to delete a resource.
     *
     * @param {string} resourceId
     *
     * @return {undefined}
     */
    const deleteProduct = async resourceId => {
        setLoading(true);

        try {
            const pagination = await Product.delete(resourceId);

            setLoading(false);
            setPagination(pagination);
            setAlert({});
            setMessage({
                type: 'success',
                body: Lang.get('resources.deleted', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
                actionText: Lang.get('actions.undo'),
                action: () => restoreProduct(resourceId),
            });
        } catch (error) {
            setLoading(false);
            setAlert({});
            setMessage({
                type: 'error',
                body: Lang.get('resources.not_deleted', {
                    name: 'Product',
                }),
                closed: () => setMessage({}),
                actionText: Lang.get('actions.retry'),
                action: () => deleteProduct(resourceId),
            });
        }
    };

    /**
     * This should send an API request to fetch all resource.
     *
     * @param {object} params
     *
     * @return {undefined}
     */
    const fetchProducts = async (params = {}) => {
        setLoading(true);

        try {
            const {
                page,
                perPage,
                sortBy,
                sortType,
                filters: newFilters,
            } = params;

            const queryParams = {
                page,
                perPage,
                sortBy,
                sortType,
                ...newFilters,
            };

            const pagination = await Product.paginated(queryParams);

            setLoading(false);
            setSorting({
                by: sortBy ? sortBy : sorting.by,
                type: sortType ? sortType : sorting.type,
            });
            setFilters(newFilters ? newFilters : filters);
            setPagination(pagination);
            setMessage({});
        } catch (error) {
            setLoading(false);
        }
    };

    /**
     * This will provide the default sorting, pagination & filters from state.
     *
     * @return {object}
     */
    const defaultQueryString = () => {
        const { sortBy, sortType } = sorting;
        const { current_page: page, per_page: perPage } = pagination;

        return {
            sortBy,
            sortType,
            perPage,
            page,
            filters,
        };
    };

    /**
     * This will update the URL query string via history API.
     *
     * @return {undefined}
     */
    const updateQueryString = () => {
        const { history, location } = props;
        const { current_page: page, per_page: perPage } = pagination;
        const { by: sortBy, type: sortType } = sorting;

        const queryString = UrlUtils.queryString({
            page,
            perPage,
            sortBy,
            sortType,
            ...filters,
        });

        history.push(`${location.pathname}${queryString}`);
    };

    /**
     * Fetch data on initialize.
     */
    useEffect(() => {
        if (pagination.hasOwnProperty('data')) {
            updateQueryString();

            return;
        }

        const { location } = props;
        const queryParams = location.search
            ? UrlUtils.queryParams(location.search)
            : {};

        const prevFilters = {};
        const queryParamValues = Object.values(queryParams);

        Object.keys(queryParams).forEach((param, key) => {
            if (param.search(/\[*]/) > -1 && param.indexOf('_') < 0) {
                prevFilters[param] = queryParamValues[key];
            }
        });

        fetchProducts({
            ...queryParams,
            filters: prevFilters,
        });
    }, [pagination.data]);

    const { Product: authProduct } = useContext(AppContext);
    const { ...childProps } = props;
    const { history } = props;

    const {
        data: rawData,
        total,
        per_page: perPage,
        current_page: page,
    } = pagination;

    const primaryAction = {
        text: Lang.get('resources.create', {
            name: 'Product',
        }),
        clicked: () =>
            history.push(
                NavigationUtils.route('backoffice.resources.products.create'),
            ),
    };

    const columns = [
        { name: 'Product', property: 'name', sort: true },
        { name: 'Quantity', property: 'quantity' },
        { name: 'Metric', property: 'metric' },
        {
            name: 'Actions',
            property: 'actions',
            filter: false,
            sort: false,
        },
    ];

    const data =
        rawData &&
        rawData.map(Product => {
            console.log(Product);
            return {
                name: (
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item>{Product.label}</Grid>
                    </Grid>
                ),
                quantity: Product.quantity,
                metric: Product.metric,

            }
        });

    return (
        <MasterLayout
            {...childProps}
            loading={loading}
            pageTitle={Lang.get('navigation.products')}
            primaryAction={primaryAction}
            loading={loading}
            message={message}
            alert={alert}
        >
            {!loading && data && (
                <Table
                    title={Lang.get('navigation.products')}
                    data={data}
                    total={total}
                    columns={columns}
                    filters={filters}
                    sortBy={sorting.by}
                    sortType={sorting.type}
                    headerCellClicked={cellName =>
                        handleSorting(
                            cellName,
                            sorting.type === 'asc' ? 'desc' : 'asc',
                        )
                    }
                    page={parseInt(page)}
                    perPage={parseInt(perPage)}
                    onChangePage={handlePageChange}
                    onChangePerPage={handlePerPageChange}
                    onFilter={handleFiltering}
                    onFilterRemove={handleFilterRemove}
                />
            )}
        </MasterLayout>
    );
}

export default List;
