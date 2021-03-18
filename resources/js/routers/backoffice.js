import { Home } from '../views/__backoffice';
import * as Settings from '../views/__backoffice/settings';
import * as Products from '../views/__backoffice/products';
import * as Recipe from '../views/__backoffice/recipes';


const resources = [
    {
        name: 'recipes.show',
        path: '/recipes/:id',
        component: Recipe.Recipe,
    },
    {
        name: 'products.edit',
        path: '/products/:id/edit',
        component: Products.Edit,
    },
    {
        name: 'products.index',
        path: '/products',
        component: Products.List,
    },

    {
        name: 'products.create',
        path: '/products/create',
        component: Products.Create,
    },
].map(route => {
    route.name = `resources.${route.name}`;
    route.path = `/resources${route.path}`;

    return route;
});

export default [
    {
        name: 'home',
        path: '/',
        component: Home,
    },

    {
        name: 'settings.profile',
        path: '/settings/profile',
        component: Settings.Profile,
    },

    {
        name: 'settings.account',
        path: '/settings/account',
        component: Settings.Account,
    },

    ...resources,
].map(route => {
    route.name = `backoffice.${route.name}`;
    route.auth = true;

    return route;
});
