import * as request from '../ultils/request'

const GETUSER_ENDPOINT = "/api/users/users"

export const getUser = async (paramsObject, accessToken) => {
    try {
        const response = await request.get(GETUSER_ENDPOINT,{
            params:paramsObject,
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

const UPDATE_ENDPOINT = "/api/users/update-user/"

export const updateUser = async (paramsObject, accessToken) => {
    try {
        const response = await request.put(UPDATE_ENDPOINT,{

        },{
            params:paramsObject,
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
