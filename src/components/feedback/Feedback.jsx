import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

const Feedback = ({feedbackValue}) => {
    return (
        <div className="py-4">
            <Link to="/">
                <div
                    className="w-auto mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 h-[300px]">
                    <div className="text-primaryColor text-4xl mb-3">
                        <FontAwesomeIcon className="mr-3" icon={faQuoteLeft}/>
                        <FontAwesomeIcon className="" icon={faQuoteRight}/>
                    </div>
                    <p className="px-2">{feedbackValue?.comment}</p>
                    <img className="w-[50px] h-[50px] rounded-full mx-auto mt-3"
                         src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                         alt="customer"></img>
                    <h4 className="mt-3 mb-8 text-xl font-bold text-textBoldColor">{feedbackValue?.userSendFeedBack?.name}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Feedback