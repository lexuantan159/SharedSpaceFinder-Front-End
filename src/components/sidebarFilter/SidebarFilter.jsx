import {Link} from "react-router-dom";
import React from "react";
import MultiRangeSlider from "../rangeSlider/MultipleRangeSlider";


const SidebarFilter = ({setState}) => {

    const areaValue = [
        {
            id: 1,
            areaFrom: 0,
            areaTo: 20
        }, {
            id: 2,
            areaFrom: 20,
            areaTo: 40
        }, {
            id: 3,
            areaFrom: 40,
            areaTo: 60
        }, {
            id: 4,
            areaFrom: 60,
            areaTo: 80
        },
    ]

    const handleSetArea = (e) => {
        const selectedAreaId = Number(e.target.value);
        const selectedArea = areaValue.find((item) => item.id === selectedAreaId);
       setState((prevState) => ({
           ...prevState,
           areaFrom: selectedArea.areaFrom,
           areaTo: selectedArea.areaTo
       }))
    }

    const handleRangeChange = ({ min, max }) => {
        // Update the state or perform any other necessary actions
        console.log("API call with range:", { min, max });
        setState((prevState) => ({
            ...prevState,
            priceFrom: min,
            priceTo: max
        }))
    };




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
                                   value={1}
                                   onClick={(e) => handleSetArea(e)}
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">0m<sup>2</sup> - 20m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   value={2}
                                   onClick={(e) => handleSetArea(e)}
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">20m<sup>2</sup> - 40m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   value={3}
                                   onClick={(e) => handleSetArea(e)}
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">40m<sup>2</sup> - 60m<sup>2</sup></label>
                        </div>
                        <div className="">
                            <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                   value={4}
                                   onClick={(e) => handleSetArea(e)}
                                   name="dientich"/>
                            <label className="pl-2" htmlFor="">60m<sup>2</sup> - 80m<sup>2</sup></label>
                        </div>
                    </div>
                </div>
                <div className="pb-4 h-[120px]">
                    <p className="p-4 text-textBoldColor text-xm font-semibold ">Giá: </p>

                    <MultiRangeSlider min={100000} max={12000000}  onRangeChange={handleRangeChange}/>

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
                             src="https://cafefcdn.com/thumb_w/640/pr/2022/photo1661937906060-1661937906180659152859-63797578230425.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Văn Phòng</p>
                            <p className="text-xm font-bold text-textBoldColor">2.450.000 <span
                                className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                        </div>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                        <img className="w-full h-auto object-cover col-span-1 rounded-lg"
                             src="https://danviet.mediacdn.vn/296231569849192448/2021/5/10/nha-cho-thue-nguyen-can-16206399961522129160390.jpg"
                             alt=""/>
                        <div className="col-span-3 flex flex-col justify-between">
                            <p className="text-sm text-primaryColor font-semibold">Nhà Ở</p>
                            <p className="text-xm font-bold text-textBoldColor">5.450.000 <span
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