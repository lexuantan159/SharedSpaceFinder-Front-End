import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faCommentDots, faHeart, faShare, faUser} from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../context/authProvider";
import * as userServices from "../../services/user"
import * as authServices from "../../services/auth"
import {toast} from "react-toastify";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isLogin, setIsLogin] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)
    const [user, setUser] = useState({})
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();


    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const accessToken = auth.accessToken || JSON.parse(localStorage.getItem("access-token")).accessToken;
            const responseUser = await userServices.getcurrentuser(accessToken)
            console.log(responseUser)
            if(responseUser?.status === 200) {
                const userInfo = responseUser?.data
                console.log(userInfo)
                setUser(userInfo)
                const newAuth  = {...auth, userInfo}
                localStorage.setItem('auth', JSON.stringify(newAuth));
                setIsLogin(true)
            }
        }
        console.log(localStorage.getItem("access-token"))
        localStorage.getItem("access-token") !== null && fetchCurrentUser()

    }, []);


    const handleLogout = async (e) => {
        const fetchLogout = await authServices.logOut();
        if (fetchLogout?.status === 200) {
            localStorage.removeItem("auth");
            localStorage.removeItem("refresh-token");
            localStorage.removeItem("access-token");
            navigate('/login', {
                state: {
                    toastMessage: "Đăng Xuất Thành Công!",
                    statusMessage: "success"
                }
            })
        } else {
            console.log(fetchLogout?.response)
            notify("Đăng Xuất Thất Bại!", "error")
        }

    }

    return (
        <header className="shadow"  >
            <nav className="max-w-[1200px] mx-auto bg-white border-gray-200 px-4 lg:px-6"  onMouseEnter={() => setIsDropdown(false)}>
                <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center h-[80px] w-[200px] overflow-hidden">
                        <img
                            src={require('../../../src/assets/images/logoTransparent.png')}
                            className=""
                            alt="SharedSpaceFinder Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {/*not login*/}
                        {isLogin ? <div className="relative">
                            <button id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="text-black hover:bg-gray-100 focus:outline-none rounded-lg px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                    onMouseEnter={() => setIsDropdown(!isDropdown)}
                            >

                                <span className="text-sm font-medium">
                                    {user?.name || "Name User"}
                                </span>
                                <img className="w-[35px] h-[35px] rounded-full mx-3"
                                     src={user?.avatar || "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"}
                                     alt={user?.name || "customer"}></img>
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            {/*<!-- Dropdown menu -->*/}
                            <div id="dropdown"
                                 className={`${!isDropdown ? 'hidden' : 'block'} absolute top-19 -left-8 -right-8 z-10 mt-3 bg-white divide-gray-100 rounded-lg shadow transition-all`}
                                 onMouseLeave={() => setIsDropdown(!isDropdown)}
                            >
                                <ul className="py-2 px-2 text-sm text-gray-700 font-semibold"
                                >
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faUser}/>
                                        <Link to="/profile"
                                              className="block pr-4 py-2">Thông tin cá nhân</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faHeart}/>
                                        <Link to="/favorite-space"
                                              className="block pr-4 py-2">Yêu thích</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faShare}/>
                                        <Link to="/my-sharing"
                                              className="block pr-4 py-2">Chia sẻ</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faCommentDots}/>
                                        <Link to="/feedback"
                                              className="block pr-4 py-2">Đánh giá</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faArrowRightFromBracket}
                                                         rotation={180}/>
                                        <button
                                            className="block pr-4 py-2"
                                            onClick={(e) => {
                                                handleLogout(e)
                                            }}
                                        >Đăng Xuất
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div> : <> <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-300 transition-all hover:text-primaryColor font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                        >
                            Đăng Nhập
                        </Link>
                            <Link
                                to="/register"
                                className="text-white bg-primaryColor transition-all font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-primaryColor/90"
                            >
                                Đăng Ký
                            </Link></>}


                        {/* responsive menu*/}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"

                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isCollapsed ? 'hidden' : 'block'}  justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                        onMouseLeave={() => setIsCollapsed(!isCollapsed)}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                                >
                                    Trang Chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/spaces"
                                    className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                                >
                                    Danh Mục
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                                >
                                    Liên Hệ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sharing"
                                    className="block rounded-lg py-2 mb-3 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                                >
                                    Chia Sẻ
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );


};

export default Header;