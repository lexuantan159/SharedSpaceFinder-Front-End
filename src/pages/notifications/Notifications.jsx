import React, {useContext, useState} from "react";
import Pagination from "../../components/pagination/Pagination";
import AuthContext from "../../context/authProvider";

const Notifications = () => {
    const {auth} = useContext(AuthContext);
    const [state, setState] = useState({
        userId: auth.userInfo.id || JSON.parse(localStorage.getItem("auth"))?.userInfo?.id
    })


    return (<>
        <div className="py-4 border-b border-gray-200">
            <h1 className="text-2xl text-primaryColor font-semibold text-center">Thông báo</h1>
        </div>
        <div className=" w-full flex flex-col justify-between">
            <div className="">
                <div className="">

                </div>
            </div>
            <div className="absolute bottom-0 left-5 right-5">
                <Pagination state={state} setState={setState} />
            </div>
        </div>
    </>)
}

export default Notifications