import * as request from "../ultils/request";

const DASHBOARD_ENDPOINT = "/api/dashboard/overview";

export const getDashboard = async (accessToken) => {
  try {
    const response = await request.get(DASHBOARD_ENDPOINT, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
