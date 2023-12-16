import React, {useState, useContext, useEffect} from 'react';
import MethodContext from "../../context/methodProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";
import ItemFeedback from "./ItemFeedback";
import * as feedbackService from "../../services/review"
import Rating from "./Rating";


const FormReview = ({closeModal, ownerData}) => {
    const {notify, toastLoadingId, toastUpdateLoadingId, filteredKeyNull} = useContext(MethodContext)
    const [feedbacks, setFeedbacks] = useState([])
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    // const fetchHadFeedback = async () => {
    //     if (localStorage.getItem("auth") !== null) {
    //         const params = {
    //             ownerId: ownerData?.id,
    //             userId: JSON.parse(localStorage.getItem("auth"))?.userInfo?.id
    //         }
    //         const getHadFeedback = await feedbackService.getListFeedback(filteredKeyNull(params));
    //         if (getHadFeedback.data?.listFeedbacks?.length > 0) {
    //             setHasCreateFeedback(true);
    //             setIsOpenFeedback(false);
    //         }
    //     }
    // }

    // const fetchCreateFeedback = async () => {
    //     if (localStorage.getItem("auth") !== null) {
    //         const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
    //         const params = { ownerId: ownerData?.id }
    //         const getHadFeedback = await feedbackService.checkFeedback(filteredKeyNull(params), accessToken);
    //         if (getHadFeedback.data?.listFeedbacks?.length > 0) {
    //             setIsUpdateFeedback(true);
    //         }
    //     }
    // }

    useEffect(() => {
        const fetchFeedback = async () => {
            const paramsFiltered = filteredKeyNull({
                ownerId: ownerData?.id
            })
            // call API to get feedback
            const responseFeedback = await feedbackService.getListFeedback(paramsFiltered);
            if (responseFeedback?.status === 200) {
                const listFeedback = responseFeedback?.data?.listFeedbacks;
                setFeedbacks(listFeedback)
            }else
                setFeedbacks([])
        }
        // call list feedback
        fetchFeedback()

    }, []);





    // const handleUpdateFeedback = async (e) => {
    //     // get token
    //     const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
    //     // call api
    //     const id = toastLoadingId("Đang chờ...")
    //     const responseUpdate = await feedbackService.updateFeedback(ownerData?.id, accessToken, rating, comment)
    //     // handle response update
    //     if (responseUpdate?.status === 200) {
    //         toastUpdateLoadingId("Thay đổi phản hồi thành công!", "success", id)
    //         setIsOpenFeedback(true)
    //     } else {
    //         console.log(responseUpdate?.response)
    //         toastUpdateLoadingId("Thay đổi phải hồi thất bại!", "error", id)
    //     }
    // }

    return (
        <div tabIndex="-1" aria-hidden="true"
             className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 justify-center items-center w-full mb-4 md:inset-0 h-full bg-black/50 hover:cursor-pointer"
             onClick={() => closeModal(false)}
        >
            <div
                className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl rounded-lg max-h-[600px]"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="relative bg-white rounded-lg shadow">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 d">
                            Thông Tin Chủ
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


                    <div className="px-4 md:px-5 space-y-4">
                        <div className="w-full mb-4 ">
                            <div>
                                <div className="pb-4 text-center mt-3">
                                    <img className="w-[120px] h-[120px] mx-auto rounded-full"
                                         src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                         alt="customer"></img>
                                    <p className="mt-3 ml-2 text-lg font-semibold text-textBoldColor">{ownerData?.name}</p>
                                    <div className="mb-2 ml-2 mt-3">
                                        <Rating valueRating={3}/>
                                        <span
                                            className="ml-3 text-lg text-[#d4d4d4] ">{feedbacks?.length} reviews</span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <p className="ml-2 text-xm font-semibold text-textBoldColor">Giới
                                            Tính: {ownerData?.gender ? "Nam" : "Nữ"}</p>
                                        <p className="ml-2 text-xm font-semibold text-textBoldColor">Ngày
                                            Sinh: {ownerData?.dateOfBirth}</p>
                                    </div>
                                    <p className="mt-3 mx-2 text-xm font-semibold text-textBoldColor">Địa
                                        Chỉ: {ownerData?.address}</p>
                                </div>


                                <h3 className="text-center text-xl text-primaryColor font-bold border-b border-gray-400 pb-2">Đánh
                                    Giá</h3>
                                <div
                                    className={feedbacks.length > 1 ? "mb-4 overflow-y-scroll max-h-[400px]" : "mb-4 max-h-[400px]"}>
                                    {/*render feedback if has*/}
                                    {feedbacks?.length > 0 ? (feedbacks.map(item => {
                                        return (<ItemFeedback key={item?.id} feedbackData={item}/>)
                                    })) : <p className="py-4 text-lg text-center font-medium ">Chưa có phản hồi nào</p>}
                                </div>
                                {/*form feedback*/}

                            </div>
                        </div>
                    </div>

                    <div
                        className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button data-modal-hide="default-modal" type="button"
                                onClick={() => closeModal(false)}
                                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Hủy
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormReview;