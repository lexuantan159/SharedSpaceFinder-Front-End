import React, {useContext, useEffect, useState} from "react";
import Pagination from "../../components/pagination/Pagination";
import MethodContext from "../../context/methodProvider";
import * as notificationServices from "../../services/notification";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import ItemProfile from "../../components/itemProfile/ItemProfile";

const Notifications = () => {
    const {filteredKeyNull, notify} = useContext(MethodContext);
    const [state, setState] = useState({
        page: 1,
        limit: 5
    })
    const [notifications, setNotifications] = useState([])
    const [totalPage, setTotalPage] = useState(null)
    const [isRead, setIsRead] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [isOpenProfile, setIsOpenProfile] = useState(false)

    useEffect(() => {
        const fetchNotifications = async () => {
            const accessToken = await JSON.parse(localStorage.getItem("access-token")).accessToken;
            const responseNotifications = await notificationServices.getNotifications(filteredKeyNull(state), accessToken);
            if (responseNotifications?.status === 200) {
                setNotifications(responseNotifications?.data?.listNotifications);
                setTotalPage(responseNotifications?.data?.totalPages)
            } else
                setNotifications([])
        }
        fetchNotifications()
    }, [state, isRead, isDelete]);

    function formatTimestampToVietnameseDate(timestamp) {
        const dateObj = new Date(timestamp);

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };

        const vietnameseDate = dateObj.toLocaleDateString('vi-VN', options);
        return vietnameseDate;
    }

    const handleUpdateNotification = async (notificationId) => {
        const accessToken = await JSON.parse(localStorage.getItem("access-token")).accessToken;
        const responseUpdate = await notificationServices.updateNotification({notificationId}, accessToken)
        console.log(responseUpdate)
        if (responseUpdate?.status === 200)
            setIsRead(!isRead)
        else
            notify("Đọc thông báo lỗi!", "error")
    }
    const handleDeleteNotification = async (notificationId) => {
        const accessToken = await JSON.parse(localStorage.getItem("access-token")).accessToken;
        const responseDelete = await notificationServices.deleteNotification({notificationId}, accessToken)
        console.log(responseDelete)
        if (responseDelete?.status === 200) {
            setIsDelete(!isDelete)
            notify("Xóa thông báo thành công!", "success")
        } else
            notify("Xóa thông báo lỗi!", "error")
    }


    return (<>
        <div className="py-4 border-b border-gray-200">
            <h1 className="text-2xl text-primaryColor font-semibold text-center">Thông báo</h1>
        </div>
        <div className="w-full flex flex-col justify-between">
            <div className="">
                {notifications?.length > 0 ? notifications.map(notification => {
                        return (
                            <div key={notification?.notificationId}
                                 className="flex justify-start mt-3 relative hover:cursor-pointer" >
                                <img className="w-[40px] h-[40px] rounded-full mr-4"
                                     onMouseEnter={() => setIsOpenProfile(true)}
                                     onMouseLeave={() => setIsOpenProfile(false)}
                                     src={notification?.sender?.avatar || "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"}
                                     alt="customer"></img>

                                {isOpenProfile && <ItemProfile profile={notification?.sender}/>}
                                <div
                                    onClick={() => handleUpdateNotification(notification?.notificationId)}
                                    className={`block p-2 w-full  rounded-lg ${notification?.status?.id === 6 ? "bg-gray-100 hover:cursor-pointer" : "bg-white border-[1px] border-primaryColor"} transition-all `}>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-lg">{notification?.sender?.name}</p>
                                        {
                                            notification?.status?.id === 6 ?
                                                <p className="bg-red-500 p-1 rounded-full shadow"></p> :
                                                <FontAwesomeIcon
                                                    onClick={() => handleDeleteNotification(notification?.notificationId)}
                                                    className="text-red-600 hover:cursor-pointer" icon={faX}/>
                                        }
                                    </div>
                                    <p className=" font-semibold ">Tiêu đề: <span
                                        className="font-normal">{notification?.type}</span></p>
                                    <p className="break-words font-semibold">Nội dung: <span
                                        className="font-normal">{notification?.content}</span></p>
                                    <p className="break-words text-sm text-right">{formatTimestampToVietnameseDate(notification?.createdAt)}</p>
                                </div>
                            </div>
                        )
                    })
                    : <p className="text-xl font-medium text-center text-primaryColor">
                        Chưa có thông báo nào!
                    </p>}

            </div>
            <div className="absolute bottom-0 left-5 right-5">
                <Pagination state={state} setState={setState} numberPage={totalPage || 3}/>
            </div>
        </div>
    </>)
}

export default Notifications