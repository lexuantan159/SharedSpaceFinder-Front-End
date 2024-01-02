import React, {useState} from "react";
import Rating from "./Rating";
import ItemProfile from "../itemProfile/ItemProfile";

const ItemFeedback = ({feedbackData}) => {
    const [isOpenProfile ,setIsOpenProfile] = useState(false)
    function formatTimestampToVietnameseDate(timestamp) {
        const dateObj = new Date(timestamp);

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };

        const vietnameseDate = dateObj.toLocaleDateString('vi-VN', options);
        return vietnameseDate;
    }

    return (
        <div className="flex justify-start mt-3 relative">
            <img className="w-[40px] h-[40px] rounded-full mr-4"
                 onMouseEnter={() => setIsOpenProfile(true)}
                 onMouseLeave={() => setIsOpenProfile(false)}
                 src={feedbackData?.userSendFeedBack?.avatar || "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"}
                 alt="customer"></img>
            {isOpenProfile && <ItemProfile profile={feedbackData?.userSendFeedBack}/>}
            <div className="block p-2 w-[500px] bg-gray-100 rounded-lg">
                <div className="flex items-center">
                    <p className="font-semibold text-lg">{feedbackData?.userSendFeedBack?.name}</p>
                    <div className="ml-2">
                        <Rating valueRating={feedbackData?.rate}/>
                    </div>
                </div>
                <p className="break-words">{feedbackData?.comment}</p>
                <p className="text-xs text-right pr-4">{formatTimestampToVietnameseDate(feedbackData?.createdAt)}</p>
            </div>
        </div>
    )

}

export default ItemFeedback