import * as request from '../ultils/request'

const CREATE_ENDPOINT = "/api/favorites/create-favorite"
export const createFavourite = async (paramsObject, accessToken) => {
  try {
    const response = await request.post(CREATE_ENDPOINT, {},{
      params:paramsObject,
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    });
    return response;
  } catch (error) {
    return error
  }
};

const UPDATE_ENDPOINT = "/api/favorites/update-favorite"
export const updateFavourite = async (paramsObject, accessToken) => {
  try {
    const response = await request.put(UPDATE_ENDPOINT,{}, {
      params:paramsObject,
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    });
    return response;

  } catch (error) {
    return error
  }
};

const GET_ENDPOINT = "/api/favorites/list-favorite"
export const getFavourite = async (paramsObject, accessToken) => {
  try {
    const response = await request.get(GET_ENDPOINT, {
      params: paramsObject,
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    });
    return response;

  } catch (error) {
    return error
  }
};

const DELETE_ENDPOINT = "/api/favorites/delete-favorite"
export const deleteFavourite = async (favoriteId, accessToken) => {
  try {
    const response = await request.deleteRe(DELETE_ENDPOINT, {
      params:{favoriteId},
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    });
    return response;

  } catch (error) {
    return error
  }
};