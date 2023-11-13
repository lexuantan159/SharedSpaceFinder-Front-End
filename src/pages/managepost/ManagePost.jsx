import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import ManagePostHome from "./ManagePostHome";
// import Footer from "../../components/footer/Footer";

// import HeaderManage from "../../components/header/HeaderManage";
const ManagePost = () => {
    return  (
        <div className='w-full flex flex-col'>
                    {/* <HeaderManage /> */}
           <div className='flex w-full flex-auto'>
                    <SidebarManage />
                <div className='flex-auto p-4'>
                    <ManagePostHome />
                </div>
           </div>   
        </div>
    )
}

export  default ManagePost;