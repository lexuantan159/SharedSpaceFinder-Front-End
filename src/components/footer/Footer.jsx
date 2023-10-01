import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    return (

        <footer className="bg-primaryColor">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            {/*<img src="/" className="h-8 mr-3" alt="FlowBite Logo" />*/}
                            <span
                                className="text-white self-center text-xl font-semibold whitespace-nowrap">SharedSpaceFinder</span>
                        </Link>
                    </div>
                    <span className="block text-white text-xl font-medium mb-4">254 Nguyễn Văn Linh, <br/> Quận Thanh Khê - Tp. Đà Nẵng</span>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Quick Links</h2>
                            <ul className="text-gray-50 font-semibold">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Trang Chủ</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Danh Mục</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Chia Sẻ</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Liên Hệ</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-50 font-semibold">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline ">Facebook</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Trello</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-50 sm:text-center ">© 2023 <Link to="/"
                      className="hover:underline">SharedSpaceFinder™</Link>. All Rights Reserved</span>

                </div>
            </div>
        </footer>

    );
};

export default Footer;