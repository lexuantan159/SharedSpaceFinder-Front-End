import React, {memo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faMapLocationDot,
    faUserGroup, faX,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import * as favouritesService from "../../services/favourite"
import {toast} from "react-toastify";

const ItemFavoriteSpace = ({favouriteItem = {}, favouriteId, accessToken, setDeleteFavourite}) => {
    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    console.log(favouriteItem)

    const handleDeleteFavouriteSpace = async (e) => {
        // Prevent the click event from propagating to the parent link
        e.preventDefault();
        e.stopPropagation();
        const responseDeleteFavourite = await favouritesService.deleteFavourite(favouriteId, accessToken)
        if (responseDeleteFavourite?.status === 200) {
            setDeleteFavourite(true)
        } else {
            console.log(responseDeleteFavourite)
            notify("Xóa không gian yêu thích thất bại!", "error")
        }
    }

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }

    return (
        <Link to={`/spaces/${favouriteItem?.space?.id}`} className="">
            <div
                className="grid grid-cols-12 transition-all hover:shadow-md hover:shadow-gray-200 rounded border-gray-400 border-[1px] mb-7">
                <div className="col-span-12 md:col-span-5 p-4 rounded-lg">
                    <img className="w-full h-[220px] object-cover rounded-lg shadow"
                         src={favouriteItem?.space?.images[0]?.imageUrl}
                         alt="customer"></img>
                </div>

                <div className="col-span-12 md:col-span-7 px-4 my-4 md:mt-4 md:pr-4">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-primaryColor font-semibold">{favouriteItem?.space?.categoryId?.categoryName}</p>
                        <FontAwesomeIcon onClick={(e) => handleDeleteFavouriteSpace(e)}
                                         className="hover:bg-gray-200 text-lg p-2 rounded" icon={faX}/>
                    </div>
                    <div className="flex items-center py-3">
                        <img className="w-[40px] h-[40px] rounded-full mr-3"
                             src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                             alt="customer"></img>
                        <h4 className="text-xm font-bold text-textBoldColor ">{favouriteItem?.space?.ownerId?.name}</h4>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xm font-bold text-textBoldColor">{formatNumber(favouriteItem?.space?.price) + "đ"}<span
                            className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-2 text-textBoldColor text-sm mb-3">
                        <div className="text-left ">
                            <FontAwesomeIcon className="-rotate-45"
                                             icon={faArrowsLeftRight}/>
                            <span className="ml-3">{favouriteItem?.space?.area} m^2</span>
                        </div>
                        <div className="text-right ">
                            <FontAwesomeIcon icon={faBed}/>
                            <span className="ml-3">{favouriteItem?.space?.bedroomNumbers} Giường</span>
                        </div>
                        <div className="text-left ">
                            <FontAwesomeIcon icon={faUserGroup}/>
                            <span className="ml-3">{favouriteItem?.space?.peopleNumbers} Người</span>
                        </div>
                        <div className="text-right ">
                            <FontAwesomeIcon icon={faBath}/>
                            <span className="ml-3">{favouriteItem?.space?.bathroomNumbers} Phòng tắm</span>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between text-textBoldColor">
                        <div className={"truncate"}>
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                            <span
                                className="mx-3">{favouriteItem?.space?.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default memo(ItemFavoriteSpace);