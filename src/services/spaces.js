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

const DELETESPACE_ENDPOINT = "/api/spaces/delete-space"
export const deleteSpace = async (spaceId, accessToken) => {
    try {
        const response = await request.deleteRe(DELETESPACE_ENDPOINT, {
            params:{spaceId},
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response;

    } catch (error) {
        return error
    }
};

