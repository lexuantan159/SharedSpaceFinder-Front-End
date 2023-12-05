import React from "react";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";
import HeaderAdmin from "../components/headerAdmin/HeaderAdmin";
import SidebarAdminClone from "../components/sidebarAdmin/SidebarAdminClone";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <SidebarAdminClone />
      <div className="bg-blueGray-100 relative min-h-[100vh] bg-[#FAFBFC] md:ml-64">
        <HeaderAdmin />
        <div className="relative h-full pt-12 pb-32 md:pt-32">
          <div className="w-full px-4 pb-10 mx-auto -m-24 md:px-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
