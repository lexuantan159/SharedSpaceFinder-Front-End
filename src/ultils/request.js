import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080',
});

const requestAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api/',
});

export const getAddress = async (endPoints, option = {}) => {
    const response = await requestAddress.get(endPoints, option);
    return response;
};

export const getSpaces = async (endPoints, option = {}) => {
    const response = await request.get(endPoints, option);
    return response;
};

