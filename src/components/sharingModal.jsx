import React, {useState, useContext} from 'react';
import MethodContext from "../context/methodProvider";
import * as sharingServices from "../services/sharing"


const SharingModal = ({closeModal, spaceId}) => {
    const {notify} = useContext(MethodContext)
    const [content, setContent] = useState("")
    const handleSubmitSharing = async (e) => {
        if (content === "") {
            notify("Nội dụng không được bỏ trống!", "error",);
            return;
        }
        // get token from localstorage
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        // handle call API
        const responseSharing = await sharingServices.createSharing(spaceId, content, accessToken);
        if (responseSharing?.status === 201) {
            notify("Chia sẻ thành công!", "success")
        } else if (responseSharing?.response?.status === 400 && responseSharing?.response?.data?.message ===
            "You have shared this space!") {
            console.log(responseSharing?.response)
            notify("Bạn đã chia sẻ không gian này!", "error")
        } else if (responseSharing?.response?.status === 400 && responseSharing?.response?.data?.message ===
            "You can only share once!") {
            console.log(responseSharing?.response)
            notify("Bạn chỉ có thể chia sẽ 1 lần!", "error")
        } else {
            console.log(responseSharing?.response)
            notify("Chia sẻ thất bại!", "error")
        }
        closeModal(false)
    }

    return (
        <div tabIndex="-1" aria-hidden="true"
             className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-full bg-black/50 hover:cursor-pointer"
             onClick={() => closeModal(false)}
        >
            <div
                className="relative top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl max-h-full"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="relative bg-white rounded-lg shadow">

                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 d">
                            Nhập Thông Tin Mà Bạn Muốn Chia Sẽ
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


                    <div className="p-4 md:p-5 space-y-4">
                        {/*<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Lưu Ý*/}
                        {/*</p>*/}
                        <div className="w-full mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputAdress">Nội Dung Chia Sẻ</label>
                            <textarea
                                className="block w-full h-[150px] pl-4 pr-10 py-3 border rounded-xl outline-none"
                                id="inputAdress"
                                placeholder="Nội dung chia sẻ..."
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    </div>

                    <div
                        className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button"
                                onClick={(e) => handleSubmitSharing(e)}
                                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Xác
                            Nhận
                        </button>
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

export default SharingModal;