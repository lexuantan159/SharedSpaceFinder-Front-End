import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const LogIn = () => {
    const [hiddenPassword, setHiddenPassword] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="mx-auto grid grid-cols-12">
            <div className="h-screen col-span-12 md:col-span-5 lg:col-span-4 ">
                <form action="" className="pb-12 w-[90%] mx-auto pl-5 pr-10">
                    <h1 className="pt-12 pb-20 text-4xl text-primaryColor font-bold">LogIn To Shared Space Finder</h1>
                    <div className="w-full mb-4">
                        <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                               htmlFor="inputEmail">Email</label>
                        <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none" id="inputEmail"
                               type="email" placeholder="email@gmail.com"
                               autoComplete
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="relative w-full mb-4">
                        <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                               htmlFor="inputPassword">Password</label>
                        <div className="w-full">
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputPassword"
                                   type={hiddenPassword ? "password" : "text"} placeholder="password" required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />

                            {
                                hiddenPassword ?
                                    <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)}
                                                     icon={faEyeSlash}
                                                     className="absolute bottom-4 right-4 hover:cursor-pointer"/> :
                                    <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)} icon={faEye}
                                                     className="absolute bottom-4 right-4 hover:cursor-pointer"/>
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <input type="checkbox" className=" mr-1 mt-1 hover:cursor-pointer"/>
                        <span className=" text-primaryColor">save password</span>
                    </div>
                    <div className=" mt-5">
                        <button
                            className=" w-full px-4 py-3 text-xl font-bold text-white bg-primaryColor rounded-2xl shadow-primaryColor hover:shadow-lg hover:opacity-90">LogIn
                        </button>
                    </div>
                    <div className=" mt-5 text-center">
                        <p className="">Have no account! <Link to="/register"
                                                               className=" text-primaryColor">SignUp</Link></p>
                    </div>
                </form>
            </div>
            <div className="h-screen hidden md:block lg:block md:col-span-7 lg:col-span-8">
                <img
                    className="w-full h-full object-cover"
                    src="https://img.freepik.com/fotos-premium/diseno-hogar-moderno-fondo-jardin-cielo_741910-5826.jpg?w=2000"
                    alt="ảnh nhà"/>
            </div>
        </div>
    )
}

export default LogIn;