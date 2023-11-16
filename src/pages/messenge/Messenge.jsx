import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import Footer from "../../components/footer/Footer";
import HeaderManage from "../../components/header/HeaderManage";
const Messenge = () => {
    return  (
        <div className='w-full flex flex-col'>
                    {/*<HeaderManage />*/}
           <div className='flex w-full flex-auto'>
                    <SidebarManage />
                <div className='flex-auto p-4'>
                   chat
                </div>
           </div>
           <div>
            <Footer />
           </div>
        </div>
    )
}

export  default Messenge;