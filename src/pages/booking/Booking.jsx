import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faMapLocationDot,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import TitlePart from "../../components/titlePart/TitlePart";
import MapBox from "../../components/map/MapBox";
import MethodContext from "../../context/methodProvider";
import * as spaceServices from "../../services/spaces";
import * as bookingServices from "../../services/booking";

const Booking = () => {
    const {formatNumber, cutOverLetter, notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const [space, setSpace] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const [arriveDay, setArriveDay] = useState("");
    const [comment, setComment] = useState("");
    const [methodPayment, setMethodPayment] = useState("Khong");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')).userInfo || {})

    console.log(1)
    useEffect(() => {
        console.log(location.state?.spaceId)
        if (location.state?.spaceId !== null) {
            console.log(2)
            const fetchSpaceDetails = async () => {
                const spaceParam = {
                    spaceId: location.state?.spaceId,
                    status: 0
                };
                const listSpaces = await spaceServices.getSpace(spaceParam);
                console.log(listSpaces)
                if (listSpaces?.status === 200 && listSpaces?.data?.listSpaces.length > 0) {
                    const spaceDetail = listSpaces?.data?.listSpaces[0];
                    setSpace(spaceDetail)
                }
            }
            fetchSpaceDetails();
            navigate(location.pathname, {replace: true, state: {}});
        }
        if (!user) {
            const localUser = JSON.parse(localStorage.getItem('auth')).userInfo
            setUser(localUser)
        }
    }, [])

    const validateInput = () => {
        if (arriveDay === "") {
            notify("Vui lòng nhập ngày đến!", "error");
            return false;
        }
        if (methodPayment === "Khong") {
            notify("Vui lòng chọn phương thức thành toán!", "error");
            return false;
        }
        if (comment === "") {
            notify("Vui lòng nhập ghi chú!", "error");
            return false;
        }
        return true;
    }

    const handlePayment = async () => {
        console.log({arriveDay})
        if (!validateInput())
            return;
        const id = toastLoadingId("Đang giao dịch...")
        setIsLoading(true);
        let paymentSuccessful = false;
        const accessToken = await JSON.parse(localStorage.getItem("access-token")).accessToken;
        const responseCreateOrder = await bookingServices.createOrder(space?.id, arriveDay, comment, accessToken)
        console.log(responseCreateOrder)
        if (responseCreateOrder?.status === 200) {
            console.log(responseCreateOrder)
            const orderUrl = responseCreateOrder?.data?.orderurl
            const appTransactionId = responseCreateOrder?.data?.apptransid
            // link to page payment
            window.open(orderUrl, '_blank');
            // set up interval
            const intervalID = setInterval(async () => {
                if (paymentSuccessful) {
                    // clear interval
                    clearInterval(intervalID);
                    setIsLoading(false)
                    navigate('/booking-history', {
                        state: {
                            id: id,
                            toastMessage: "Giao dịch thành công!",
                            statusMessage: "success"
                        }
                    })
                    return;
                }
                const responseCreateBooking = await bookingServices.createBooking(id, arriveDay, comment, appTransactionId, accessToken);
                if (responseCreateBooking.status === 201) {
                    paymentSuccessful = true;
                }
            }, 5000); // each 5 seconds

            // set timeout to stop after 15 minutes
            setTimeout(() => {
                clearInterval(intervalID); // stop interval
                setIsLoading(false)
                console.log("Dừng thực hiện sau 15 phút!");
            }, 15 * 60 * 1000); // 15 minutes * 60 second/minute * 1000 ms/second
        } else {
            setIsLoading(false);
            toastUpdateLoadingId("Giao dịch thât bại!", "error", id);
        }

    }

    const handleCancelBooking = () => {

    }


    return (
        <>
            <div className="w-full h-[300px] relative mb-9">
                <img className="w-full h-full object-cover"
                     src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-thien-nhien-dep-nhat-the-gioi-chat-luong-cao.jpg"
                     alt="title"/>
                <div className="absolute top-1/3 left-[15%]">
                    <h1 className="text-2xl font-bold text-white">Chúng Tôi Rất Vui Được Phục Vụ Bạn</h1>
                    <p className="text-xm font-medium text-white">Trang Chủ > Booking</p>
                </div>
            </div>

            {/*title part*/}
            <TitlePart title="Thanh Toán Ngay" subTitle="Dễ dàng, An toàn, Nhanh chóng"
                       subDesc="Thanh toán - Kết nối giữa bạn và thế giới. Tiện lợi, đáng tin cậy, và luôn theo kịp cuộc sống hiện đại của bạn."/>


            <div className="max-w-[1200px] mx-auto px-10 my-16  grid grid-cols-12 gap-5">
                {/*GG Map*/}
                <div className="col-span-12 h-[200px] lg:h-full lg:col-span-4 w-full ">
                    <MapBox></MapBox>
                </div>
                {/*Item Space*/}
                <div className="col-span-12 lg:col-span-8 ">

                    <div
                        className="grid grid-cols-12 transition-all hover:shadow-md hover:shadow-gray-200 rounded border-gray-400 border-[1px]">
                        <div className="col-span-12 md:col-span-5 p-4 rounded-lg">
                            <img className="w-full h-[200px] object-cover rounded-lg shadow"
                                 src={ space?.images?.length > 0 ? space?.images[0]?.imageUrl : "https://bandon.vn/resize/1000x700/a-c/zc-1/f/uploads/posts/thiet-ke-nha-tro-dep-2020-bandon-0.jpg"}
                                 alt={space?.title || "ảnh"}></img>
                        </div>

                        <div className="col-span-12 md:col-span-7 px-4 my-4 md:mt-4 md:pr-4">
                            <p className="text-sm text-primaryColor font-semibold">{space?.categoryId?.categoryName || "Phòng trọ"}</p>
                            <div className="flex items-center py-3">
                                <img className="w-[40px] h-[40px] rounded-full mr-3"
                                     src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                     alt="customer"></img>
                                <h4 className="text-xm font-bold text-textBoldColor ">{space?.ownerId?.name || "Nguyen Van A"}</h4>
                                <div className="ml-3">
                                    {/*<Rating valueRating={2}/>*/}
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-2">
                                <p className="text-xm font-bold text-textBoldColor">{formatNumber(space?.price || 1000000)}VNĐ<span
                                    className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                            </div>

                            <div
                                className="grid grid-cols-2 gap-2 text-textBoldColor text-sm mb-3">
                                <div className="text-left ">
                                    <FontAwesomeIcon className="-rotate-45"
                                                     icon={faArrowsLeftRight}/>
                                    <span className="ml-3">{space?.area || 20} m^2</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBed}/>
                                    <span className="ml-3">{space?.bedroomNumbers || 2} Bedrooms</span>
                                </div>
                                <div className="text-left ">
                                    <FontAwesomeIcon icon={faUserGroup}/>
                                    <span className="ml-3">{space?.peopleNumbers || 2} Guess</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBath}/>
                                    <span className="ml-3">{space?.bathroomNumbers || 3} Bathroom</span>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between text-textBoldColor">
                                <div>
                                    <FontAwesomeIcon icon={faMapLocationDot}/>
                                    <span
                                        className="mx-3 truncate max-w-full">{space?.address !== undefined ? cutOverLetter(space?.address, 40) : "Tô hiệu, Phường hòa minh, Quận liên chiểu, Thành phố đà nẵng"}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 gap-5 mt-5">
                        <div className="col-span-12 md:col-span-7">
                            <p className="text-xl text-primaryColor font-bold mb-4">Thông Tin Người Dùng</p>
                            <ul>
                                <li className="text-lg font-medium">Họ Và Tên: <span
                                    className="text-lg font-thin ">{user?.name || "Nguyễn Văn B"}</span>
                                </li>
                                <li className="text-lg font-medium">Số Điện Thoại: <span
                                    className="text-lg font-thin ">{user?.phone || "0454 045 454"}</span>
                                </li>
                                <li className="text-lg font-medium">Địa Chỉ: <span
                                    className="text-lg font-thin ">{user?.address || "Tô hiệu, Phường Hòa Minh,Quận Liên Chiểu, Tp. Đà Nẵng"}</span>
                                </li>
                            </ul>
                            <Link to="/profile"
                                  className="text-right text-primaryColor underline decoration-1">Chỉnh
                                Sửa</Link>
                            <form action="" className="mt-5">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-bold text-textBoldColor">Ngày Đến</label>
                                    <input
                                        className="block mt-2 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none"
                                        type="datetime-local"
                                        value={arriveDay}
                                        onChange={(e) => setArriveDay(e.target.value)}
                                    />

                                </div>
                                <div className="">
                                    <label htmlFor="" className="text-lg font-bold text-textBoldColor">Ghi Chú</label>
                                    <textarea
                                        className="block w-full mt-2 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none min-h-[80px]"
                                        placeholder="Nội Dung...."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-span-12 md:col-span-5 ml-0 md:ml-5">
                            <p className="text-xl text-primaryColor font-bold">Tổng Tiền</p>
                            <div className="">
                                <ul className="mt-5 pb-4 mb-4 border-b-[0.5px] border-[#B2B2B2]">
                                    <li className="flex justify-between">
                                        <p>Tiền Phòng</p>
                                        <p>{formatNumber(space?.price || 1000000)} VNĐ</p>
                                    </li>

                                </ul>
                                <div className="flex justify-between ">
                                    <p className="text-primaryColor font-semibold">Total</p>
                                    <p className="text-primaryColor font-semibold">{formatNumber(space?.price || 1000000)} VNĐ</p>
                                </div>

                                <select value={methodPayment} onChange={(e) => setMethodPayment(e.target.value)} name=""
                                        id=""
                                        className="block w-full pl-4 pr-10 py-3 mt-5 shadow rounded-xl outline-none border-[0.5px] border-gray-400">
                                    <option value="Khong">Phương Thức Thanh Toán</option>
                                    <option value="zalopay">Zalo Pay</option>
                                </select>
                            </div>

                            <div
                                className="flex items-center mt-5 space-x-2">
                                <button type="button"
                                        onClick={handlePayment}
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center">
                                    {isLoading ? "Đang thanh toán..." : "Thanh toán"}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Booking;