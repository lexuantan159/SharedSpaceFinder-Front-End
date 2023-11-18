import * as request from '../ultils/request';

const USERS_ENDPOINT = "/api/users/current-user"

export const getcurrentuser = async (accessToken) => {
    try {
        const response = await request.getWithHeader(USERS_ENDPOINT, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response
    } catch (error) {
        return error
    }
};


const EDIDIT_USERS = "/api/users/edit-profile/"

export const EditUser = async (accessToken,name, address,dateOfBirth, phone,avatar) => {
    try {
         
        const response = await request.postWithoutHeader(EDIDIT_USERS,
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            },
            {
                name:name,
                phone: phone,
                dateOfBirth: dateOfBirth,
                address: address,
                avatar:avatar
            },

            );
        return response;
    } catch (error) {
        return error
    }
};
