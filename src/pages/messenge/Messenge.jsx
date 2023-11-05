import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
// import Footer from "../../components/footer/Footer";
// import HeaderManage from "../../components/header/HeaderManage";
import MessengeHome from "./MessengeHome";

const Messenge = () => {
  return (
    <div className="w-full flex flex-col">
      {/* <HeaderManage /> */}
      <div className="flex w-full flex-auto">
        <SidebarManage />
        <div className="flex-auto">
          <MessengeHome />
        </div>
      </div>
      {/* <div>
            <Footer />
           </div> */}
    </div>
  );
};

export default Messenge;
