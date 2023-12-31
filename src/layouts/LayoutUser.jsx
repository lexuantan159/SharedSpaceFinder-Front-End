import React from "react";
import SidebarManage from "../components/sidebarmanage/SidebarManage";
import HeaderManage from "../components/header/HeaderManage";

const LayoutUser = ({children}) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <HeaderManage />
      <div className="flex w-full flex-auto">
        <SidebarManage />
        <div className="relative flex-auto p-4 ">
                {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
