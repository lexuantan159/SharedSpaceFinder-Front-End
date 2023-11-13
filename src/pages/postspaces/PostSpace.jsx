import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import PostSpaceHome from "./PostSpaceHome";
// import Footer from "../../components/footer/Footer";

// import HeaderManage from "../../components/header/HeaderManage";

const PostSpace = () => {
  return (
    <div>
      <div className="w-full flex flex-col">
        <HeaderManage />
        <div className="flex w-full flex-auto">
          <SidebarManage />
          <div className="flex-auto p-4">
            <PostSpaceHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSpace;
