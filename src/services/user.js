// import * as request from '../ultis/request';

// const USERS_ENDPOINT = "/users/current-user"

// export const getcurrentuser = async (accessToken) => {
//     try {
//         const response = await request.get(USERS_ENDPOINT, {
//             headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         return {    
//             fullname: response.data.userData.fullname,
//             email: response.data.userData.email,
//             address: response.data.userData.address,
//             phone: response.data.userData.phone,
//             date_of_birth: response.data.userData.date_of_birth,
//             avatar: response.data.userData.avatar,
//         };
//     } catch (error) {
//         return error
//     }
// };

// const EDID_USERS = '/users/edit-profile/';
// export const EditProfile = async (accessToken, email, fullname,phone,address,date_of_birth,avatar) => {
//     try {
//         const response = await request.put(
//             EDID_USERS,
//             {
//                 headers: { Authorization: `Bearer ${accessToken}` },
//             },
//             {
//                 fullname: fullname,
//                 email: email,
//                 address: address,
//                 phone: phone,
//                 date_of_birth: date_of_birth,
//                 avatar: avatar,

//             },
            
//         );

//         return {
//             message: response.data.message,
//             statusCode: response.status,
//         };
//     } catch (error) {
//         return error
//     }
// };
