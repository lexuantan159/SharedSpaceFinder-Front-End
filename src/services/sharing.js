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
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            });
    } catch (error) {
        return error
    }
};

const SHARING_ENDPOINT = "/api/spaces/list-sharing"

export const getSharing = async (paramsObject) => {
    try {
        return await request.get(SHARING_ENDPOINT, {
            params: paramsObject
        });
    } catch (error) {
        return error
    }
};

const PUT_SHARING_ENDPOINT = "/api/spaces/update-sharing"

export const updateSharing = async (spaceId, content, accessToken) => {
    console.log({spaceId, content, accessToken})
    try {
        return await request.put(PUT_SHARING_ENDPOINT,
            {content}
            , {
                params: {
                    spaceId
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            });
    } catch (error) {
        return error
    }
};

const DELETE_SHARING_ENDPOINT = "/api/spaces/delete-sharing"

export const deleteSharing = async (spaceId, content, accessToken) => {
    try {
        return await request.deleteRe(DELETE_SHARING_ENDPOINT
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
