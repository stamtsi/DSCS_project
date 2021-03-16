import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { Master as MasterLayout } from "../layouts";
import { Recipes } from "../../../models";
import { Fragment } from "react";
import * as NavigationUtils from '../../../helpers/Navigation';

function Recipe(props) {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const [message, setMessage] = useState({});

    /**
     * This should send an API request to fetch the recipe.
     *
     * @param {number} id
     * 
     * @return {undefined}
     */
    const fetchRecipes = async id => {
        try {
            const recipe = await Recipes.show(id);
            setLoading(false);
            setRecipe(recipe);
            setMessage({});
            console.log(recipe);
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
        const { params } = props.match;

        if (recipe.hasOwnProperty("data")) {
            return;
        }

        fetchRecipes(params.id);
    }, [recipe.data]);

    const renderIngredients = (ingredients) => {
        return ingredients.length>0 && ingredients.map(element=>{
            return (<Grid item xs={12}>
                        {element.originalString}
                    </Grid>
            );
        })
    }

    const recipeData =
        recipe.data !== undefined &&
                <Grid item xs={12} className="p-2" sm={4}>
                    <div>
                        <img src={`${recipe.data.image}`} />
                        {/* <Typography>{recipe.title}</Typography> */}
                        <Typography
                            component="h3"
                            variant="h5"
                            gutterBottom
                        >
                            {recipe.data.title}
                        </Typography>
                       
                            <Grid className="mb-4" container>
                            
                                <Grid item xs={4}>
                                <Paper className="recipe-feature">
                                    {recipe.data.readyInMinutes} mins
                                    </Paper>
                                    <Typography
                                        component="p"
                                        align="center"
                                        gutterBottom
                                    >
                                        total time
                                    </Typography>
                                   
                                </Grid>
                                <Grid item xs={4}>
                                <Paper className="recipe-feature">

                                    {recipe.data.healthScore}
                                    </Paper>
                                    <Typography
                                        component="p"
                                        align="center"
                                        gutterBottom
                                    >
                                        health score
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={4}>
                                <Paper className="recipe-feature">
                                    {recipe.data.servings}
                                    </Paper>
                                    <Typography
                                        component="p"
                                        align="center"
                                        gutterBottom
                                    >
                                        servings
                                    </Typography>
                                </Grid>

                            </Grid>

                        <Grid className="mb-4" gutterBottom container>
                            <Typography
                                component="h4"
                                variant="h6"
                                gutterBottom
                            >
                                Ingredients
                            </Typography>
                            <Grid className="mb-4" gutterBottom container>
                            {recipe.data.extendedIngredients !== undefined ? renderIngredients(recipe.data.extendedIngredients):null}
                            </Grid>
                        </Grid>

                        <Grid className="mb-4" gutterBottom container>
                            <Typography
                                component="h4"
                                variant="h6"
                                gutterBottom
                            >
                                Instructions
                            </Typography>
                            <Typography
                                component="p"
                                gutterBottom
                            >
                                {recipe.data.instructions}
                            </Typography>
                        </Grid>

                        <Grid className="mb-4" gutterBottom container>
                            <Typography
                                component="h4"
                                variant="h6"
                                gutterBottom
                            >
                                Summary
                            </Typography>
                                <Typography
                                component="p"
                                align="left"
                                gutterBottom
                                dangerouslySetInnerHTML={{
                                    __html: recipe.data.summary
                                }}
                            >
                            
                            </Typography>
                        </Grid>
                        
                    </div>
                </Grid>
           
    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get("navigation.recipes")}
            showBreadcrumbs={false}
            primaryAction={primaryAction}

            loading={loading}
        >
            {!loading && recipeData}
        </MasterLayout>
    );
}

export default Recipe;
