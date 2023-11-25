import * as request from "../ultils/request";

const SPACES_ENDPOINT = "/api/spaces/list-spaces";
const UPDATE_ENDPOINT = "/api/spaces/update-space";

export const getSpace = async (paramsObject) => {
  try {
    const response = await request.get(SPACES_ENDPOINT, {
      params: paramsObject,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateSpace = async (paramsObject) => {
  try {
    const response = await request.get(SPACES_ENDPOINT, {
      paramsObject,
    });
    return response;
  } catch (error) {
    return error;
  }
};
