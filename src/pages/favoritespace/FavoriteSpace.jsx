import React from "react";
import SidebarManage from "../../components/sidebarmanage/SidebarManage";
// import Footer from "../../components/footer/Footer";

// import HeaderManage from "../../components/header/HeaderManage";
import ItemFavoriteSpace from "../../components/itemfavoritespace/ItemFavoriteSpace";

const FavoriteSpace = () => {
  return (
              <div>
                <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                  {" "}
                  Không Gian Yêu Thích
                </h1>
                <ItemFavoriteSpace />
              <ItemFavoriteSpace />
              <ItemFavoriteSpace />
              <ItemFavoriteSpace />
              </div>
  );
};

export default FavoriteSpace;
