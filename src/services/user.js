import * as request from "../ultils/request";

const USERS_ENDPOINT = "/api/users/current-user";

export const getcurrentuser = async (accessToken) => {
    try {
        const response = await request.get(USERS_ENDPOINT, {
            headers: {Authorization: `Bearer ${accessToken}`},
        });
        return response;
    } catch (error) {
        return error;
    }
};

const EDIT_PROFILE_ENDPOINT = "/api/users/edit-profile"

export const editProfile = async (formData, accessToken) => {
    try {
        return await request.put(EDIT_PROFILE_ENDPOINT,
            formData,

            {
                headers: {
                    "Content-Type": "application/form-data",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            });
    } catch (error) {
        return error
    }
};

const REGISTER_OWNER_ENDPOINT = "/api/users/register-owner"

export const registerOwner = async (accessToken) => {
    try {
        return await request.put(REGISTER_OWNER_ENDPOINT,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            });
    } catch (error) {
        return error
    }
};


const DELETE_ENDPOINT = "/api/users/delete-user";

export const deleteUserById = async (accessToken, id) => {
    try {
        const response = await request.deleteRe(`${DELETE_ENDPOINT}?userId=${id}`, {
            headers: {Authorization: `Bearer ${accessToken}`},
        });
        return response;
    } catch (error) {
        return error;
    }
};
