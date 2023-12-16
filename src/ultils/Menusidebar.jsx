import icons from "./icons"
import {FaHistory, FaShare} from "react-icons/fa";
const  {HiOutlineUsers,HiOutlineChatAlt,HiOutlineHeart,HiOutlineClipboardList,HiOutlinePencilAlt} = icons
export const sidebarMenu = [
    {
        path: '/profile',
        text: 'Thông Tin Cá Nhân',
        icons: <HiOutlineUsers size={23}/>
    },
    {
        role: "owner",
        path: '/post-spaces',
        text: 'Đăng Bài Cho Thuê',
        icons: <HiOutlinePencilAlt size={23}/>
    },
    {

        path: '/manage-post',
        text: 'Quản Lý Bài Đăng',
        icons: <HiOutlineClipboardList size={23}/>
    },
    {
        path: '/favorite-space',
        text: 'Yêu thích',
        icons: <HiOutlineHeart size={23} />
    },
    {
        path: '/messenger',
        text: 'Tin Nhắn',
        icons: <HiOutlineChatAlt size={23}/>
    },
    {
        path: '/my-sharing',
        text: 'Chia Sẻ Của Tôi',
        icons: <FaShare  size={23}/>
    },
    {
        path: '/booking-history',
        text: 'Lịch Sử Thuê Phòng',
        icons: <FaHistory size={23}/>
    },

]
