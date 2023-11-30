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
