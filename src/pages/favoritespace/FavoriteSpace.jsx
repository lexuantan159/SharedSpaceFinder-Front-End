import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ListFavoriteSpace from "./ListFavoriteSpace";
import SidebarFilter from "../../components/sidebarFilter/SidebarFilter";

const FavoriteSpace = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex w-full flex-auto">
        <SidebarManage />
        <div className="flex-auto p-4">
          <h1 className="text-3x1 text-primaryColor text-xl font-medium py-4 border-b border-gray-200">
            Không gian yêu thích
          </h1>
          <div className="w-full flex gap-4 py-4">
            <div className="w-[70%]">
              <ListFavoriteSpace />
              <ListFavoriteSpace />
              <ListFavoriteSpace />
              <ListFavoriteSpace />
            </div>
            <div className="w-[30%]">
              <SidebarFilter />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoriteSpace;
