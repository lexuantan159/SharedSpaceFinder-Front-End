import React, {useEffect, useState, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import SlideShow from "../../components/slideShow/SlideShow";
import SlideImages from "../../components/slideImages/SlideImages";
import MapBox from "../../components/map/MapBox";
import * as spaceServices from "../../services/spaces";
import * as sharingServices from "../../services/sharing";
import MethodContext from "../../context/methodProvider";
import FormReview from "../../components/review/FormReview";
import ItemSharing from "../../components/share/ItemSharing";
import ListSharing from "../../components/share/ListSharing";
import TitlePart from "../../components/titlePart/TitlePart";
import Rating from "../../components/review/Rating";
import * as feedbackService from "../../services/review";


const SpaceDetailSharing = () => {
    const {spaceId} = useParams();
    const [spaceDetail, setSpaceDetail] = useState({})
    const [isOpenFormReview, setIsOpenFormReview] = useState(false)
    const [isOpenShares, setIsOpenShares] = useState(false)
    const [shares, setShares] = useState([1, 2, 3])
    const {notify, filteredKeyNull} = useContext(MethodContext)
    const [averageRate, setAverageRate] = useState(0)
    const [feedbacks, setFeedbacks] = useState([])
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }

    const fetchShared = async ({spaceId}) => {
        const responseShared = await sharingServices.getSharing(filteredKeyNull({spaceId}))
        if (responseShared?.status === 200) {
            const listShares = responseShared?.data?.listSharing
            setShares(listShares)
        } else
            setShares([])
    }

    useEffect(() => {
        if (spaceId) {
            const fetchSpaceDetails = async () => {
                const spaceParam = {
                    spaceId: spaceId,
                    status: 0
                };
                const listSpaces = await spaceServices.getSpace(spaceParam);
                if (listSpaces?.status === 200) {
                    const spaceDetail = listSpaces?.data?.listSpaces[0];
                    setSpaceDetail(spaceDetail)
                } else
                    notify("Không tìm thấy phòng nào!");
            }
            fetchSpaceDetails();
            fetchShared(spaceId);
        }
    }, [])


    useEffect(() => {
        const fetchFeedback = async () => {
            const paramsFiltered = filteredKeyNull({
                ownerId: spaceDetail?.ownerId?.id
            })
            // call API to get feedback
            const responseFeedback = await feedbackService.getListFeedback(paramsFiltered);
            if (responseFeedback?.status === 200) {
                setAverageRate(responseFeedback?.data?.averageRate)
                const listFeedback = responseFeedback?.data?.listFeedbacks;
                setFeedbacks(listFeedback)
            } else
                setFeedbacks([])
        }
        // call list feedback
        fetchFeedback()

    }, []);

    const handleLinkBooking = () => {
        console.log(spaceDetail?.id)
        const accessToken = localStorage.getItem('access-token');
        if (accessToken && accessToken !== "null") {
            navigate('/booking', {
                state: {
                    spaceId: spaceDetail?.id,
                }
            })
        } else {
            notify("Yêu cầu đăng nhập!", "error")
        }
    }


    return (
        <>
            <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">
                <div className=" col-span-12 md:col-span-8">
                    {/* images of space*/}
                    <SlideImages images={spaceDetail?.images || []}/>
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
                                <p onClick={handleLinkBooking}
                                   className="block w-full px-8 py-2 rounded-xl border-2 border-primaryColor font-semibold transition-all hover:bg-primaryColor hover:text-white hover:shadow-primaryColor hover:shadow hover:cursor-pointer"

                                >Thuê ngay
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* info owner */}
                    <div className="border-[0.5px] border-[#B2B2B2] rounded-lg mt-6 hover:cursor-pointer"
                         onClick={() => setIsOpenFormReview(true)}>
                        <div className="p-4 bg-[#f4f4f4] rounded-t-lg">
                            <h4 className="text-textBoldColor text-xm font-bold">Thông Tin Chủ</h4>
                        </div>
                        <div className="pb-4 text-center mt-5">
                            <img className="w-[120px] h-[120px] mx-auto rounded-full"
                                 src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                 alt="customer"></img>

                            <div className="mb-2 ml-2 mt-5">
                                <Rating valueRating={averageRate}/>
                                <span className="ml-3 text-[#d4d4d4] ">{averageRate} reviews</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">{spaceDetail?.ownerId?.name}</p>
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">Giới
                                    Tính: {spaceDetail?.ownerId?.gender ? "Nam" : "Nữ"}</p>
                                <p className="ml-2 text-xm font-semibold text-textBoldColor">Ngày
                                    Sinh: {spaceDetail?.ownerId?.dateOfBirth}</p>
                            </div>
                            <p className="mx-2 text-xm font-semibold text-textBoldColor">Địa
                                Chỉ: {spaceDetail?.ownerId?.address}</p>
                        </div>
                        {isOpenFormReview &&
                            <FormReview closeModal={setIsOpenFormReview} ownerData={spaceDetail?.ownerId}
                                        averageRate={averageRate} feedbacks={feedbacks}/>}
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
                        <div className="flex flex-wrap text-textBoldColor mb-3">
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
                                <span className="ml-3">{spaceDetail?.bathroomNumbers} Bathroom</span>
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
                                        <p className="col-span-8">Cho
                                            thuê {`${spaceDetail?.categoryId?.categoryName} tại ${spaceDetail?.province}`}</p>
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
                                <MapBox address={spaceDetail?.address}></MapBox>
                            </div>
                        </div>

                        {/*list Sharing*/}
                        {shares.length > 0 &&
                            <div className="mt-5">
                                <TitlePart title="Danh sách chia sẽ" subTitle="Chia sẽ tạo thuận lợi cho việc booking"
                                           subDesc="hỗ trọ nhiệt tình"/>
                                <div className="">
                                    {
                                        (shares?.length > 2 ? <> {shares.slice(0, 2).map(item => (
                                            <ItemSharing itemSharing={item} key={item?.id}/>
                                        ))}
                                            <p className="text-lg text-white text-center font-semibold bg-primaryColor rounded py-1 hover:cursor-pointer hover:opacity-90 mt-4"
                                               onClick={() => setIsOpenShares(true)}
                                            > Xem thêm...
                                            </p></> : shares.map(item => {
                                            return (<ItemSharing itemSharing={item} key={item?.id}/>)
                                        }))
                                    }
                                </div>
                            </div>
                        }
                        {isOpenShares && <ListSharing closeModal={setIsOpenShares} listShares={shares}/>}
                    </div>

                </div>

            </div>
            {/*slide show*/
            }
            <SlideShow typeSlide="relate" titlePart="Không Gian Liên Quan" id={spaceDetail?.categoryId?.id}
                       background={true}/>
        </>
    )
}


export default SpaceDetailSharing