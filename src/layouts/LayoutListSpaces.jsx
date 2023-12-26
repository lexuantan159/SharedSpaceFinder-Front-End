import React from "react";
import Space from "../components/space/Space";
import SidebarFilter from "../components/sidebarFilter/SidebarFilter";
import Pagination from "../components/pagination/Pagination";


const LayoutListSpaces = ({initialState, state, setState, type = 'none', spacesList = [], setResetAddress = () =>{}, setCategory}) => {
    const handelSetSortDir = (e) => {
        if(e.target.value !== "None")
            setState((prevState) => ({
                ...prevState,
                sortDir: e.target.value,
                sortBy: "price"
            }))
    }

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 mt-[200px] md:mt-[200px] lg:mt-[100px]  px-10">
            {/*    sidebar*/}
            <div className="col-span-12 md:col-span-4">
                <SidebarFilter setState={setState}/>
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="text-center md:text-left flex">
                    <button className="ml-2 px-2 py-1 border-[0.5px] border-[#B2B2B2] rounded-xl outline-none"
                            onClick={() => {
                                setState(initialState)
                                setResetAddress(true)
                                setCategory("None")
                            }}
                    >Xóa Tất Cả
                    </button>
                    <select
                        value={state.sortDir || "None"} onChange={(e) => handelSetSortDir(e)}
                        className="ml-2 px-2 py-1 border-[0.5px] border-[#B2B2B2] rounded-xl outline-none">
                        <option value="None">Sắp Xếp Theo:</option>
                        <option value="ASC">Giá Từ Thấp Đến Cao</option>
                        <option value="DESC">Giá Từ Cao Đến Thấp</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {spacesList.length > 0 ? spacesList.map(space => {
                        return <Space key={space?.id} typeSpace={type} spaceValue={space}/>
                    }) : <div
                        className="mt-44 col-span-1 lg:col-span-2 text-2xl text-primaryColor text-center font-bold">Không
                        Tìm Thấy Space Nào!</div>}
                </div>
            </div>
            {/*pagination*/}
            <Pagination state={state} setState={setState}/>
        </div>
    )
}

export default LayoutListSpaces