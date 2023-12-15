import React, {useState, useContext, useEffect} from 'react';
import MethodContext from "../../context/methodProvider";
import ItemSharing from "./ItemSharing";


const ListSharing = ({closeModal}) => {
    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext)
    const [content, setContent] = useState("")
    const [hasSharing, setHasSharing] = useState(false)

    // useEffect(() => {
    //
    //     const params = {
    //         userSharingId: JSON.parse(localStorage.getItem("auth")).userInfo.id  spaceId
    //     }
    //     const fetchSharing = async () => {
    //         const responseSharing = await sharingServices.getSharing(params)
    //         if (responseSharing?.data?.sharingQuantity > 0) {
    //             const sharingContent = responseSharing?.data?.listSharing[0]?.infoSharing;
    //             setContent(sharingContent)
    //             setHasSharing(true)
    //         }
    //     }
    //     fetchSharing()
    // }, []);


    // const handleSubmitSharing = async (e) => {
    //     if (content === "") {
    //         notify("Nội dụng không được bỏ trống!", "error",);
    //         return;
    //     }
    //     // get token from localstorage
    //     const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
    //     // handle call API
    //     const responseSharing = await sharingServices.createSharing(spaceId, content, accessToken);
    //     if (responseSharing?.status === 201) {
    //         notify("Chia sẻ thành công!", "success")
    //     } else if (responseSharing?.response?.status === 400 && responseSharing?.response?.data?.message ===
    //         "You have shared this space!") {
    //         console.log(responseSharing?.response)
    //         notify("Bạn đã chia sẻ không gian này!", "error")
    //     } else if (responseSharing?.response?.status === 400 && responseSharing?.response?.data?.message ===
    //         "You can only share once!") {
    //         console.log(responseSharing?.response)
    //         notify("Bạn chỉ có thể chia sẽ 1 lần!", "error")
    //     } else {
    //         console.log(responseSharing?.response)
    //         notify("Chia sẻ thất bại!", "error")
    //     }
    //     closeModal(false)
    // }


    // const  handleUpdateSharing = async () => {
    //     // get token
    //     const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
    //     // call api
    //     const id = toastLoadingId("Đang chờ...")
    //     const responseUpdate = await sharingServices.updateSharing(spaceId,content,accessToken)
    //     // handle response update
    //     if(responseUpdate?.status === 200){
    //         toastUpdateLoadingId("Thay đổi nội dung thành công!", "success", id)
    //         closeModal(false)
    //     }
    //     else {
    //         console.log(responseUpdate?.response)
    //         toastUpdateLoadingId("Thay đổi nội dung thất bại!", "error", id)
    //     }
    // }

    return (
        <div tabIndex="-1" aria-hidden="true"
             className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 justify-center items-center w-full md:inset-0 h-full bg-black/50 hover:cursor-pointer"
             onClick={() => closeModal(false)}
        >
            <div
                className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl rounded-lg max-h-[600px]"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="relative bg-white rounded-lg shadow">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Dánh sách chia sẻ
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


                    <div className="px-4 md:px-5 space-y-4 overflow-y-scroll max-h-[400px]">
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
                        <ItemSharing/>
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

export default ListSharing;