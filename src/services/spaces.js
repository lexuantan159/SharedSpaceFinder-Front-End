import * as request from '../ultils/request'

const SPACES_ENDPOINT = "/api/spaces/list-spaces"

export const getSpace = async (paramsObject) => {
    try {
        return await request.get(SPACES_ENDPOINT, {
            params: paramsObject
        });
    } catch (error) {
        return error
    }
};

const POST_SPACES_ENDPOINT = "/api/spaces/create-space"

export const createSpace = async (accessToken, formData) => {
    try {
        return await request.post(POST_SPACES_ENDPOINT,
          formData
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${accessToken}`
            },
            withCredentials: true
        });
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

