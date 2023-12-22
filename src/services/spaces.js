import * as request from "../ultils/request";

const SPACES_ENDPOINT = "/api/spaces/list-spaces";
const UPDATE_ENDPOINT = "/api/spaces/update-space";
const ACCEPT_ENDPOINT = "/api/spaces/accept-space";
const DENIED_ENDPOINT = "/api/spaces/denied-space";


export const getSpace = async (paramsObject) => {
  try {
    return await request.get(SPACES_ENDPOINT, {
      params: paramsObject
    });
  } catch (error) {
    return error
  }
};

const POST_SPACES_ENDPOINT = "/api/spaces/create-space"

export const createSpace = async (accessToken, formData) => {
  try {
    return await request.post(POST_SPACES_ENDPOINT,
        formData
        , {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${accessToken}`
          },
          withCredentials: true
        });
  } catch (error) {
    return error
  }
};

export const acceptSpace = async (paramsObject, accessToken) => {
  console.log(paramsObject);
  try {
    const response = await request.put(
      ACCEPT_ENDPOINT,
      { ...paramsObject },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deniedSpace = async (paramsObject, accessToken) => {
  console.log(paramsObject);
  try {
    const response = await request.put(
      DENIED_ENDPOINT,
      { ...paramsObject },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};
