import React, {useEffect, useState, useContext} from 'react';
import Pagination from "../../components/pagination/Pagination";
import {Link} from "react-router-dom";
import MethodContext from "../../context/methodProvider";
import * as sharingServices from "../../services/sharing"
import SharingModal from "../../components/sharingModal";

const MySharing = () => {
    const [state, setState] = useState({
        userSharingId: JSON.parse(localStorage.getItem("auth")).userInfo.id,
        page: null,
        limit: null
    })
    const {filteredKeyNull} = useContext(MethodContext)
    const [sharing, setSharing] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const fetchSharing = async () => {

            // Filters out null or undefined values from the object
            const params = filteredKeyNull(state);
            console.log(params)
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
    }, [state, isOpen])

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <h1 className="text-2xl text-primaryColor font-semibold">Chia Sẻ Của Tôi</h1>
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
                                                    onClick={() => setIsOpen(true)}
                                                >
                                                    <p className="block text-center font-medium text-lg text-primaryColor mb-2">Nội
                                                        dung
                                                        chia sẻ</p>
                                                    <p className=" p-3 border rounded h-[160px] truncate">{item?.infoSharing}</p>
                                                </div>
                                            </div>
                                            {
                                                isOpen && <SharingModal closeModal={setIsOpen} spaceId={item?.spaceId?.id}/>
                                            }
                                        </div>
                                    )
                                }) :
                                <p className="text-2xl py-4 font-medium text-center text-primaryColor min-h-[490px]">
                                    Chưa có chia sẻ nào!
                                </p>
                        }
                    </div>
                    <div className="text-end">
                        <Pagination state={state} setState={setState}/>
                    </div>
                </div>
            </div>

        </>
    );

}

export default MySharing;