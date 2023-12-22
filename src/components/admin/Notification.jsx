import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authProvider";
import * as notificationService from "../../services/notification";
import moment from "moment";
import { HttpStatusCode } from "axios";
import Pagination from "./Pagination";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  const { auth } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchNotification = async () => {
      const accessToken = auth.accessToken;
      
        const param = {
          page: currentPage,
          limit: itemPerPage,
        
      };

      const response = await notificationService.getNotifications(
        param,
        accessToken,
      );
      console.log("🚀 ~ fetchNotification ~ response:", response);

      if (response?.status === 200) {
        setNotification(response.data.listNotifications);
        setTotalPages(response.data.totalPages);
      } else {
        console.log(response);
      }
    };
    fetchNotification();
  }, [auth,currentPage]);

  const handleClickReaded = async (data) => {
    if (data.status.id === 7) return;
    const param = {
      notificationId: data.notificationId,
    };
    console.log("🚀 ~ handleClickReaded ~ param:", auth.accessToken);
    const response = await notificationService.updateNotification(
      param,
      auth.accessToken,
    );
    console.log("🚀 ~ handleClickReaded ~ response:", response);
    if (response.status === HttpStatusCode.Ok) {
      setNotification((notification) =>
        notification.map((item) => {
          if (item.notificationId === data.notificationId) {
            item.status.id = 7;
            return item;
          }
          return item;
        }),
      );
    }
  };
  const handleClickRemove = async (data) => {
    const param = {
      notificationId: data.notificationId,
    };
    const response = await notificationService.deleteNotification(
      param,
      auth.accessToken,
    );
    if (response.status === HttpStatusCode.Ok) {
      setNotification((notification) =>
        notification.filter(
          (item) => item.notificationId !== data.notificationId,
        ),
      );
    }
  };
  return (
    <Fragment>
      <h2 className="my-5 text-2xl font-bold">Management Notification</h2>
      <div className="flex flex-col gap-3">
        {notification.map((item, index) => {
          return (
            <NotificationItem
              handleClickReaded={handleClickReaded}
              handleClickRemove={handleClickRemove}
              data={item}
              key={index}
            ></NotificationItem>
          );
        })}
        <Pagination
          itemsPerPage={itemPerPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </Fragment>
  );
};

const NotificationItem = ({
  handleClickRemove,
  handleClickReaded,
  data,
  ...props
}) => {
  console.log(moment.now());
  const dateTimeAgo = moment
    .utc(data.createdAt)
    .local()
    .startOf("seconds")
    .fromNow();
  console.log("🚀 ~ NotificationItem ~ dateTimeAgo:", dateTimeAgo);

  return (
    <Fragment>
      <div
        className={`flex cursor-pointer items-center gap-2 rounded-xl  px-5 py-3 ${
          data.status.id === 6 ? "bg-white" : "bg-transparent"
        }`}
        onClick={() => handleClickReaded(data)}
      >
        <img
          src="https://mighty.tools/mockmind-api/content/human/7.jpg"
          alt="avatar"
          className="object-cover rounded-full h-9 w-9"
        />
        <div className="flex flex-col justify-between">
          <p className="text-[#4E5D78]">
            {data.sender.name} sends a request to {data.receiver.name} with a
            content: {data.content}
          </p>
          <span className="text-sm text-[#4E5D78] opacity-60">
            {dateTimeAgo}
          </span>
        </div>
        {data.status.id === 6 && (
          <div className="ml-auto h-3 w-3 rounded-full bg-[#FF5630]"></div>
        )}
        {data.status.id === 7 && (
          <button
            className="ml-auto rounded-xl bg-[#FFA900] px-6 py-2 text-white"
            onClick={() => handleClickRemove(data)}
          >
            Remove
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Notification;
