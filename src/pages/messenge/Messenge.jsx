import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Messenge = () => {
    return  (
        <div className='w-full h-screen flex flex-col'>
                    <Header />
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