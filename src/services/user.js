import * as request from "../ultils/request";

const USERS_ENDPOINT = "/api/users/current-user";

export const getcurrentuser = async (accessToken) => {
  try {
    const response = await request.get(USERS_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};

const EDIDIT_USERS = "/api/users/edit-profile/";

export const EditUser = async (
  accessToken,
  name,
  address,
  dateOfBirth,
  phone,
  avatar,
) => {
  try {
    const response = await request.post(
      EDIDIT_USERS,
      {
        name: name,
        phone: phone,
        dateOfBirth: dateOfBirth,
        address: address,
        avatar: avatar,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

const DELETE_ENDPOINT = "/api/users/delete-user";

export const deleteUserById = async (accessToken, id) => {
  try {
    const response = await request.deleteRe(`${DELETE_ENDPOINT}?userId=${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};
