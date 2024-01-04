import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import MultiRangeSlider from "../rangeSlider/MultipleRangeSlider";
import * as spaceServices from "../../services/spaces";
import {toast} from "react-toastify";


const SidebarFilter = ({setState}) => {

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }

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

    const handleRangeChange = ({min, max}) => {
        // Update the state or perform any other necessary actions
        console.log("API call with range:", {min, max});
        setState((prevState) => ({
            ...prevState,
            priceFrom: min,
            priceTo: max
        }))
    };

    const [topSpaces, setTopSpaces] = useState([])


    useEffect(() => {
        const fetchTopSpaces = async () => {
            const spaceParam = {
                topRate: 4, limit:5
            };
            const topSpaces = await spaceServices.getSpace(spaceParam);
            if (topSpaces?.status === 200) {
                const spaces = topSpaces?.data?.listSpaces;
                setTopSpaces(spaces)
            } else
                console.log("Not found favorite spaces")
        }
        fetchTopSpaces();
    }, [])


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
                        {
                            areaValue.map((area) => {
                                return (<div className="" key={area.id}>
                                    <input id="20" className="text-xl hover:cursor-pointer" type="radio"
                                           value={area.id}
                                           onClick={(e) => handleSetArea(e)}
                                           name="area"/>
                                    <label className="pl-2" htmlFor="">{area.areaFrom}m<sup>2</sup> - {area.areaTo}m<sup>2</sup></label>
                                </div>)
                            })
                        }
                    </div>
                </div>
                <div className="pb-4 h-[120px]">
                    <p className="p-4 text-textBoldColor text-xm font-semibold ">Giá: </p>
                    <MultiRangeSlider min={100000} max={12000000} onRangeChange={handleRangeChange}/>
                </div>
            </div>
            {/* Top Rate   */}
            <div className="border-[0.5px] border-[#B2B2B2] rounded-lg mt-6">
                <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                    <h4 className="text-textBoldColor text-xm font-bold">Đánh Giá Cao</h4>
                </div>

                {/*Space hight rate*/}
                {topSpaces.length > 0 ? topSpaces.map(space => {
                    return (<Link key={space?.id} to={`${space?.id}`}>
                        <div
                            className="m-4 p-2 grid grid-cols-4 gap-3 hover:shadow hover:shadow-gray-300 hover:rounded ">
                            <img className="w-full h-[60px] object-cover col-span-1 rounded-lg"
                                 src={space?.images[0].imageUrl}
                                 alt={space?.images[0].imageId}/>
                            <div className="col-span-3 flex flex-col justify-between">
                                <p className="text-sm text-primaryColor font-semibold">{space?.categoryId?.categoryName}</p>
                                <p className="text-xm font-bold text-textBoldColor">{formatNumber(space?.price) + 'đ'}<span
                                    className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                            </div>
                        </div>
                    </Link>)
                }) : <p className="text-sm font-bold text-primaryColor text-center py-4">Chưa Có Phòng Nào</p>}

            </div>
        </>

    )
}

export default SidebarFilter