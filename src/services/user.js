import * as request from '../ultils/request';

const USERS_ENDPOINT = "/api/users/current-user"

export const getcurrentuser = async (accessToken) => {
    try {
        const response = await request.get(USERS_ENDPOINT, {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            withCredentials: true
        });
        return response
    } catch (error) {
        return error
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
