import Space from "../components/space/Space";
import React from "react";
import SidebarFilter from "../components/sidebarFilter/SidebarFilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";


const LayoutListSpaces = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 mt-[200px] md:mt-[200px] lg:mt-[100px]  px-10">
            {/*    sidebar*/}
            <div className="col-span-12 md:col-span-4">
                <SidebarFilter/>
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="text-center md:text-left">
                    <select name="" id=""
                            className="ml-2 px-2 py-1 border-[0.5px] border-[#B2B2B2] rounded-xl outline-none">
                        <option>Sắp Xếp Theo:</option>
                        <option>Giá Từ Thấp Đến Cao</option>
                        <option>Giá Từ Cao Đến Thấp</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Space/>
                    <Space/>
                    <Space/>
                    <Space/>
                </div>
            </div>'
            {/*pagination*/}
            <div className="col-span-12 flex justify-between mb-9">
                <button className="px-3 py-1 border-[0.5px] group border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">
                    <FontAwesomeIcon  className="text-gray-400 transition-all group-hover:text-white" icon={faAngleLeft} />
                </button>
                <ul className="hidden md:flex ">
                    <li className="mx-2">
                        <button className="px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">1</button>
                    </li>
                    <li className="mx-2">
                        <button className="px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">2</button>
                    </li>
                    <li className="mx-2">
                        <button className="px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">3</button>
                    </li>
                    <li className="mx-2">
                        <button className="px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">4</button>
                    </li>
                    <li className="mx-2">
                        <button className="px-3 py-1 border-[0.5px] border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">5</button>
                    </li>

                </ul>
                <button className="px-3 py-1 border-[0.5px] group border-gray-400 transition-all hover:bg-primaryColor hover:text-white rounded-lg">
                    <FontAwesomeIcon className="text-gray-400 transition-all group-hover:text-white" icon={faAngleRight} />
                </button>
            </div>
        </div>
    )
}

export default LayoutListSpaces