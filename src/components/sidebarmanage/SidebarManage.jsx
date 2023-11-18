import React from "react";

import anonAvatar from '../../assets/images/avatar.jpg'
import {sidebarMenu} from '../../ultils/Menusidebar'
import { Link, NavLink } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi"
import * as userService from "../../services/user"
import {useEffect, useContext,useState} from "react";
import AuthContext from "../../context/authProvider";

const activeStyle = 'hover:bg-gray-200 flex rounded-md items-center gap-4 py-3 font-bold bg-gray-200 mb-2'
const notActiveStyle = 'hover:bg-gray-200 flex rounded-md items-center gap-4 py-3 mb-2'

const SidebarManage = () => {

    const {setAuth, auth} = useContext(AuthContext);
    
    const [user, setUser] = useState({});
    useEffect(() => {
        const getuser = async () => {
            try {
                const user = await userService.getcurrentuser(auth.accessToken);
                setUser(user.data)
                // console.log(user);

            } catch (error) {
                console.log("Error ", error);
            }
        }
        getuser();
    }, [])

    return (
        <div className='p-4 w-[256px] flex-none bg-[#F6F9F9] shadow-md'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={user?.avatar || anonAvatar} alt="avatar" className='w-20 h-20 object-cover rounded-full border-2 border-grey'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='font-bold'>{user?.name || "Name User"}</span>
                    <small>{user?.phone || "Phone"}</small>
                </div>
            </div> 
            <div className="py-20">
                {sidebarMenu.map(item => (
                    <NavLink
                        to={item.path}
                        className={({isActive}) => isActive ? activeStyle : notActiveStyle }                    
                    >
                        <span className='pl-2'> {item.icons}</span>
                        <span>{item.text}</span>
                    </NavLink>
                ))}

                <Link to="/" >
                    <span className={notActiveStyle + " pl-2"}><HiOutlineLogout size={23}/>Thoát</span>
                </Link>
            </div>
            
        </div>

        

    )

}

export  default SidebarManage;