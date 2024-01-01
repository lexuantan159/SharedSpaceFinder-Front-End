import icons from "./icons"
import {FaHistory, FaShare} from "react-icons/fa";
import {FaPenToSquare} from "react-icons/fa6";
import {IoMdNotificationsOutline} from "react-icons/io";
import {PiShareFat} from "react-icons/pi";
import {MdHistory} from "react-icons/md";
const  {HiOutlineUsers,HiOutlineHeart,HiOutlineClipboardList,HiOutlinePencilAlt} = icons
export const sidebarMenu = [
    {
        path: '/profile',
        text: 'Thông tin cá nhân',
        icons: <HiOutlineUsers size={19}/>
    },
    {
        role: "owner",
        path: '/post-spaces',
        text: 'Đăng bài cho thuê',
        icons: <HiOutlinePencilAlt size={19}/>
    },
    {

        path: '/manage-post',
        text: 'Quản lý bài đăng',
        icons: <HiOutlineClipboardList size={19}/>
    },
    {
        path: '/favorite-space',
        text: 'Yêu thích',
        icons: <HiOutlineHeart size={19} />
    },
    {
        path: '/my-sharing',
        text: 'Chia sẻ của tôi',
        icons:<PiShareFat size={19} />
    },
    {
        path: '/booking-history',
        text: 'Lịch sử thuê phòng',
        icons: <MdHistory size={19}/>
    },
    {
        path: '/feedback',
        text: 'Đánh giá của bạn',
        icons: <HiOutlinePencilAlt  size={19}/>

    },
    {
        path: '/notifications',
        text: 'Đánh giá của bạn',
        icons: <IoMdNotificationsOutline size={19} />
    },

]
