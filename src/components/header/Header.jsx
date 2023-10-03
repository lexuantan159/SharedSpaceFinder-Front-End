import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faCommentDots, faHeart, faShare, faUser} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isLogin, setIsLogin] = useState(false)
    const [isDropdown, setIsDropdown] = useState(true)


    return (
        <header className="shadow">
            <nav className="max-w-[1200px] mx-auto bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        {/*<img*/}
                        {/*    src="https://flowbite.com/docs/images/logo.svg"*/}
                        {/*    className="mr-3 h-6 sm:h-9"*/}
                        {/*    alt="Flowbite Logo"*/}
                        {/*/>*/}
                        <span className="text-primaryColor self-center text-xl font-semibold whitespace-nowrap ">
                             SharedSpaceFinder
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {/*not login*/}
                        {isLogin ? <div className="relative">
                            <button id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="text-black hover:bg-gray-100 focus:outline-none rounded-lg px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                    onClick={() => setIsDropdown(!isDropdown)}>

                                <span className="text-sm font-medium">
                                    Name User
                                </span>
                                <img className="w-[40px] h-[40px] rounded-full mx-3"
                                     src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                     alt="customer"></img>
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            {/*<!-- Dropdown menu -->*/}
                            <div id="dropdown"
                                 className={`${isDropdown ? 'hidden' : 'block'} absolute top-18 left-0 right-0 z-10 bg-white divide-gray-100 rounded-lg shadow `}>
                                <ul className="py-2 px-2 text-sm text-gray-700 font-semibold"
                                    aria-labelledby="dropdownDefaultButton">
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faUser}/>
                                        <Link to="/"
                                              className="block pr-4 py-2">Profile</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faHeart}/>
                                        <Link to="/"
                                              className="block pr-4 py-2">Favorite Spaces</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faShare}/>
                                        <Link to="/"
                                              className="block pr-4 py-2">Sharing</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faCommentDots}/>
                                        <Link to="/"
                                              className="block pr-4 py-2">Chat</Link>
                                    </li>
                                    <li className="flex items-center hover:bg-primaryColor hover:text-white rounded">
                                        <FontAwesomeIcon className="mx-3" icon={faArrowRightFromBracket}
                                                         rotation={180}/>
                                        <Link to="/"
                                              className="block pr-4 py-2">Sign
                                            out</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> : <> <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-300 transition-all hover:text-primaryColor font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                        >
                            LogIn
                        </Link>
                            <Link
                                to="/register"
                                className="text-white bg-primaryColor transition-all font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:opacity-90"
                            >
                                SignUp
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
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0"
                                >
                                    Trang Chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/spaces"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0"
                                >
                                    Danh Mục
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0"
                                >
                                    Liên Hệ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 "
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