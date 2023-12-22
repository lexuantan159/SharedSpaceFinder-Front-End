import React from "react";

import anonAvatar from '../../assets/images/avatar.jpg'
import {sidebarMenu} from '../../ultils/Menusidebar'
import {Link, NavLink} from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi"
import * as userService from "../../services/user"
import {useEffect, useContext, useState} from "react";
import AuthContext from "../../context/authProvider";

const activeStyle = 'hover:bg-primaryColor hover:text-white text-[14px] flex rounded-md items-center gap-4 py-3 font-medium bg-primaryColor text-white mb-2'
const notActiveStyle = 'hover:bg-primaryColor hover:text-white text-[14px] flex rounded-md font-medium items-center gap-4 py-3 mb-2'

const SidebarManage = () => {

    return (
        <div className='p-4 w-[256px] flex-none bg-[#F6F9F9] shadow-md'>

            <div className="mt-5">
                {sidebarMenu.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({isActive}) => isActive ? activeStyle : notActiveStyle}
                    >
                        <span className='pl-2'> {item.icons}</span>
                        <span>{item.text}</span>
                    </NavLink>
                ))}

                <Link to="/">
                    <span className={notActiveStyle + " pl-2"}><HiOutlineLogout size={23}/>Thoát</span>
                </Link>
            </div>

        </div>


    )

}

export default SidebarManage;