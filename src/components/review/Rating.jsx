import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Rating = ({valueRating = 0}) => {
    return (<>
        {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
                key={star}
                className={`text-xl cursor-pointer ${star <= valueRating ? 'text-[#f5ed00]' : 'text-gray-400'}`}
                icon={faStar}
            />
        ))}
    </>)

}

export default Rating