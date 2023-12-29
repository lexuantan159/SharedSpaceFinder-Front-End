import React, {useContext, useEffect, useState} from "react";
import Pagination from "../../components/pagination/Pagination";
import AuthContext from "../../context/authProvider";
import MethodContext from "../../context/methodProvider";
import * as feedbackServices from "../../services/review";
import Rating from "../../components/review/Rating";
import Review from "../../components/review/Review";
import ConfirmDelete from "../../components/confirmDelete/ConfirmDelete";
import * as sharingServices from "../../services/sharing";

const Feedback = () => {
    const {auth} = useContext(AuthContext);
    const {toastUpdateLoadingId, toastLoadingId, filteredKeyNull} = useContext(MethodContext);
    const [state, setState] = useState({
        userId: JSON.parse(localStorage.getItem("auth"))?.userInfo?.id
    })
    const [feedbacks, setFeedbacks] = useState([])
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [confirm, setConfirm] = useState({isDelete: false, id: null})

    useEffect(() => {
        const fetchFeedback = async () => {
            const responseFeedback = await feedbackServices.getListFeedback(filteredKeyNull(state));
            if (responseFeedback?.status === 200) {
                const listFeedbacks = responseFeedback?.data?.listFeedbacks
                setFeedbacks(listFeedbacks)
            } else
                setFeedbacks([])
        }
        fetchFeedback()
    }, [state, confirm])

    useEffect(() => {
        const fetchDeleteFeedback = async () => {
            if (confirm.isDelete && confirm.id !== null) {
                // get token
                const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
                // call api
                const id = toastLoadingId("Đang chờ...")
                const feedbackId = confirm.id
                const responseDelete = await feedbackServices.deleteFeedback(feedbackId, accessToken)
                // handle response update
                if (responseDelete?.status === 200) {
                    toastUpdateLoadingId("Xóa chia sẻ thành công!", "success", id)
                    // reset status
                    setConfirm({isDelete: false, id: null})
                } else {
                    console.log(responseDelete?.response)
                    toastUpdateLoadingId("Xóa chia sẻ thất bại!", "error", id)
                }
            }
        }
        fetchDeleteFeedback()
    }, [confirm]);


    return (<>
        <div className="py-4 border-b border-gray-200">
            <h1 className="text-2xl text-primaryColor font-semibold text-center">Đánh giá của bạn</h1>
        </div>
        <div className=" w-full flex flex-col justify-between">
            <div className="mt-4">
                {feedbacks.length > 0 && (<div className="grid grid-cols-12">
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-1">Id</p>
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-2">Tên
                        chủ phòng</p>
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-2">Đánh
                        giá</p>
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-3">Nội
                        Dung</p>
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-2">Ngày
                        phải hồi</p>
                    <p className="text-sm text-center text-primaryColor bg-gray-100 py-2 px-3 border font-bold col-span-2">Tùy
                        chọn</p>
                </div>)}

                {feedbacks.length > 0 ? feedbacks.map(feedback => {
                    return (
                        <div className="grid grid-cols-12" key={feedback?.id}>
                            <p className="text-sm text-center text-textBoldColor py-3 border font-semibold col-span-1">{feedback?.id}</p>
                            <p className="text-sm text-center text-textBoldColor py-3  border font-semibold col-span-2">{feedback?.userReceiveFeedBack?.name}</p>
                            <p className="text-sm text-center text-textBoldColor py-3  border font-semibold col-span-2">
                                <Rating valueRating={feedback?.rate}/></p>
                            <p className="text-sm text-center text-textBoldColor py-3 px-5  border font-semibold col-span-3 truncate">{feedback?.comment}</p>
                            <p className="text-sm text-center text-textBoldColor py-3  border font-semibold col-span-2">{feedback?.createdAt}</p>
                            <div
                                className="text-sm text-center text-textBoldColor py-3  border font-semibold col-span-2">
                                <button className="px-3 py-1 text-white bg-green-600 rounded mr-3"
                                        onClick={() => setIsOpenUpdate(true)}
                                >
                                    Sửa
                                </button>
                                <button className="px-3 py-1 text-white bg-red-500 rounded"
                                        onClick={() => setIsOpenDelete(true)}
                                >
                                    Xóa
                                </button>
                            </div>
                            {
                                isOpenUpdate && <Review closeModal={setIsOpenUpdate} feedback={feedback}/>
                            }
                            {
                                isOpenDelete &&
                                <ConfirmDelete closeModel={setIsOpenDelete} id={feedback?.id} setIsDelete={setConfirm}
                                               message={"Bạn có chắc là muốn xóa đánh giá này không!"}/>
                            }
                        </div>


                    )
                }) : <p className="text-xl font-medium text-center text-primaryColor">
                    Chưa có phản hồi nào!
                </p>}
            </div>
            <div className="absolute bottom-0 left-5 right-5">
                <Pagination state={state} setState={setState}/>
            </div>
        </div>
    </>)
}

export default Feedback