import * as request from '../ultils/request'

const PROVINCES_ENDPOINT = 'province';

export const getProvinces = async () => {
    try {
        const response = await request.getAddress(PROVINCES_ENDPOINT, {});
        return response;

    } catch (error) {
        return error
    }
};

const DISTRICT_ENDPOINT = 'province/district/'
export const getDistrict = async (idProvince) => {
    try {
        const response = await request.getAddress(  `${DISTRICT_ENDPOINT}${idProvince}`, {
        });
        return response;

    } catch (error) {
        return error
    }
};

const WARD_ENDPOINT = 'province/ward/'
export const getWard = async (idDistrict) => {
    try {
        const response = await request.getAddress(  `${WARD_ENDPOINT}${idDistrict}`, {
        });
        return response;

    } catch (error) {
        return error
    }
};
