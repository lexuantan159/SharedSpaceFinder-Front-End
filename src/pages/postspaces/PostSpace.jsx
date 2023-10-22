import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";

import Footer from "../../components/footer/Footer";
import PostSpaceHome from "./PostSpaceHome";
import HeaderManage from "../../components/header/HeaderManage";

const PostSpace = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col">
        <HeaderManage />
        <div className="flex w-full flex-auto">
          <SidebarManage />
          <div className="flex-auto p-4">
            <PostSpaceHome />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PostSpace;
