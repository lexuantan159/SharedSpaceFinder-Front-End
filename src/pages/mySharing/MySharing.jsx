import React, {useEffect, useState, useContext} from 'react';
import Pagination from "../../components/pagination/Pagination";
import {Link} from "react-router-dom";
import MethodContext from "../../context/methodProvider";
import * as sharingServices from "../../services/sharing"
import SharingModal from "../../components/sharingModal";
import ConfirmDelete from "../../components/confirmDelete/ConfirmDelete";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const MySharing = () => {

    const [state, setState] = useState({
        userSharingId: JSON.parse(localStorage.getItem("auth")).userInfo.id,
        page: null,
        limit: null
    })
    const {toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext)
    const {filteredKeyNull} = useContext(MethodContext)
    const [sharing, setSharing] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [deleteSharing, setDeleteSharing] = useState({
        isDelete: false,
        id: null
    })


    useEffect(() => {
        const fetchSharing = async () => {
            // Filters out null or undefined values from the object
            const params = filteredKeyNull(state);
            // The result is an object that contains only parameters that are not null or undefined
            const responseSharing = await sharingServices.getSharing(params)
            if (responseSharing?.status === 200)
                setSharing(responseSharing?.data?.listSharing)
            else {
                setSharing([])
                console.log("Call Api: ", responseSharing?.message)
            }
        }
        fetchSharing()
    }, [state, isOpen, deleteSharing])

    useEffect(() => {
        const fetchDeleteSharing = async () => {
            console.log(deleteSharing)
            if (deleteSharing.isDelete && deleteSharing.id !== null) {
                // get token
                const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
                // call api
                const id = toastLoadingId("Đang chờ...")
                const spaceId = deleteSharing.id
                const responseDelete = await sharingServices.deleteSharing(spaceId, accessToken)
                // handle response update
                if (responseDelete?.status === 200) {
                    toastUpdateLoadingId("Xóa chia sẻ thành công!", "success", id)
                    // reset status
                    setDeleteSharing({isDelete: false, id: null})
                } else {
                    console.log(responseDelete?.response)
                    toastUpdateLoadingId("Xóa chia sẻ thất bại!", "error", id)
                }
            }
        }
        fetchDeleteSharing()
    }, [deleteSharing]);

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="py-4 border-b border-gray-200">
                    <h1 className="text-2xl text-primaryColor font-semibold text-center">Chia Sẻ Của Tôi</h1>
                </div>
                <div className="">

                    <div className="mb-9">
                        {
                            sharing.length > 0 ? sharing.map(item => {
                                    return (
                                        <div key={item?.id}>
                                            <div
                                                className=" max-h-[220px] grid grid-cols-12 transition-all hover:shadow-md hover:shadow-gray-200 rounded border-gray-400 border-[1px]">
                                                <div className="col-span-12 md:col-span-5 p-2 rounded-lg">
                                                    <Link to={`/spaces/${item?.spaceId?.id}`} relative="route">
                                                        <img className="w-full h-[200px] object-cover rounded-lg shadow"
                                                             src={item?.spaceId?.images[0]?.imageUrl}
                                                             alt="customer"></img>
                                                    </Link>
                                                </div>

                                                <div className="col-span-12 md:col-span-7 my-2 px-4 md:pr-4 "

                                                >
                                                    <div className="flex justify-between">
                                                        <p className="block text-center font-medium text-lg text-primaryColor mb-2">Nội
                                                            dung
                                                            chia sẻ</p>
                                                        <FontAwesomeIcon
                                                            className="hover:bg-gray-200 text-red-600 text-lg py-2 px-3 rounded"
                                                            icon={faXmark} onClick={() => setConfirm(true)}/>
                                                    </div>
                                                    <p onClick={() => setIsOpen(true)}
                                                       className=" p-3 border rounded h-[160px] truncate">{item?.infoSharing}</p>
                                                </div>
                                            </div>
                                            {
                                                confirm &&
                                                <ConfirmDelete message={"Bạn có chắc là muốn xóa chia sẻ này không?"}
                                                               closeModel={setConfirm} id={item?.spaceId?.id}
                                                               setIsDelete={setDeleteSharing}/>
                                            }
                                            {
                                                isOpen && <SharingModal closeModal={setIsOpen} spaceId={item?.spaceId?.id}/>
                                            }
                                        </div>
                                    )
                                }) :
                                <p className="text-xl font-medium text-center text-primaryColor">
                                    Chưa có chia sẻ nào!
                                </p>
                        }
                    </div>
                    <div className="absolute bottom-0 left-5 right-5">
                        <Pagination state={state} setState={setState} />
                    </div>
                </div>
            </div>

        </>
    );

}

export default MySharing;