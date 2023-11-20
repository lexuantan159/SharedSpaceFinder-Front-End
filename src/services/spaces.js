import * as request from '../ultils/request'

const SPACES_ENDPOINT = "/api/spaces/list-spaces"

export const getSpace = async (paramsObject) => {
    try {
        const response = await request.get(SPACES_ENDPOINT, {
            params: paramsObject
        });
        return response;

    } catch (error) {
        return error
    }
};
