import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080',
});

const requestAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api/',
});
// Method address
export const getAddress = async (endPoints, option = {}) => {
    const response = await requestAddress.get(endPoints, option);
    return response;
};


// method request
export const get = async (endPoints, option = {}) => {
    return await request.get(endPoints, option);
};

export const post = async (endPoints,body= {}, option = {}) => {
    return await request.post(endPoints,body, option);
};

export const put = async (endPoints,body= {}, option = {}) => {
    return await request.put(endPoints,body, option);
};

export const deleteRe = async (endPoints, option = {}) => {
    return await request.delete(endPoints, option);
};



export const getSpaces = async (endPoints, option = {}) => {
    const response = await request.get(endPoints, option);
    return response;
};


// Method system
export const postWithoutHeader = async (endPoints, data  = {}) => {
    const response= await request.post(endPoints, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    return response;
};

