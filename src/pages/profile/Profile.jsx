import React from "react";
import SidebarManage from"../../components/sidebarmanage/SidebarManage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Editprofile from "./Editprofile";
import HeaderManage from "../../components/header/HeaderManage";

const Profile = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            <HeaderManage />
           <div className='flex w-full flex-auto'>
                <SidebarManage />
                <div className='flex-auto p-4'>
                   <Editprofile />
                </div>
           </div>
        </div>
        
    )
}

export  default Profile;