import React, {useContext } from "react";
import * as spaceService from "../../services/spaces";
import MethodContext from "../../context/methodProvider";

const DeleteSpace = ({setDeleteSpaces, dataEdit}) => {
    const {toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);

    const handleDeleteSpace = async (e) => {
        e.preventDefault();
        let accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const params = {
            spaceId: dataEdit?.id,
        };
        // call api
        const responseDeleteSpace = await spaceService.deleteSpace(params, accessToken)
        const id = toastLoadingId("Vui lòng chờ...")
        if (responseDeleteSpace?.status === 200) {
            toastUpdateLoadingId("Xóa Bài Viết Thành công,", "success", id);
            setDeleteSpaces(false);
        } else {
            toastUpdateLoadingId("Gửi yêu thất bại!", "error", id);
        }
    }


    return (
        <div
            className="fixed bottom-0 left-0 right-0 top-0 backdrop-brightness-75"
            onClick={(e) => {
                e.stopPropagation();
                setDeleteSpaces(false);
            }}
        >
            <div
                className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-[600px] max-h-[500px] overflow-y-auto bg-white rounded-lg"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className='flex h-full flex-col items-center px-6'>
                    <h1 className="text-xl w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                        Xóa Bài Viết
                    </h1>
                    <div className="flex w-3/5 flex-auto items-center justify-center">

                        <div className="flex w-full flex-col gap-4 py-6 ">
                            <h1 className="text-center font-medium text-lg">Bạn có chắc là muốn xóa bài viết này không? </h1>
                            <button className="w-full rounded-md bg-red-600 px-2 py-2 text-white hover:opacity-90"
                                    onClick={(e) => handleDeleteSpace(e)}

                            >
                                Có
                            </button>
                            <button className="w-full rounded-md bg-gray-400 px-2 py-2 text-black hover:opacity-90"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setDeleteSpaces(false);
                                    }}>
                                Không
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeleteSpace