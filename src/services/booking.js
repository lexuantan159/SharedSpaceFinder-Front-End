import * as request from '../ultils/request'

const CREATE_ORDER_ENDPOINT = "/api/bookings/create-order"

export const createOrder = async (id, dayArrive, comment, accessToken) => {
    console.log(accessToken)
    try {
        return await request.post(CREATE_ORDER_ENDPOINT,
            {},
            {
                params: {
                    id, dayArrive, comment
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};


const CREATE_BOOKING_ENDPOINT = "/api/bookings/create-booking"

export const createBooking = async (id, dayArrive, comment, appTransId, accessToken) => {
    try {
        return await request.post(CREATE_BOOKING_ENDPOINT,
            {},
            {
                params: {
                    id, dayArrive, comment, appTransId
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};


const BOOKING_HISTORY_ENDPOINT = "/api/bookings/booking-histories"
export const getBookingHistory = async (paramsObject,accessToken) => {
    console.log(accessToken)
    try {
        return await request.get(BOOKING_HISTORY_ENDPOINT, {
            params: paramsObject,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            withCredentials: true
        });
    } catch (error) {
        return error
    }
};

