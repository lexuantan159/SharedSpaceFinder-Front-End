import * as request from '../ultils/request'


const SPACES_ENDPOINT = "/api/spaces"

export const getSpace = async () => {
    try {
        const response = await request.getSpaces(SPACES_ENDPOINT, {});
        return response;

    } catch (error) {
        return error
    }
};
