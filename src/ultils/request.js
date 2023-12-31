import axios from "axios";
import {toast} from "react-toastify";

let isRefreshing = false;

const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        console.log(error)
        if (error.response.status === 401 && !isRefreshing) {
            console.log("Access token expired");
            isRefreshing = true;
            try {
                console.log("Call api refresh token");
                const auth = localStorage.getItem("refresh-token");
                const refreshToken = JSON.parse(auth).refreshToken;
                const result = await instance.post(
                    `/api/auth/refresh-token`,
                    {refreshToken: refreshToken},
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                );
                const accessToken = result.data.newAccessToken;
                localStorage.setItem("access-token", accessToken);
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                return instance(originalRequest);
            } catch (error) {
                console.log(error.message)
                if (error.response.status === 401) {
                    console.log("Refresh token expired");
                    toast.info("Hết phiên đăng nhập. Vui lòng đăng nhập lại");
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    localStorage.removeItem("auth");
                    window.location.href = "/login";
                }
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);




const instanceAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api/',
});
// Method address
export const getAddress = async (endPoints, option = {}) => {
    const response = await instanceAddress.get(endPoints, option);
    return response;
};


// method instance
export const get = async (endPoints, option = {}) => {
    return await instance.get(endPoints, option);
};

export const post = async (endPoints, body = {}, option = {}) => {
    return await instance.post(endPoints, body, option);
};

export const put = async (endPoints, body = {}, option = {}) => {
    return await instance.put(endPoints, body, option);
};

export const deleteRe = async (endPoints, option = {}) => {
    return await instance.delete(endPoints, option);
};




