import axios from 'axios';

export default class Recipes {
    /**
     * Fetch a paginated product list.
     *
     * @param {object} params
     *
     * @return {object}
     */
    static async paginated() {
        const response = await axios.get('/api/v1/recipes');
        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }   

    /**
     * Show a recipe.
     *
     * @param {number} id
     *
     * @return {object}
     */
     static async show(id) {
        const response = await axios.get(`/api/v1/recipes/${id}`);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }
}
