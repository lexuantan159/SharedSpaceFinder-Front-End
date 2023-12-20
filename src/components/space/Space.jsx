import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed, faEllipsisVertical,
    faHeart,
    faLayerGroup, faMapLocationDot,
    faStar,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../context/authProvider";
import {toast} from "react-toastify";
import * as favouritesService from "../../services/favourite"

const Space = ({typeSpace = "none", spaceValue}) => {
    const {auth} = useContext(AuthContext);
    const [saved, setSaved] = useState(false)
    const navigate = useNavigate();
    const cutOverLetter = (string, limit) => {
        const dots = "...";
        if (string.length > limit) {
            // you can also use substr instead of substring
            string = string.substring(0, limit) + dots;
        }
        return string;
    }

    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }


    useEffect(() => {
        if(auth.hasOwnProperty("accessToken")) {
            const fetchSetIsSaved = async () => {
                const accessToken = auth.accessToken
                const params = {
                    spaceId: spaceValue?.id
                }
                const responseFavourite = await favouritesService.getFavourite(params,accessToken)
                if(responseFavourite?.data?.status === 200) {
                    const isSaved = responseFavourite?.data?.saved;
                    isSaved && setSaved(true)
                }else {
                    console.log(responseFavourite?.response)
                }
            }
            fetchSetIsSaved();

        }
    }, [])


    const handleSaveSpace = async (e) => {
        // Prevent the click event from propagating to the parent link
        e.preventDefault();
        e.stopPropagation();
        // Call api
        if(auth.hasOwnProperty("accessToken")) {
            const params = {
                spaceId: spaceValue?.id
            }
            const accessToken = auth.accessToken
            if(saved) {
                const updateSaved = await favouritesService.updateFavourite(params,accessToken)
                if(updateSaved?.data?.status === 200) {
                    setSaved(prevSaved => !prevSaved)
                }else {
                    setSaved(prevSaved => !prevSaved)
                }
            }else{
                const createFavourite = await favouritesService.createFavourite(params,accessToken)
                // create successful
                if(createFavourite?.data?.status === 200) {
                    setSaved(prevSaved => !prevSaved)
                }else {
                    setSaved(prevSaved => !prevSaved)
                }
            }

        }else {
            navigate('/login', {state: {toastMessage: "Bạn cần phải đăng nhập mới có thể lưu bài viết!"}});
        }
    }


    return (

        <div className="py-4">
            <Link to={`/spaces/${spaceValue?.id}`}>
                <div
                    className="w-auto mx-3 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div className="h-[300px] w-full relative">
                        <img className="w-full h-full object-cover rounded-t-xl"
                             src={spaceValue?.images[0]?.imageUrl || "https://bandon.vn/uploads/posts/thiet-ke-nha-tro-dep-2020-bandon-0.jpg"}
                             alt="anh phong"/>
                        {typeSpace.toLowerCase() === 'top rate' &&
                            <p className="absolute top-3 left-3 uppercase bg-primaryColor rounded text-white text-xs font-semibold px-4 py-[1px]">Top
                                rate</p>}
                        {typeSpace.toLowerCase() === 'sharing' &&
                            <p className="absolute top-3 right-3 uppercase bg-primaryColor rounded text-white text-xs font-semibold px-2 py-[1px] tracking-[.30em]">Sharing</p>}

                        <div className=" absolute bottom-3 left-3 right-3 flex justify-between text-white">
                            <div className="font-bold">
                                <FontAwesomeIcon className="pr-3" icon={faLayerGroup}/>
                                <span>{spaceValue?.images?.length} Photos</span>
                            </div>
                            <div className="font-bold">
                                <span className="pr-3">Saved</span>
                                <FontAwesomeIcon onClick={(e) => handleSaveSpace(e)} icon={faHeart}
                                                 className={`${saved && "text-[#ff0000]" }`}/>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-b-xl border-gray-400 border-[1px]">
                        <div className="px-3 py-3 ">
                            <p className="text-sm font-semibold text-primaryColor ">{spaceValue?.categoryId?.categoryName || "Null"}</p>
                            <h4 className="text-xm font-bold text-textBoldColor ">{spaceValue?.ownerId?.name || "Tên Owner"}</h4>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-xm font-bold text-textBoldColor">{formatNumber(spaceValue?.price) + "đ" || "Null"}
                                    <span
                                        className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                                <img className="w-[40px] h-[40px] rounded-full mx-3"
                                     src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                     alt="customer"></img>
                            </div>

                            <div className="mb-2">
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#d4d4d4",}}/>
                                <span className="ml-3 text-[#d4d4d4] ">0 review owners</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[#d4d4d4] text-sm">
                                <div className="text-left ">
                                    <FontAwesomeIcon className="-rotate-45" icon={faArrowsLeftRight}
                                                     style={{color: "#c2c2c2",}}/>
                                    <span className="ml-3">{spaceValue?.area} m^2</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBed}/>
                                    <span className="ml-3">{spaceValue?.bedroomNumbers} Bedrooms</span>
                                </div>
                                <div className="text-left ">
                                    <FontAwesomeIcon icon={faUserGroup}/>
                                    <span className="ml-3">{spaceValue?.peopleNumbers} Guess</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBath}/>
                                    <span className="ml-3">{spaceValue?.bathroomNumbers} Bathroom</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between text-textBoldColor bg-[#fafafa] rounded-b-xl px-3 py-1">
                            <div className="">
                                <FontAwesomeIcon className="inline" icon={faMapLocationDot}/>
                                <span
                                    className="mx-5"> {spaceValue?.address ? cutOverLetter(`${spaceValue?.address}, ${spaceValue?.ward}, ${spaceValue?.district}, ${spaceValue?.province}`, 28) : cutOverLetter("380 Tôn Đức Thắng, Phường Hòa Minh, Quận Liên Chiểu, Đà Nẵng", 28)}</span>
                            </div>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Space