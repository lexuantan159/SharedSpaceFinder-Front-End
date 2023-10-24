import icons from "./icons"

const  {HiOutlineUsers,HiOutlineChatAlt,HiOutlineHeart,HiOutlineBookmark ,HiOutlineClipboardList,HiOutlinePencilAlt} = icons
export const sidebarMenu = [
    {
    
        path: '/profile',
        text: 'Thông Tin ',
        icons: <HiOutlineUsers size={23}/>
    },
    {
        path: '/postspaces',
        text: 'Đăng Tin Cho Thuê',
        icons: <HiOutlinePencilAlt size={23}/>
    },
    {
        path: '/managepost',
        text: 'Quản Lý Tin Đăng',
        icons: <HiOutlineClipboardList size={23}/>
    },
    {
        path: '/favoritespace',
        text: 'Yêu thích',
        icons: <HiOutlineHeart size={23} />
    },
    {
        path: '/messenge',
        text: 'Messenge',
        icons: <HiOutlineChatAlt size={23}/>
    },
    {
        
        path: '/contact',
        text: 'Liên hệ',
        icons: <HiOutlineBookmark size={23}/>
    },
   
]
export default sidebarMenu