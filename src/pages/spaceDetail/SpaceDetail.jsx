import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faStar,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {Link, useParams} from "react-router-dom";
import SlideShow from "../../components/slideShow/SlideShow";
import SlideImages from "../../components/slideImages/SlideImages";
import MapBox from "../../components/map/MapBox";
import * as spaceServices from "../../services/spaces";
import {toast} from "react-toastify";
const SpaceDetail = () => {
    const {spaceId} = useParams();
    const [spaceDetail, setSpaceDetail] = useState({})
    console.log(spaceId)
    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return formattedString.replace(/\.00$/, '');
        }
    }


    useEffect(() => {
        if (spaceId) {
            const fetchSpaceDetails = async() => {
                const spaceParam = {spaceId: spaceId,
                status: 3};
                const listSpaces = await spaceServices.getSpace(spaceParam);
                if(listSpaces?.status === 200){
                    const spaceDetail = listSpaces?.data?.listSpaces[0];
                    console.log(spaceDetail)
                    setSpaceDetail(spaceDetail)
                }else
                    notify("Không tìm thấy phòng nào!");
            }
            fetchSpaceDetails();
        }
    }, [] )



    return (
        <>
            <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">
                <div className=" col-span-12 md:col-span-8">
                    {/* images of space*/}
                    <SlideImages images={spaceDetail?.images || []} />
                </div>
                <div className=" col-span-12 md:col-span-4">
                    {/*booking*/}
                    <div className="border-[0.5px] border-[#B2B2B2] rounded-lg">
                        <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                            <h4 className="text-textBoldColor text-xm font-bold">Tổng Tiền</h4>
                        </div>
                        <div className="pb-4">
                            <ul className="mx-5 mt-5 pb-4 mb-4 border-b-[0.5px] border-[#B2B2B2]">
                                <li className="flex justify-between">
                                    <p>{formatNumber(spaceDetail?.price) + "đ"} x tháng</p>
                                    <p>{formatNumber(spaceDetail?.price)}đ</p>
                                </li>
                            </ul>
                            <div className="flex justify-between px-5 ">
                                <p className="text-primaryColor font-semibold">Total</p>
                                <p className="text-primaryColor font-semibold">{formatNumber(spaceDetail?.price)}đ</p>
                            </div>
                            <div className="mx-5 text-center mt-5">
                                <Link to="/booking"
                                      className="block w-full px-8 py-2 rounded-xl border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow "

                                >Thuê Ngay
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* info owner */}
                    <div className="border-[0.5px] border-[#B2B2B2] rounded-lg mt-6">
                        <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                            <h4 className="text-textBoldColor text-xm font-bold">Thông Tin Chủ</h4>
                        </div>
                        <div className="pb-4 text-center mt-5">
                            <img className="w-[120px] h-[120px] mx-auto rounded-full"
                                 src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                 alt="customer"></img>

                            <div className="mb-2 ml-2 mt-5">
                                <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon className="text-xs" icon={faStar} style={{color: "#d4d4d4",}}/>
                                <span className="ml-3 text-[#d4d4d4] ">0 reviews</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">{spaceDetail?.ownerId?.name}</p>
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">Giới Tính: {spaceDetail?.ownerId?.gender ? "Nam" : "Nữ"}</p>
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">Ngày Sinh: {spaceDetail?.ownerId?.dateOfBirth}</p>
                            </div>
                            <p className="mx-2 text-xm font-semibold text-textBoldColor">Địa Chỉ: {spaceDetail?.ownerId?.address}</p>
                        </div>

                    </div>

                </div>
                <div className="col-span-12">
                    {/*Type of space*/}
                    <h2 className="text-xl font-bold text-primaryColor mb-2">
                        {spaceDetail?.description}</h2>

                    <h2 className="text-xl font-bold text-textBoldColor">{spaceDetail?.categoryId?.categoryName}</h2>

                    {/**/}
                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Tiện Ích</p>
                        <div className="flex flex-wrap text-textBoldColor">
                            <div className="mr-10">
                                <FontAwesomeIcon className="-rotate-45" icon={faArrowsLeftRight}/>
                                <span className="ml-3">{spaceDetail?.area} m^2</span>
                            </div>
                            <div className="mr-10 ">
                                <FontAwesomeIcon icon={faBed}/>
                                <span className="ml-3">{spaceDetail?.bedroomNumbers} Bedrooms</span>
                            </div>
                            <div className="mr-10">
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <span className="ml-3">{spaceDetail?.peopleNumbers} Guess</span>
                            </div>
                            <div className="mr-10 ">
                                <FontAwesomeIcon icon={faBath}/>
                                <span className="ml-3">{spaceDetail?.bathroomNumbers}  Bathroom</span>
                            </div>
                        </div>
                    </div>
                    {/* price detail*/}
                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Đặt Điểm Tin Đăng</p>
                        <div className="flex text-textBoldColor w-full">
                            <ul className="text-textBoldColor w-full">
                                <li className="pl-2 py-2  bg-gray-200 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Mã Tin</p>
                                    <p className="col-span-8">#{spaceId}</p>
                                </li>
                                <li className="pl-2 py-2 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Đối tượng thuê:</p>
                                    <p className="col-span-8">Tất cả</p>
                                </li>
                                <li className="pl-2 py-2  bg-gray-200 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Khu vực</p>
                                    <p className="col-span-8">Cho thuê {`${spaceDetail?.categoryId?.categoryName} tại ${spaceDetail?.province}`}</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* price detail*/}
                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Thông Tin Liên Hệ</p>
                        <div className="flex text-textBoldColor w-full">
                            <ul className="text-textBoldColor w-full">
                                <li className="pl-2 py-2  bg-gray-200 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Liên hệ:</p>
                                    <p className="col-span-8">{spaceDetail?.ownerId?.name}</p>
                                </li>
                                <li className="pl-2 py-2 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Điện thoại:</p>
                                    <p className="col-span-8">{spaceDetail?.ownerId?.phone}</p>
                                </li>
                                <li className="pl-2 py-2  bg-gray-200 mr-4  grid grid-cols-12">
                                    <p className="col-span-4">Zalo</p>
                                    <p className="col-span-8">{spaceDetail?.ownerId?.phone}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* describe */}
                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Mô Tả</p>
                        <div className="flex text-textBoldColor">
                            <p className="">{spaceDetail?.description}</p>
                        </div>
                    </div>

                    {/* describe */}
                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Ghi Chú</p>
                        <div className="flex text-textBoldColor">
                            <p className="">Căn phòng trọ này nằm tại tầng trệt của một tòa nhà chung cư mới xây,
                                được
                                thiết kế đặc
                            </p>
                        </div>
                    </div>

                    {/* address */}

                    <div className="mb-4">
                        <p className="text-xm text-primaryColor font-bold mb-3">Bản Đồ</p>
                        <p className="mb-4">Địa chỉ: {spaceDetail?.address}</p>
                        <div className="w-full h-[500px] rounded overflow-hidden shadow-[0_0_10px_gray]">
                            <MapBox address={spaceDetail?.province}></MapBox>
                        </div>
                    </div>
                </div>

            </div>

            {/*slide show*/}

            <SlideShow typeSlide="space" titlePart="Không Gian Liên Quan" background={true}/>
        </>
    )
}


export default SpaceDetail