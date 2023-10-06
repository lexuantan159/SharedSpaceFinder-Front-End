import {Link} from "react-router-dom";
import React from "react";


const SidebarFilter = () => {
    return (
        <>
            {/*Filter*/}
            <div className="border-[0.5px] border-[#B2B2B2] rounded-lg">
                <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                    <h4 className="text-textBoldColor text-xm font-bold">Lọc Không Gian</h4>
                </div>
                <div className="border-b-[0.5px] border-[#B2B2B2] pb-4">
                    <p className="p-4 text-textBoldColor text-xm font-semibold ">Diện tích: </p>
                    <div className="grid grid-cols-2 gap-3 pl-4 ">
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">20m<sup>2</sup> - 40m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">40m<sup>2</sup> - 60m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">60m<sup>2</sup> - 80m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">80m<sup>2</sup> - 100m<sup>2</sup></label>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <p className="p-4 text-textBoldColor text-xm font-semibold ">Giá: </p>
                    <div className="grid grid-cols-2 gap-3 pl-4 ">
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">0 - 2.5tr</label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">2.5tr - 4.5tr</label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">4.5tr - 6.5tr</label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">6.5tr - 8.5tr</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Rate   */}
            <div className="border-[0.5px] border-[#B2B2B2] rounded-lg mt-6">
                <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                    <h4 className="text-textBoldColor text-xm font-bold">Đánh Giá Cao</h4>
                </div>

                {/*Space hight rate*/}
                <Link to="/">
                    <div
                        className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                        <img className="w-full h-auto object-cover col-span-1 rounded-lg"
                             src="https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Phòng Trọ</p>
                            <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                        </div>
                    </div>
                </Link>

                <Link to="/">
                    <div
                        className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                        <img className="w-full h-auto object-cover col-span-1 rounded-lg"
                             src="https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Phòng Trọ</p>
                            <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                        </div>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                        <img className="w-full h-auto object-cover col-span-1 rounded-lg"
                             src="https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Phòng Trọ</p>
                            <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                        </div>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                        <img className="w-full h-auto object-cover col-span-1 rounded-lg"
                             src="https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Phòng Trọ</p>
                            <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                        </div>
                    </div>
                </Link>
            </div>
        </>

    )
}

export default SidebarFilter