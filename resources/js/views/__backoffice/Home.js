import React, { useState, useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';

import { Master as MasterLayout } from './layouts';
import { Recipes } from '../../models';

function Home(props) {
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({});
    const [message, setMessage] = useState({});

/**
     * This should send an API request to fetch all resource.
     *
     *
     * @return {undefined}
     */
 const fetchRecipes = async () => {
    try {
        const pagination = await Recipes.paginated();

        setLoading(false);
        setPagination(pagination);
        setMessage({});
        return;
        console.log(pagination);
    } catch (error) {
        console.log(error)
    }
};



    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get('navigation.recipes')}
            showBreadcrumbs={false}
            children={fetchRecipes}
        >
            
        </MasterLayout>
    );
}

export default Home;
