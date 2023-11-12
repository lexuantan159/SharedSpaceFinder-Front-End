import * as request from '../ultils/request'


const REGISTER_ENDPOINT = "/api/auth/register"

export const register = async (name, email, password, province, district, ward, address) => {
    try {
        const response = await request.postWithoutHeader(REGISTER_ENDPOINT,
            {
                name:name,
                email: email,
                password: password,
                province: province,
                district: district,
                ward: ward,
                address: address
            });
        return response;
    } catch (error) {
        return error
    }
};

const LOGIN_ENDPOINT = "/api/auth/login"

export const login = async (email, password) => {
    try {
        return await request.postWithoutHeader(LOGIN_ENDPOINT, {
            email: email,
            password:password
        });
    } catch (error) {
        return error
    }
};