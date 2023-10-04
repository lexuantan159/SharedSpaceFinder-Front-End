import axios from "axios";

const request = axios.create({
    baseURL: 'url',
});

const requestAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api/',
});

export const getAddress = async (endPoints, option = {}) => {
    const response = await requestAddress.get(endPoints, option);
    return response;
};

