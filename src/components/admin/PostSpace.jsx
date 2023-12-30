import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import anonAvatar from "../../assets/images/avatar.jpg";
import AuthContext from "../../context/authProvider";
import {
    faArrowsLeftRight,
    faBath,
    faBed,
    faEllipsisVertical,
    faHeart,
    faHouse,
    faLayerGroup,
    faLocationDot,
    faMapLocationDot,
    faStar,
    faUser,
    faUserGroup,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as spaceService from "../../services/spaces";
import {createPortal} from "react-dom";
import useClickOutSide from "../../hooks/useClickOutSide";
import axios from "axios";
import {useSpace} from "../../context/space-context";
import Pagination from "./Pagination";

const PostSpace = () => {
    const {statusId} = useParams();
    const [spaces, setSpaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        console.log("🚀 ~ PostSpace ~ currentPage:", currentPage);
        const fetchingSpaces = async () => {
            const param = {
                status: statusId,
                limit: itemPerPage,
                page: currentPage,
            };
            const data = await spaceService.getSpace(param);
            setTotalPages(() => data?.data?.totalPages);
            setSpaces(() => data?.data?.listSpaces || []);
        };
        fetchingSpaces();
    }, [statusId, currentPage, itemPerPage]);

    const {auth} = useContext(AuthContext);
    const accessToken = auth.accessToken;
    const handleAcceptSpace = async (e, id) => {
        e.preventDefault();
        const param = {
            spaceId: id,
            limit: itemPerPage,
        };
        const data = await spaceService.acceptSpace(param, accessToken);
        if (data?.status === 200) {
            setSpaces((spaces) => spaces.filter((item) => item.id !== id));
        }
    };

    const handleDeniedSpace = async (e, id) => {
        e.preventDefault();
        const param = {
            spaceId: id,
        };
        const data = await spaceService.deniedSpace(param, accessToken);
        console.log(data);
        if (data?.status === 200) {
            console.log("if else statement");
            setSpaces((spaces) => spaces.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="relative">
            <h2 className="my-5 text-2xl font-bold">
                {statusId === "3"
                    ? "Quản lý bài đăng chờ"
                    : "Quản lý bài đăng đã duyệt"}
            </h2>
            <div className="flex flex-col gap-4">
                {spaces.length > 0 &&
                    spaces.map((item, index) => {
                        return (
                            <ItemSpace
                                space={item}
                                statusId={statusId}
                                handleAcceptClick={handleAcceptSpace}
                                handleDeniedClick={handleDeniedSpace}
                            ></ItemSpace>
                        );
                    })}
                <Pagination
                    itemsPerPage={itemPerPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

const ItemSpace = ({
                       space,
                       statusId,
                       handleAcceptClick,
                       handleDeniedClick,
                   }) => {

    const formatNumber = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            const formattedString = number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formattedString.replace(/\.00$/, '');
        }
    }

    return (
        <>
            <div className="flex rounded-2xl border border-b-[#E7ECF3] max-h-[300px]">
                <div className="flex-shrink-0">
                    <Link to={`/spaces/${space.id}`}>
                        <img
                            src={space?.images[0].imageUrl}
                            alt={space?.title}
                            className="h-full w-[400px] rounded-l-2xl object-cover"
                        />
                    </Link>
                </div>
                <div className="flex w-full flex-col gap-8 p-3">
                    <div className="">
                        <Link to={`/spaces/${space.id}`}>
                            <h2 className="text-xl text-primaryColor font-bold">
                                {space.categoryId.categoryName.replaceAll('"', "")}
                            </h2>
                        </Link>
                        <div className="flex items-center gap-2 text-black font-bold">
                            <FontAwesomeIcon icon={faUser}/>
                            <span>{space.ownerId.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-textBoldColor">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>
                            {[
                                space.address.replaceAll('"', ""),
                                space.district.replaceAll('"', ""),
                                space.province.replaceAll('"', ""),
                            ].join(", ")}
                          </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full ">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                                <FontAwesomeIcon icon={faHouse}/>
                                <span>{space.area} m^2</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                                <FontAwesomeIcon icon={faBed}/>
                                <span>
                                      {space.bathroomNumbers > 9
                                          ? space.bathroomNumbers
                                          : `0${space.bathroomNumbers}`}{" "}
                                    Phòng ngủ
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                                <FontAwesomeIcon icon={faBath}/>
                                <span>
                                      {space.bathroomNumbers > 9
                                          ? space.bathroomNumbers
                                          : `0${space.bathroomNumbers}`}{" "}
                                    Phòng Tắm
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                                <FontAwesomeIcon icon={faUsers}/>
                                <span>{space.peopleNumbers}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 self-end">
                            <Link
                                to={`/spaces/${space.id}`}
                                className="flex items-center gap-2 text-[#84878B]"
                            >
                                <span className="text-lg font-bold text-[#23262F]"> {
                                    formatNumber(space.price) + "VNĐ"
                                }
                                </span>
                                <span className="font-medium ">/ tháng</span>
                            </Link>

                            {statusId === "3" && (
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={(e) => handleDeniedClick(e, space.id)}
                                        className="py-2 rounded-md bg-red-500 px-5 font-medium text-white"
                                    >
                                        Từ chối
                                    </button>
                                    <button
                                        onClick={(e) => handleAcceptClick(e, space.id)}
                                        className="py-2 rounded-md bg-primaryColor px-5 font-medium text-white"
                                    >
                                        Chấp nhận
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostSpace;
