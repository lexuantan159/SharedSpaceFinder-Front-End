import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PostSpaceHome from "./PostSpaceHome";

const PostSpace = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col">
        <Header />
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
