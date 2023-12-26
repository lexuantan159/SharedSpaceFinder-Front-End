import TitlePart from "../../components/titlePart/TitlePart";
import React, {useContext, useEffect, useState} from "react";
import MapBox from "../../components/map/MapBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import *as contactsService from "../../services/contact"
import {toast} from "react-toastify";
import AuthContext from "../../context/authProvider";

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { auth} = useContext(AuthContext);


    const handleSendContact = async (e) => {
        e.preventDefault();
        const id = toast.loading("Please wait...")

        //handle check login
        if(!auth.hasOwnProperty("accessToken")) {
            toast.update(id, {
                render: "Bạn cần phải đăng nhập!",
                type: "error",
                isLoading: false,
                autoClose: true
            });
        }

        const accessToken = auth.accessToken
        // handle fetching contacts
        const responseSendContact = await contactsService.sendContact(firstName, lastName,email,title,content, accessToken);
        if (responseSendContact?.status === 201) {
            toast.update(id, {
                render: "Gửi kết nối thành công!",
                type: "success",
                isLoading: false,
                autoClose: true
            });

        } else {
            console.log(responseSendContact)
            toast.update(id, {
                render: "Gửi kết nối thất bại!",
                type: "error",
                isLoading: false,
                autoClose: true
            });
        }
    }

    return (
        <div>
            <div className="w-full h-[300px] relative mb-9">
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

                <form action="" className="mt-5" onSubmit={(e) => handleSendContact(e)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Họ Và Họ Lót"
                               required={true}
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Tên"
                               required={true}
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="email@gmail.com"
                               pattern=".+@gmail\.com" size="30"
                               required={true}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className="px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none" type="text"
                               placeholder="Tiêu Đề"
                               required={true}
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <textarea
                        className="w-full mt-3 px-3 py-2 border-[0.5px] border-gray-400 rounded outline-none min-h-[200px]"
                        placeholder="Nội Dung...."
                        required={true}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="text-center my-3 w-full md:w-1/4">
                        <button
                            className="w-full px-8 py-2 rounded border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow ">Gửi
                            Ngay
                        </button>
                    </div>
                </form>
            </div>

            {/*Info And Map*/}
            <div className="w-full h-[500px] mt-40 relative ">
                <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
                    <MapBox></MapBox>
                </div>
                <div
                    className="max-w-[1200px] mx-auto bg-white absolute -top-[55%] md:-top-[25%] lg:-top-[15%] left-[5%] right-[5%] grid grid-cols-12 gap-5 p-5 rounded shadow-[0_0_10px_gray]">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faPhone}/>
                        <p className="text-xm text-gray-400 mb-2">Số Điện Thoại</p>
                        <p className="text-xl font-semibold text-textBoldColor">(+84) 0343 034 343 </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faEnvelope}/>
                        <p className="text-xm text-gray-400 mb-2">Email</p>
                        <p className="text-xl font-semibold text-textBoldColor">sharedspacefinder@gmail.com </p>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-5xl text-primaryColor mb-3" icon={faMapLocationDot}/>
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