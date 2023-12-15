import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Review = ({rating, setRating, comment, setComment}) => {

    console.log(rating)
    const handleStarClick = (starRating) => {
        setRating(starRating);
    };

    return (<>
    <h4 className="text-center text-lg border-t border-gray-400 pt-3 text-primaryColor font-bold pb-2">Đánh Giá Của Bạn</h4>
    <div className="">
        <div className="text-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    className={`text-xl cursor-pointer ${star <= rating ? 'text-[#f5ed00]' : 'text-gray-400'}`}
                    icon={faStar}
                    onClick={() => handleStarClick(star)}
                />
            ))}
        </div>

        <label className="block text-[15px] font-semibold text-textBoldColor mb-2"
               htmlFor="inputAdress">Nội dung đánh giá</label>
        <textarea
            className="block w-full h-[100px] pl-4 pr-10 py-3 border rounded-xl outline-none"
            id="inputAdress"
            placeholder="Nội dung..."
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
    </div>
    </>)
}

export default Review;