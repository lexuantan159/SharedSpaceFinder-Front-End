import * as request from '../ultils/request'
import queryString from 'query-string';

const SPACES_ENDPOINT = "/api/spaces/list-spaces"

export const getSpace = async (paramsObject) => {
    try {
        const params = queryString.stringify(paramsObject);
        const response = await request.getSpaces(`${SPACES_ENDPOINT}/?${params}`, {});
        return response;

    } catch (error) {
        return error
    }
};
