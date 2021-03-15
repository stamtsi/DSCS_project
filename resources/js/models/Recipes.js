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
}
