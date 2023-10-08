import TitlePart from "../../components/titlePart/TitlePart";
import React from "react";
import Map from "../../components/map/Map";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div>
            <div className="w-full h-[300px] relative">
                <img className="w-full  h-full object-cover"
                     src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-thien-nhien-dep-nhat-the-gioi-chat-luong-cao.jpg"
                     alt="title"/>
                <div className="absolute top-1/3 left-[10%]">
                    <h1 className="text-2xl font-bold text-white">Chúng Tôi Rất Vui Được Phục Vụ Bạn</h1>
                    <p className="text-xm font-medium text-white">Trang Chủ > Liên Hệ</p>
                </div>
            </div>
            {/*Form Contact*/}
            <div className="max-w-[1200px] mx-auto px-10">
                <TitlePart title="Liên Hệ Với Chúng Tôi" subTitle="Chúng Tôi Hỗ Trợ 24/7"
                           subDesc="Khám phá đa dạng vô tận: Danh mục định hình thế giới"/>

                <form action="" className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Họ Và Họ Lót"/>
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Tên"/>
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Email"/>
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Tiêu Đề"/>
                    </div>
                    <textarea
                        className="w-full mt-3 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none min-h-[200px]"
                        placeholder="Nội Dung...."/>
                    <div className="text-center my-3 w-full md:w-1/4">
                        <button
                              className="w-full px-8 py-2 rounded border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow ">Gửi
                            Ngay</button>
                    </div>
                </form>
            </div>

            {/*Info And Map*/}
            <div className="w-full h-[500px] mt-80 relative">
                <Map></Map>
                <div className="max-w-[1200px] mx-auto bg-white absolute -top-[55%] md:-top-[25%] lg:-top-[15%] left-[5%] right-[5%] grid grid-cols-12 gap-5 p-5 rounded shadow-lg">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faPhone} />
                        <p className="text-xm text-gray-400 mb-2">Số Điện Thoại</p>
                        <p className="text-xl font-semibold text-textBoldColor">(+84) 0343 034 343 </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faEnvelope} />
                        <p className="text-xm text-gray-400 mb-2">Email</p>
                        <p className="text-xl font-semibold text-textBoldColor">sharedspacefinder@gmail.com </p>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faMapLocationDot} />
                        <p className="text-xm text-gray-400 mb-2">Địa Chỉ</p>
                        <p className="text-xl font-semibold text-textBoldColor">254 Nguyễn Văn Linh,<br/>
                            Quận Thanh Khê - Tp. Đà Nẵng</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact