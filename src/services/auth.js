import * as request from '../ultils/request'

const REGISTER_ENDPOINT = "/api/auth/register"

export const register = async (name, email, password, province, district, ward, address) => {
    try {
        const response = await request.post(REGISTER_ENDPOINT,
            {
                name,
                email,
                password,
                province,
                district,
                ward,
                address
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
        return response;
    } catch (error) {
        return error
    }
};


const VERIFY_EMAIL_ENDPOINT = "/api/auth/verify-email"
export const verifyEmail = async (name, email, password, province, district, ward, address, otp) => {
    try {
        const response = await request.post(VERIFY_EMAIL_ENDPOINT,
            {
                name,
                email,
                password,
                province,
                district,
                ward,
                address,
                otp
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
        return response;
    } catch (error) {
        return error
    }
};

const LOGIN_ENDPOINT = "/api/auth/login"

export const login = async (email, password) => {
    try {
        return await request.post(LOGIN_ENDPOINT,
            {
                email: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
    } catch (error) {
        return error
    }
};

const LOGOUT_ENDPOINT = "/api/auth/logout"

export const logOut = async () => {
    try {
        return await request.post(LOGOUT_ENDPOINT);
    } catch (error) {
        return error
    }
};


const REFRESHTOKEN_ENDPOINT = "/api/auth/refresh-token"

export const refreshToken = async (refreshToken) => {
    try {
        return await request.post(REFRESHTOKEN_ENDPOINT,
            {
                refreshToken: refreshToken
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
    } catch (error) {
        return error
    }
};

const FORGOT_PASS_ENDPOINT = "/api/auth/forgot-password"

export const forgotPassword = async (email) => {
    try {
        return await request.post(FORGOT_PASS_ENDPOINT,
            {
                email: email
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};

const RESET_PASS_ENDPOINT = "/api/auth/reset-password"

export const resetPass = async (password, otp, email) => {
    try {
        return await request.post(RESET_PASS_ENDPOINT,
            {
                password: password,
                otp: otp,
                email: email
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};