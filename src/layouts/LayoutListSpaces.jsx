import React from "react";
import Space from "../components/space/Space";
import SidebarFilter from "../components/sidebarFilter/SidebarFilter";
import Pagination from "../components/pagination/Pagination";


const LayoutListSpaces = ( {type='none' , spacesList = []}) => {
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
                    {spacesList.length > 0 ? spacesList.map(space => {
                        return <Space key={space?.id} typeSpace={type} spaceValue={space}/>
                    }) : <>
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                        <Space typeSpace="sharing" />
                    </>}
                </div>
            </div>
            {/*pagination*/}
            <Pagination/>
        </div>
    )
}

export default LayoutListSpaces