import React, {memo, useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faMapLocationDot,
    faUserGroup, faX, faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import * as favouritesService from "../../services/favourite"
import {toast} from "react-toastify";
import ConfirmDelete from "../confirmDelete/ConfirmDelete";
import SharingModal from "../sharingModal";
import MethodContext from "../../context/methodProvider";
import Review from "../review/Review";

const ItemBookingHistory = ({itemBooking = {}}) => {

    const {formatNumber, cutOverLetter, notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const [isOpenFormFeedback ,setIsOpenFeedback] = useState(false)


    function formatTimestampToVietnameseDate(timestamp) {
        const dateObj = new Date(timestamp);

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'UTC'
        };

        const vietnameseDate = dateObj.toLocaleDateString('vi-VN', options);
        return vietnameseDate;
    }



    return (

        <div className="mb-3 transition-all hover:shadow-md hover:shadow-gray-200 rounded border-gray-400 border-[1px]">
            <div className="grid grid-cols-12 ">
                <div className="col-span-12 md:col-span-5 p-4 rounded-lg">
                    <img className="w-full h-[200px] object-cover rounded-lg shadow"
                         src={itemBooking?.spaceId?.images[0]?.imageUrl}
                         alt={itemBooking?.spaceId?.title}></img>
                </div>

                <div className="col-span-12 md:col-span-7 px-4 my-4 md:mt-4 md:pr-4">
                    <p className="text-sm text-primaryColor font-semibold">{itemBooking?.spaceId?.categoryId?.categoryName}</p>
                    <div className="flex items-center py-3">
                        <img className="w-[40px] h-[40px] rounded-full mr-3"
                             src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                             alt="customer"></img>
                        <h4 className="text-xm font-bold text-textBoldColor ">{itemBooking?.spaceId?.ownerId?.name}</h4>
                        <div className="ml-3">
                            {/*<Rating valueRating={2}/>*/}
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xm font-bold text-textBoldColor">{formatNumber(itemBooking?.spaceId?.price)}VNĐ<span
                            className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-2 text-textBoldColor text-sm mb-3">
                        <div className="text-left ">
                            <FontAwesomeIcon className="-rotate-45"
                                             icon={faArrowsLeftRight}/>
                            <span className="ml-3">{itemBooking?.spaceId?.area} m^2</span>
                        </div>
                        <div className="text-right ">
                            <FontAwesomeIcon icon={faBed}/>
                            <span className="ml-3">{itemBooking?.spaceId?.bedroomNumbers} Bedrooms</span>
                        </div>
                        <div className="text-left ">
                            <FontAwesomeIcon icon={faUserGroup}/>
                            <span className="ml-3">{itemBooking?.spaceId?.peopleNumbers} Guess</span>
                        </div>
                        <div className="text-right ">
                            <FontAwesomeIcon icon={faBath}/>
                            <span className="ml-3">{itemBooking?.spaceId?.bathroomNumbers} Bathroom</span>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between text-textBoldColor">
                        <div>
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                            <span
                                className="mx-3 truncate max-w-full">{itemBooking?.spaceId?.address !== undefined && cutOverLetter(itemBooking?.spaceId?.address, 40)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative px-5 pb-5 m-1 border-primaryColor border-[1px] rounded">
                <div className="flex justify-between">
                    <h3 className="text-lg text-primaryColor font-semibold">Nội dung ghi chú</h3>
                    <p className="text-[15px] text-primaryColor hover:underline hover:cursor-pointer font-semibold"
                    onClick={() => setIsOpenFeedback(true)}>Đánh giá</p>
                </div>
                <p className="text-lg">- {itemBooking?.comment}</p>
                <p className="text-[15px]">Ngày đến: {formatTimestampToVietnameseDate(itemBooking?.dateArrive)}</p>
                <p className="absolute right-5 bottom-3 text-sm text-gray-400">{formatTimestampToVietnameseDate(itemBooking?.date)}</p>
            </div>
            {isOpenFormFeedback && <Review closeModal={setIsOpenFeedback} type="create" idOwner={itemBooking?.spaceId?.ownerId?.id} />}

        </div>

    );
};

export default memo(ItemBookingHistory);