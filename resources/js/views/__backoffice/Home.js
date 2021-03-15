import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { Master as MasterLayout } from "./layouts";
import { Recipes } from "../../models";
import { Fragment } from "react";
import * as NavigationUtils from '../../helpers/Navigation';

function Home(props) {
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({});
    const [message, setMessage] = useState({});
    const { history } = props;

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
            console.log(pagination);
        } catch (error) {
            console.log(error);
        }
    };

    
    const primaryAction = {
        text: Lang.get('resources.create', {
            name: 'Product',
        }),
        clicked: () =>
            history.push(
                NavigationUtils.route('backoffice.resources.products.create'),
            ),
    };
    useEffect(() => {
        if (pagination.hasOwnProperty("data")) {
            return;
        }

        fetchRecipes();
    }, [pagination.data]);
    const recipes =  pagination.data !== undefined && pagination.data.length > 0 ?
        pagination.data !== undefined &&
        pagination.data.map(recipe => {
            console.log(recipe);
            return (
                <Grid item xs={12} sm={4}  alignItems="center" className="p-4" onClick={()=>{
                    history.push(
                        NavigationUtils.route('backoffice.resources.recipes.show', {id:recipe.id}),
                    )
                }}>
                    {/* <Paper> */}
                        <div>
                            <img src={`${recipe.image}`} />
                            {/* <Typography>{recipe.title}</Typography> */}
                            <Typography
                                component="h3"
                                variant="h5"
                                align="left"
                                gutterBottom
                            >
                                {recipe.title}
                            </Typography>
                            <Typography
                                component="p"
                                align="left"
                                gutterBottom
                            >
                                Missed ingredients: <b>{recipe.missedIngredientCount}</b>
                            </Typography>
                            <Typography
                                component="p"
                                align="left"
                                gutterBottom
                            >
                                Used ingredients: <b>{recipe.usedIngredientCount}</b>
                            </Typography>
                            {/* <Typography>{recipe.title}</Typography> */}
                        </div>
                    {/* </Paper> */}
                </Grid>
            );
        }) :  
            <Typography
            component="h4"
            variant="h6"
            gutterBottom
        >
            No recipes found. Please add some products to your inventory.
        </Typography>;
    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get("navigation.recipes")}
            showBreadcrumbs={false}
            primaryAction={primaryAction}
            p={2}
            loading={loading}
        >
            {!loading && recipes}
        </MasterLayout>
    );
}

export default Home;
