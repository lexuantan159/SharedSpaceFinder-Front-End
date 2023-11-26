import * as request from '../ultils/request'

const CONTACT_ENDPOINT = "/api/contact/send-contact"

export const sendContact = async (firstName, lastName,email,title,content,accessToken) => {
    try {
        const response = await request.post(CONTACT_ENDPOINT,
            {
                firstName,
                lastName,
                email,
                title,
                content
            },
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        return response;
    } catch (error) {
        return error
    }
};