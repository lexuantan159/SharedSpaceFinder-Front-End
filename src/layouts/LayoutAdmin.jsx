import React from 'react'
import SidebarAdmin from '../components/sidebarAdmin/SidebarAdmin';
import HeaderAdmin from '../components/headerAdmin/HeaderAdmin';

const LayoutAdmin = ({children}) => {
    return (
        <>
        <SidebarAdmin/>
        <div className="relative md:ml-64 bg-blueGray-100">
            <HeaderAdmin/>
            <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                <div className="px-4 pb-10 md:px-10 mx-auto w-full -m-24 bg-amber-50">
                    {{children}}
                </div>
            </div>
        </div>
        </>
    );
}

export default LayoutAdmin;