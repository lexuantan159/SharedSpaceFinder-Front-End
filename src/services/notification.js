import * as request from "../ultils/request";

const GET_NOTIFICATIONS = "/api/notifications/list-notifications";
const UPDATE_NOTIFICATION = "/api/notifications/update-notification";
const DELETE_NOTIFICATION = "/api/notifications/delete-notification";

export const getNotifications = async (paramsObject, accessToken) => {
  try {
    const response = await request.get(GET_NOTIFICATIONS, {
      params: paramsObject,
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateNotification = async (paramsObject, accessToken) => {
  console.log("🚀 ~ updateNotification ~ paramsObject:", paramsObject);
  try {
    const response = await request.put(
      `${UPDATE_NOTIFICATION}?notificationId=${paramsObject.notificationId}`,
      {},
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteNotification = async (paramsObject, accessToken) => {
  try {
    const response = await request.deleteRe(DELETE_NOTIFICATION, {
      params: paramsObject,
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
