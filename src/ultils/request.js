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

export const getWithoutHeader = async (endPoints, option = {}) => {
    const response = await request.get(endPoints, option);
    return response;
};

export const putWithoutHeader = async (endPoints, option = {}) => {
    const response = await request.put(endPoints, option);
    return response;
};


export const deleteWithoutHeader = async (endPoints, option = {}) => {
    const response = await request.delete(endPoints, option);
    return response;
};


export const getWithHeader = async (endPoints, body = {}, header = {} ) => {
    const response = await request.get(endPoints, body, header);
    return response;
};

export const putWithHeader = async (endPoints, body = {}, header = {} ) => {
    const response = await request.put(endPoints, body, header);
    return response;
};


export const postWithHeader = async (endPoints, option = {}, header = {}) => {
    const response = await request.post(endPoints, option, header);
    return response;
};

export const deleteWithHeader = async (endPoints, option = {}, header = {}) => {
    const response = await request.delete(endPoints, option, header);
    return response;
};


