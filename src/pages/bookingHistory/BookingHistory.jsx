import React, {useContext, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import ItemFavoriteSpace from "../../components/itemfavoritespace/ItemFavoriteSpace";
import Pagination from "../../components/pagination/Pagination";
import AuthContext from "../../context/authProvider";
import * as bookingServices from "../../services/booking";
import MethodContext from "../../context/methodProvider";
import ItemBookingHistory from "../../components/itemBookingHistory/ItemBookingHistory";

const BookingHistory = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    const {filteredKeyNull} = useContext(MethodContext);
    const [state, setState] = useState({
        page: 1,
        limit: 3
    })
    const [bookingsHistory, setBookingsHistory] = useState([])


    useEffect(() => {
        if (location.state?.toastMessage !== '') {
            toast.update(location.state?.id, {
                render: location.state?.toastMessage,
                type: location.state?.statusMessage,
                isLoading: false,
                autoClose: true,
                closeButton: "close"
            });
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, [])

    useEffect(() => {
        const fetchBookingHistory = async () => {
            const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
            console.log(accessToken);
            const responseBookingHistory = await bookingServices.getBookingHistory(filteredKeyNull(state), accessToken)
            console.log(responseBookingHistory)
            if (responseBookingHistory?.status === 200) {
                setBookingsHistory(responseBookingHistory?.data?.listBookings)
            }else
                setBookingsHistory([])
        }
        fetchBookingHistory()
    }, [state]);


    return (<>
        <div className="py-4 border-b border-gray-200">
            <h1 className="text-2xl text-primaryColor font-semibold text-center">Lịch sử đặt phòng</h1>
        </div>
        <div className="flex flex-col justify-between max-h-[450px] overflow-y-scroll">
            {
                bookingsHistory.length > 0 ? bookingsHistory.map(booking => {
                        return (
                            <div key={booking?.id}>
                                <ItemBookingHistory itemBooking={booking}/>
                            </div>
                        )
                    }) :
                    <p className="text-xl font-medium text-center text-primaryColor mt-5">
                        Không có phòng nào!
                    </p>
            }
            <div className="absolute bottom-0 left-5 right-5">
                <Pagination state={state} setState={setState} numberPage={5}/>
            </div>
        </div>
    </>)
}

export default BookingHistory