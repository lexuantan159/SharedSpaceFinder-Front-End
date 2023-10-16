import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Address from "../../components/selectAddress/Address";

const Register = () => {
    const [hiddenPassword, setHiddenPassword] = useState(true)
    const [hiddenRePassword, setHiddenRePassword] = useState(true)
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [address, setAddress] = useState("")


    return (
        <div className="mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-7 ">
                <form action="" className="pb-12 w-[90%] mx-auto pl-5 pr-5">
                    <h1 className="pt-12 text-4xl text-primaryColor font-bold text-center">Đăng Ký</h1>
                    <div className="w-[400px] h-[200px] mb-9 overflow-hidden mx-auto">
                        <img className="w-full h-full object-cover"
                             src={require('../../assets/images/logoTransparent.png')} alt=""/><
                    /div>
                    <div className="block md:flex md:justify-between">
                        <div className="w-full md:w-[45%] ">
                            <div className="w-full mb-4">
                                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                       htmlFor="inputEmail">Email</label>
                                <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                       id="inputEmail"
                                       type="email"
                                       placeholder="email@gmail.com"
                                       autoComplete
                                       required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="w-full mb-4">
                                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                       htmlFor="inputFullName">Họ Và Tên</label>
                                <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                       id="inputFullName"
                                       type="text"
                                       placeholder="Họ và tên"
                                       required
                                       value={fullName}
                                       onChange={(e) => setFullName((e.target.value))}
                                />

                            </div>
                            <div className="relative w-full mb-4">
                                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                       htmlFor="inputPassword">Mật Khẩu</label>
                                <div className="w-full">
                                    <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                           id="inputPassword"
                                           type={hiddenPassword ? "password" : "text"}
                                           placeholder="Mật khẩu"
                                           required
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                    />

                                    {
                                        hiddenPassword ?
                                            <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)}
                                                             icon={faEyeSlash}
                                                             className="absolute bottom-4 right-4 hover:cursor-pointer"/> :
                                            <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)}
                                                             icon={faEye}
                                                             className="absolute bottom-4 right-4 hover:cursor-pointer"/>
                                    }
                                </div>
                            </div>
                            <div className="relative w-full mb-4">
                                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                       htmlFor="inputRePassword">Nhập Lại Mật Khẩu</label>
                                <div className="w-full">
                                    <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                           id="inputRePassword"
                                           type={hiddenRePassword ? "password" : "text"} placeholder="Nhập lại mật khẩu"
                                           required
                                           value={rePassword}
                                           onChange={(e) => setRePassword(e.target.value)}
                                    />

                                    {
                                        hiddenRePassword ?
                                            <FontAwesomeIcon onClick={() => setHiddenRePassword(!hiddenRePassword)}
                                                             icon={faEyeSlash}
                                                             className="absolute bottom-4 right-4 hover:cursor-pointer"/> :
                                            <FontAwesomeIcon onClick={() => setHiddenRePassword(!hiddenRePassword)}
                                                             icon={faEye}
                                                             className="absolute bottom-4 right-4 hover:cursor-pointer"/>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] ">
                            {/* Address */}
                            <Address setAddress={setAddress}/>

                            <div className="w-full mb-4">
                                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                       htmlFor="inputAdress">Địa Chỉ</label>
                                <textarea className="block w-full h-[100px] pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                       id="inputAdress"
                                          placeholder="địa chỉ"
                                          required
                                       value={address}
                                       onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5">
                        <button
                            className=" w-full px-4 py-3 text-xl font-bold text-white bg-primaryColor rounded-2xl shadow-primaryColor hover:shadow-lg hover:opacity-90">Đăng Lý
                        </button>
                    </div>
                    <div className=" mt-5 text-center">
                        <p className="">Đã Có Tài Khoản! <Link to="/login"
                                                                className=" text-primaryColor">Đăng Nhập</Link></p>
                    </div>
                </form>
            </div>
            <div className="h-full hidden md:block lg:block md:col-span-4 lg:col-span-5">
                <img
                    className="w-full h-full object-cover"
                    src="https://img.freepik.com/fotos-premium/diseno-hogar-moderno-fondo-jardin-cielo_741910-5826.jpg?w=2000"
                    alt="ảnh nhà"/>
            </div>
        </div>
    )
}

export default Register;