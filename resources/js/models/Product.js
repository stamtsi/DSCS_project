import axios from 'axios';

export default class Product {
    /**
     * Fetch a paginated product list.
     *
     * @param {object} params
     *
     * @return {object}
     */
    static async paginated(params = {}) {
        console.log(params)
        const response = await axios.get('/api/v1/products', {
            params,
        });
        console.log(response)
        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Store a new product.
     *
     * @param {object} attributes
     *
     * @return {object}
     */
    static async store(attributes) {
        const response = await axios.post('/api/v1/products', attributes);

        if (response.status !== 201) {
            return {};
        }

        return response.data;
    }

    /**
     * Show a product.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async show(id) {
        const response = await axios.get(`/api/v1/products/${id}`);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Update a product.
     *
     * @param {number} id
     * @param {object} attributes
     *
     * @return {object}
     */
    static async update(id, attributes) {
        const response = await axios.patch(`/api/v1/products/${id}`, attributes);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Delete a product.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async delete(id) {
        const response = await axios.delete(`/api/v1/products/${id}`);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Restore a product.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async restore(id) {
        const response = await axios.patch(`/api/v1/products/${id}/restore`);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }
}
