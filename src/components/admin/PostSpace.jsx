import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as spaceService from "../../services/spaces";
import { createPortal } from "react-dom";
import useClickOutSide from "../../hooks/useClickOutSide";
import axios from "axios";

const PostSpace = () => {
  const { statusId } = useParams();
  console.log("🚀 ~ PostSpace ~ statusId:", typeof statusId);
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    const fetchingSpaces = async () => {
      const param = {
        status: statusId,
        limit: 3,
      };
      const data = await spaceService.getSpace(param);
      setSpaces(() => data?.data?.listSpaces || []);
    };
    fetchingSpaces();
  }, [statusId]);

  const { auth } = useContext(AuthContext);
  const accessToken = auth.accessToken;
  const handleAcceptSpace = async (e, id) => {
    e.preventDefault();
    const param = {
      spaceId: id,
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
          ? "Management Pending Space"
          : "Management Accepted Space"}
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
  return (
    <>
      <div
        className="flex rounded-2xl
border border-b-[#E7ECF3]"
      >
        <div className="flex-shrink-0">
          <Link to={`/spaces/${space.id}`}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-[400px]  rounded-l-2xl object-cover"
            />
          </Link>
        </div>
        <div className="flex w-full flex-col justify-between gap-8 p-5 ">
          <div className="flex flex-col gap-5">
            <Link to={`/spaces/${space.id}`}>
              <h2 className="text-4xl font-bold">
                {space.categoryId.categoryName.replaceAll('"', "")}
              </h2>
            </Link>
            <div className="flex items-center gap-2 text-[#84878B]">
              <FontAwesomeIcon icon={faUser} />
              <span>{space.ownerId.name}</span>
            </div>
            <div className="flex items-center gap-2 text-[#84878B]">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                {[
                  space.address.replaceAll('"', ""),
                  space.district.replaceAll('"', ""),
                  space.province.replaceAll('"', ""),
                ].join(", ")}
              </span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                <FontAwesomeIcon icon={faHouse} />
                <span>{space.area} m^2</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                <FontAwesomeIcon icon={faBed} />
                <span>
                  {space.bathroomNumbers > 9
                    ? space.bathroomNumbers
                    : `0${space.bathroomNumbers}`}{" "}
                  Phòng ngủ
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                <FontAwesomeIcon icon={faBath} />
                <span>
                  {space.bathroomNumbers > 9
                    ? space.bathroomNumbers
                    : `0${space.bathroomNumbers}`}{" "}
                  Phòng Tắm
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3B3E44]">
                <FontAwesomeIcon icon={faUsers} />
                <span>{space.peopleNumbers}</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 self-end">
              <Link
                to={`/spaces/${space.id}`}
                className="flex items-center gap-2 text-[#84878B]"
              >
                <span className="text-2xl font-bold text-[#23262F]">
                  ${space.price}
                </span>
                <span className="font-medium ">for month</span>
              </Link>

              {statusId === "3" && (
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleDeniedClick(e, space.id)}
                    className="h-[48px] rounded-md bg-[#FFA900] px-5 font-medium text-white"
                  >
                    Remove
                  </button>
                  <button
                    onClick={(e) => handleAcceptClick(e, space.id)}
                    className="h-[48px] rounded-md bg-[#796EFF] px-5 font-medium text-white"
                  >
                    Accept
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

/**
 * <Link to={`/spaces/${item.id}`} key={index}>
              <div className="gap-4 py-8 border-b border-orange-600 ">
                <div className="flex w-full h-full transition-all transform translate-y-0 flex-center hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-[228px] w-2/5 ">
                    <img
                      className="object-cover w-full h-full"
                      src={item.images.length > 0 && item.images[0].imageUrl}
                      alt="anh phong"
                    />
                    <p className="absolute left-3 top-3 bg-primaryColor px-4 py-[1px] text-xs font-semibold uppercase text-white">
                      Top rate
                    </p>
                    <div className="absolute flex justify-between text-white bottom-3 left-3 right-3">
                      <div className="font-bold">
                        <FontAwesomeIcon className="pr-3" icon={faLayerGroup} />
                        <span>
                          {item.images.length > 10
                            ? item.images.length
                            : `0${item.images.length}`}{" "}
                          Ảnh
                        </span>
                      </div>
                      <div className="font-bold">
                        <span
                          onMouseEnter={() => setIsHoverHeart(true)}
                          onMouseLeave={() => setIsHoverHeart(false)}
                        >
                          Saved
                          {isHoverHeart ? (
                            <FontAwesomeIcon className="mx-1" icon={faHeart} />
                          ) : (
                            <FontAwesomeIcon
                              color="red"
                              className="mx-1"
                              icon={faHeart}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-4/5">
                    <div className="px-3">
                      <p className="text-xl font-semibold text-green-600">
                        {item.categoryId.categoryName.replaceAll('"', "")}
                      </p>
                      <h4 className="font-bold text-xm text-textBoldColor ">
                        {item.ownerId.name}
                      </h4>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-green-600 text-xm text-textBoldColor">
                          {item.price}{" "}
                          <span className="font-thin text-[#d4d4d4]">
                            / tháng
                          </span>
                        </p>
                        <img
                          src={anonAvatar}
                          alt="avatar"
                          className="mx-3 h-[40px] w-[40px] rounded-full"
                        />
                      </div>

                      <div className="mb-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5ed00" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5ed00" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5ed00" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f5ed00" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#d4d4d4" }}
                        />
                        <span className="ml-3 text-BoldColor ">
                          12 đánh giá
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm text-[#8a8d91]">
                        <div className="text-left ">
                          <FontAwesomeIcon
                            className="-rotate-45"
                            icon={faArrowsLeftRight}
                            style={{ color: "#8a8d91" }}
                          />
                          <span className="ml-3">{item.area} m^2</span>
                        </div>
                        <div className="text-right ">
                          <FontAwesomeIcon
                            icon={faBed}
                            style={{ color: "#8a8d91" }}
                          />
                          <span className="ml-3">
                            {item.bathroomNumbers > 9
                              ? item.bathroomNumbers
                              : `0${item.bathroomNumbers}`}{" "}
                            Phòng ngủ
                          </span>
                        </div>
                        <div className="text-left ">
                          <FontAwesomeIcon
                            icon={faUserGroup}
                            style={{ color: "#8a8d91" }}
                          />
                          <span className="ml-3">{item.peopleNumbers}</span>
                        </div>
                        <div className="text-right ">
                          <FontAwesomeIcon
                            icon={faBath}
                            style={{ color: "#8a8d91" }}
                          />
                          <span className="ml-3">
                            {item.bathroomNumbers > 9
                              ? item.bathroomNumbers
                              : `0${item.bathroomNumbers}`}{" "}
                            Phòng Tắm
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-b-xl bg-[#fafafa] px-3 py-2  text-textBoldColor">
                      <div>
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <span className="mx-3">
                          {[
                            item.address.replaceAll('"', ""),
                            item.district.replaceAll('"', ""),
                            item.province.replaceAll('"', ""),
                          ].join(", ")}
                        </span>
                      </div>
                      <button
                        onClick={(e) => handleClickUpdateStatus(e, item)}
                        ref={nodeRef}
                        className="px-4 py-1 iconUpdate hover:bg-blue-700 hover:text-white"
                      >
                        <FontAwesomeIcon
                          className="pointer-events-none"
                          icon={faEllipsisVertical}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
 */

export default PostSpace;
