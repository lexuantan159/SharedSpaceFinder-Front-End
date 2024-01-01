import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useState} from "react";
import MethodContext from "../../context/methodProvider";
import * as feedbackServices from "../../services/review";

const Review = ({closeModal, feedback = null, type = "update", idOwner = null}) => {
    const {notify, toastLoadingId, toastUpdateLoadingId, filteredKeyNull} = useContext(MethodContext)
    const [rating, setRating] = useState(type === "update" ? feedback?.rate : 0)
    const [comment, setComment] = useState(type === "update" ? feedback?.comment : "")

    console.log(idOwner)
    const handleCreateFeedback = async () => {
        if (localStorage.getItem("auth") !== null) {
            const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
            const ownerId = idOwner
            const responseCreate = await feedbackServices.createFeedback(ownerId, accessToken, rating, comment);
            if (responseCreate?.status === 201) {
                notify("Tạo đánh giá thành công!", "success")
            }
        }
    }

    const handleUpdateFeedback = async () => {
        // get token
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        // call api
        const id = toastLoadingId("Đang chờ...")
        const ownerId = feedback?.userReceiveFeedBack?.id
        const responseUpdate = await feedbackServices.updateFeedback(ownerId, accessToken, rating, comment)
        // handle response update
        if (responseUpdate?.status === 200) {
            toastUpdateLoadingId("Thay đổi phản hồi thành công!", "success", id)
            closeModal(false);
        } else {
            console.log(responseUpdate?.response)
            toastUpdateLoadingId("Thay đổi phải hồi thất bại!", "error", id)
            closeModal(false);
        }
    }

    return (<>
        <div tabIndex="-1" aria-hidden="true"
             className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 justify-center items-center w-full md:inset-0 h-full bg-black/50 hover:cursor-pointer"
             onClick={() => closeModal(false)}
        >
            <div
                className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-white rounded-lg shadow px-6">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b border-gray-100 rounded-t ">
                        <h3 className="text-xl  font-semibold text-primaryColor">
                            Đánh giá của bạn
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="default-modal"
                                onClick={() => closeModal(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="mt-7">
                        <div className="text-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon
                                    key={star}
                                    className={`text-xl cursor-pointer ${star <= rating ? 'text-[#f5ed00]' : 'text-gray-400'}`}
                                    icon={faStar}
                                    onClick={() => setRating(star)}
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
                    <div
                        className="flex justify-end py-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        {type === "update" ? <button data-modal-hide="default-modal" type="button"
                                                     className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                     onClick={handleUpdateFeedback}>Cập
                            Nhập
                        </button> : <button data-modal-hide="default-modal" type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            onClick={handleCreateFeedback}>Đánh Giá
                        </button>}

                        <button data-modal-hide="default-modal" type="button"
                                onClick={() => closeModal(false)}
                                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Hủy
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Review;