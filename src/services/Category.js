import * as request from '../ultils/request'


const CATEGORIES_ENDPOINT = "/api/category/categories"

export const getCategories = async () => {
    try {
        return await request.get(CATEGORIES_ENDPOINT);
    } catch (error) {
        return error
    }
};