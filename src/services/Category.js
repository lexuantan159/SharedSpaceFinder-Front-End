import * as request from '../ultils/request'


const CATEGORIES_ENDPOINT = "/api/category/categories"

export const getCategories = async () => {
    try {
        return await request.getWithoutHeader(CATEGORIES_ENDPOINT);
    } catch (error) {
        return error
    }
};