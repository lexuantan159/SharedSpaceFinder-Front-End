import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsLeftRight, faBath, faBed, faStar, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import {Link} from "react-router-dom";
import SlideShow from "../../components/slideShow/SlideShow";
import TitlePart from "../../components/titlePart/TitlePart";
import SlideImages from "../../components/slideImages/SlideImages";

const SpaceDetail = () => {



    return (
        <>
            <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">
                <div className=" col-span-12 md:col-span-8">
                    {/* images of space*/}
                    <SlideImages/>
                    <div className="">
                        {/*Type of space*/}
                        <h2 className="text-xl font-bold text-textBoldColor">Phòng Trọ</h2>
                        {/**/}
                        <div className="mb-4">
                            <p className="text-xm text-primaryColor font-bold mb-3">Tiện Ích</p>
                            <div className="flex flex-wrap text-textBoldColor">
                                <div className="mr-10">
                                    <FontAwesomeIcon className="-rotate-45" icon={faArrowsLeftRight}/>
                                    <span className="ml-3">120 m^2</span>
                                </div>
                                <div className="mr-10 ">
                                    <FontAwesomeIcon icon={faBed}/>
                                    <span className="ml-3">02 Bedrooms</span>
                                </div>
                                <div className="mr-10">
                                    <FontAwesomeIcon icon={faUserGroup}/>
                                    <span className="ml-3">04 Guess</span>
                                </div>
                                <div className="mr-10 ">
                                    <FontAwesomeIcon icon={faBath}/>
                                    <span className="ml-3">01 Bathroom</span>
                                </div>
                            </div>
                        </div>
                        {/* price detail*/}
                        <div className="mb-4">
                            <p className="text-xm text-primaryColor font-bold mb-3">Giá Chi Tiết</p>
                            <div className="flex text-textBoldColor">
                                <ul className="text-textBoldColor">
                                    <li>
                                        Tiền phòng
                                    </li>
                                    <li>
                                        Tiền Điện
                                    </li>
                                    <li>
                                        Tiền Nước
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* describe */}
                        <div className="mb-4">
                            <p className="text-xm text-primaryColor font-bold mb-3">Giá Chi Tiết</p>
                            <div className="flex text-textBoldColor">
                                <p className="">Căn phòng trọ này nằm tại tầng trệt của một tòa nhà chung cư mới xây,
                                    được
                                    thiết kế đặc
                                    biệt để đáp ứng nhu cầu của người thuê. Với diện tích khoảng 25 mét vuông, nó là một
                                    không gian tiện nghi và thoải mái. Một cửa sổ lớn mang đến ánh sáng tự nhiên cho căn
                                    phòng và cung cấp cảm giác thông thoáng. Phòng trọ được trang bị đầy đủ nội thất cơ
                                    bản,
                                    bao gồm giường ngủ, tủ quần áo, bàn làm việc, và một kệ sách. Bên cạnh giường, có
                                    một
                                    bàn đầu giường tiện lợi để đặt đồ cá nhân. </p>
                            </div>
                        </div>

                        {/* address */}

                        <div className="mb-4">
                            <p className="text-xm text-primaryColor font-bold mb-3">Địa Chỉ</p>
                            <div className="w-full h-[300px] rounded">
                                <Map></Map>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-12 md:col-span-4">
                    {/*booking*/}
                    <div className="border-[0.5px] border-[#B2B2B2] rounded-lg">
                        <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                            <h4 className="text-textBoldColor text-xm font-bold">Tổng Tiền</h4>
                        </div>
                        <div className="pb-4">
                            <ul className="mx-5 mt-5 pb-4 mb-4 border-b-[0.5px] border-[#B2B2B2]">
                                <li className="flex justify-between">
                                    <p>1.500.000 x tháng</p>
                                    <p>1.500.000đ</p>
                                </li>
                                <li className="flex justify-between">
                                    <p>40.000 x tháng</p>
                                    <p>40.000đ</p>
                                </li>
                            </ul>
                            <div className="flex justify-between px-5 ">
                                <p className="text-primaryColor font-semibold">Total</p>
                                <p className="text-primaryColor font-semibold">40.000đ</p>
                            </div>
                            <div className="mx-5 text-center mt-5">
                                <Link to="/"
                                      className="block px-8 py-2 rounded-xl border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow ">Thuê
                                    Ngay</Link>
                            </div>
                        </div>
                    </div>

                    {/* info owner */}
                    <div className="border-[0.5px] border-[#B2B2B2] rounded-lg mt-6">
                        <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                            <h4 className="text-textBoldColor text-xm font-bold">Thông Tin Chủ</h4>
                        </div>
                        <div className="pb-4 flex justify-center items-center mt-5">
                            <img className="w-[48px] h-[48px] rounded-full mx-3"
                                 src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                 alt="customer"></img>
                            <div>
                                <div className="mb-2 ml-2 ">
                                    <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                    <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                    <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                    <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                    <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#d4d4d4",}}/>
                                    <span className="ml-3 text-[#d4d4d4] ">12 reviews</span>
                                </div>
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">Nguyễn Văn A</p>
                            </div>
                        </div>
                        <div className="mx-5 text-center mb-5">
                            <Link to="/"
                                  className="block px-8 py-2 rounded-xl border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow ">Xem
                                Chi Tiết</Link>
                        </div>
                    </div>

                </div>

            </div>

            {/*slide show*/}

            <SlideShow typeSlide="space" titlePart="Không Gian Liên Quan" background={true}/>

        </>
    )
}


export default SpaceDetail