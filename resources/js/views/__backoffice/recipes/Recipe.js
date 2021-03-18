import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import { Master as MasterLayout } from "../layouts";
import { Recipes } from "../../../models";
import { Fragment } from "react";
import * as NavigationUtils from '../../../helpers/Navigation';
import Dairy from '../../../../img/icons/dairy.png';
import NoGluten from '../../../../img/icons/no-gluten.png';
import Vegan from '../../../../img/icons/vegan.png';
import Vegetarian from '../../../../img/icons/vegetarian.png';


function Recipe(props) {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const [message, setMessage] = useState({});
    const { history } = props;

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
                        <Grid className="mb-4" container style={{'marginTop':20}}>
                            
                            {recipe.data.vegan ? <Grid item xs={3} style={{textAlign: 'center'}}>
                             <img src={`${Vegan}`} style={{maxWidth:40}}/>
                            </Grid> : null }
                            {recipe.data.vegetarian ? <Grid item xs={3} style={{textAlign: 'center'}}>
                            <img src={`${Vegetarian}`} style={{maxWidth:40}}/>

                            </Grid> : null }
                            
                            {recipe.data.glutenFree ? <Grid item xs={3} style={{textAlign: 'center'}}>
                            <img src={`${NoGluten}`} style={{maxWidth:40}}/>

                            </Grid> : null }
                            {recipe.data.dairyFree ? <Grid item xs={3} style={{textAlign: 'center'}}>
                            <img src={`${Dairy}`} style={{maxWidth:40}}/>

                            </Grid> : null }
                            </Grid>
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
                                <Typography
                                        component="span"
                                        align="center"
                                        gutterBottom
                                    >
                                        {recipe.data.readyInMinutes} mins
                                    </Typography>
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
                                <Typography
                                        component="span"
                                        align="center"
                                        gutterBottom
                                    >
                                    {recipe.data.healthScore}
                                    </Typography>
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
                                    <Typography
                                        component="span"
                                        align="center"
                                        gutterBottom
                                    >
                                    {recipe.data.servings}
                                    </Typography></Paper>
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
                            <Typography
                                component="p"
                                gutterBottom
                            >
                            {recipe.data.extendedIngredients !== undefined ? renderIngredients(recipe.data.extendedIngredients):null}
                            </Typography>
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
