import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";


const Pagination = () => {
    return (
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
    )
}

export  default Pagination