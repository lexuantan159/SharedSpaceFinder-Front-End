import * as request from '../ultils/request'

const POST_SHARING_ENDPOINT = "/api/spaces/create-sharing"

export const createSharing = async (spaceId, content, accessToken) => {
    try {
        return await request.post(POST_SHARING_ENDPOINT,
            {content}
            , {
                params: {
                    spaceId
                },
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
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
