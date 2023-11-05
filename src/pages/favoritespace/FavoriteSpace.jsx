import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
// import Footer from "../../components/footer/Footer";

// import HeaderManage from "../../components/header/HeaderManage";
import ItemFavoriteSpace from "../../components/itemfavoritespace/ItemFavoriteSpace";

const FavoriteSpace = () => {
  return (
    <div className="w-full flex flex-col">
      {/* <HeaderManage /> */}
      <div className="flex w-full flex-auto">
        <SidebarManage />
        <div className="flex-auto p-4">
          <h1 className="text-3x1 text-primaryColor text-xl font-medium py-4 border-b border-gray-200">
            Không gian yêu thích
          </h1>
          <div className="w-full gap-4 py-4 "> 
              <ItemFavoriteSpace />
              <ItemFavoriteSpace />
              <ItemFavoriteSpace />
              <ItemFavoriteSpace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSpace;
