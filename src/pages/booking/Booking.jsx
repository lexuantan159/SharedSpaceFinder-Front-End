import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faMapLocationDot,
    faStar,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import {Link} from "react-router-dom";
import React from "react";
import TitlePart from "../../components/titlePart/TitlePart";

const Booking = () => {
    return (
        <>

            <div className="w-full h-[300px] relative">
                <img className="w-full h-full object-cover"
                     src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-thien-nhien-dep-nhat-the-gioi-chat-luong-cao.jpg"
                     alt="title"/>
                <div className="absolute top-1/3 left-[10%]">
                    <h1 className="text-2xl font-bold text-white">Chúng Tôi Rất Vui Được Phục Vụ Bạn</h1>
                    <p className="text-xm font-medium text-white">Trang Chủ > Booking</p>
                </div>
            </div>

            {/*title part*/}
            <TitlePart title="Thanh Toán Ngay" subTitle="Dễ dàng, An toàn, Nhanh chóng" subDesc="Thanh toán - Kết nối giữa bạn và thế giới. Tiện lợi, đáng tin cậy, và luôn theo kịp cuộc sống hiện đại của bạn."/>


            <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">
                {/*GG Map*/}
                <div className="col-span-12 h-[200px] lg:h-full lg:col-span-4 w-full ">
                    <Map></Map>
                </div>
                {/*Item Space*/}
                <div className="col-span-12 lg:col-span-8 ">
                    <Link to='/' className="">
                        <div
                            className="grid grid-cols-12 transition-all hover:shadow-md hover:shadow-gray-200 rounded border-gray-400 border-[1px]">
                            <div className="col-span-12 md:col-span-5 p-4 rounded-lg">
                                <img className="w-full h-[200px] object-cover rounded-lg shadow"
                                     src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                     alt="customer"></img>
                            </div>

                            <div className="col-span-12 md:col-span-7 px-4 my-4 md:mt-4 md:pr-4">
                                <p className="text-sm text-primaryColor font-semibold">Phòng Trọ</p>
                                <div className="flex items-center py-3">
                                    <img className="w-[40px] h-[40px] rounded-full mr-3"
                                         src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                         alt="customer"></img>
                                    <h4 className="text-xm font-bold text-textBoldColor ">Nguyễn Văn
                                        A</h4>
                                    <div className="ml-3">
                                        <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                        <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                        <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                        <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                        <FontAwesomeIcon icon={faStar} style={{color: "#d4d4d4",}}/>
                                        <span className="ml-3 text-[#d4d4d4] ">12 review</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                        className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                                </div>

                                <div
                                    className="grid grid-cols-2 gap-2 text-textBoldColor text-sm mb-3">
                                    <div className="text-left ">
                                        <FontAwesomeIcon className="-rotate-45"
                                                         icon={faArrowsLeftRight}/>
                                        <span className="ml-3">120 m^2</span>
                                    </div>
                                    <div className="text-right ">
                                        <FontAwesomeIcon icon={faBed}/>
                                        <span className="ml-3">02 Bedrooms</span>
                                    </div>
                                    <div className="text-left ">
                                        <FontAwesomeIcon icon={faUserGroup}/>
                                        <span className="ml-3">04 Guess</span>
                                    </div>
                                    <div className="text-right ">
                                        <FontAwesomeIcon icon={faBath}/>
                                        <span className="ml-3">01 Bathroom</span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between text-textBoldColor">
                                    <div>
                                        <FontAwesomeIcon icon={faMapLocationDot}/>
                                        <span
                                            className="mx-3 ">18 Tô Hiệu, Liên Chiểu, Đà Nẵng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className="grid grid-cols-12 gap-5 mt-5">
                        <div className="col-span-12 md:col-span-7">
                            <p className="text-xl text-primaryColor font-bold mb-4">Thông Tin Người Dùng</p>
                            <ul>
                                <li className="text-lg font-medium">Họ Và Tên: <span className="text-lg font-thin ">Nguyễn Văn B</span>
                                </li>
                                <li className="text-lg font-medium">Số Điện Thoại: <span className="text-lg font-thin ">0454 045 454</span>
                                </li>
                                <li className="text-lg font-medium">Địa Chỉ: <span className="text-lg font-thin ">Tô hiệu, Phường Hòa Minh,Quận Liên Chiểu, Tp. Đà Nẵng</span>
                                </li>
                            </ul>
                            <Link to="/"
                                  className="text-right text-primaryColor underline decoration-1">Chỉnh
                                Sửa</Link>
                            <form action="" className="mt-5">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-bold text-textBoldColor">Ngày Đến</label>
                                    <input
                                        className="block mt-2 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none"
                                        type="date"
                                        placeholder="Họ Và Họ Lót"/>

                                </div>
                                <div className="">
                                    <label htmlFor="" className="text-lg font-bold text-textBoldColor">Ghi Chú</label>
                                    <textarea
                                        className="block w-full mt-2 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none min-h-[80px]"
                                        placeholder="Nội Dung...."/>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-12 md:col-span-5 ml-0 md:ml-5">
                            <p className="text-xl text-primaryColor font-bold">Tổng Tiền</p>
                            <div className="">
                                <ul className="mt-5 pb-4 mb-4 border-b-[0.5px] border-[#B2B2B2]">
                                    <li className="flex justify-between">
                                        <p>Tiền Phòng</p>
                                        <p>1.500.000 VNĐ</p>
                                    </li>
                                    <li className="flex justify-between">
                                        <p>Tiền Điện</p>
                                        <p>120.000 VNĐ</p>
                                    </li>
                                    <li className="flex justify-between">
                                        <p>Tiền Nước</p>
                                        <p>60.000 VNĐ</p>
                                    </li>
                                    <li className="flex justify-between">
                                        <p>Tiền Rác</p>
                                        <p>40.000 VNĐ</p>
                                    </li>
                                </ul>
                                <div className="flex justify-between ">
                                    <p className="text-primaryColor font-semibold">Total</p>
                                    <p className="text-primaryColor font-semibold">1.700.000 VNĐ</p>
                                </div>

                                <select name="" id="" className="block w-full pl-4 pr-10 py-3 mt-5 shadow rounded-xl outline-none border-[0.5px] border-gray-400">
                                    <option value="">Phương Thức Thanh Toán</option>
                                    <option value="">Paypal</option>
                                    <option value="">Zalo Pay</option>
                                </select>
                            </div>

                            <div
                                className="flex items-center mt-5 space-x-2">
                                <button type="button"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Thuê
                                    Ngay
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