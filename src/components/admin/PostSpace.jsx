import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anonAvatar from "../../assets/images/avatar.jpg";
import {
  faArrowsLeftRight,
  faBath,
  faBed,
  faEllipsisVertical,
  faHeart,
  faLayerGroup,
  faMapLocationDot,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as spaceService from "../../services/spaces";
import { createPortal } from "react-dom";
import useClickOutSide from "../../hooks/useClickOutSide";

const PostSpace = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const { statusId } = useParams();
  const [spaces, setSpaces] = useState([]);
  const { show, nodeRef, setShow } = useClickOutSide(".iconUpdate");
  const [coord, setCoord] = useState({});
  const [space, setSpace] = useState();
  useEffect(() => {
    const fetchingSpaces = async () => {
      const param = {
        status: statusId,
        limit: 3,
      };
      const data = await spaceService.getSpace(param);
      setSpaces(() => data?.data?.listSpaces || []);
      console.log(spaces);
    };
    fetchingSpaces();
  }, [statusId]);
  const handleClickUpdateStatus = (e, item) => {
    e.preventDefault();
    console.log(e.target.getBoundingClientRect());
    setCoord(e.target.getBoundingClientRect());
    setShow(true);
    setSpace(item);
  };

  return (
    <div className="relative">
      {spaces.length > 0 &&
        spaces.map((item, index) => {
          return (
            <Link to={`/spaces/${item.id}`} key={index}>
              <div className="gap-4 border-b border-orange-600 py-8 ">
                <div className="flex-center flex h-full w-full translate-y-0 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-[228px] w-2/5 ">
                    <img
                      className="h-full w-full object-cover"
                      src={item.images.length > 0 && item.images[0].imageUrl}
                      alt="anh phong"
                    />
                    <p className="absolute left-3 top-3 bg-primaryColor px-4 py-[1px] text-xs font-semibold uppercase text-white">
                      Top rate
                    </p>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white">
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
                      <h4 className="text-xm font-bold text-textBoldColor ">
                        {item.ownerId.name}
                      </h4>
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-xm font-bold text-green-600 text-textBoldColor">
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
                        <span className="text-BoldColor ml-3 ">
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
                        className="iconUpdate px-4 py-1 hover:bg-blue-700 hover:text-white"
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      {statusId == 3 && show && (
        <DropdownUpdate space={space} coord={coord}></DropdownUpdate>
      )}
    </div>
  );
};

const allowedSpace = {
  id: 1,
  status: "Đã Thuê",
};

function DropdownUpdate({ space, coord }) {
  console.log(space);
  space = { ...space, status: allowedSpace };
  console.log(JSON.stringify(space));
  return createPortal(
    <div
      className="absolute z-50 -translate-x-full border bg-white px-5 py-2"
      style={{ top: coord.bottom, left: coord.left + coord.width }}
    >
      <button>Allow</button>
    </div>,
    document.body,
  );
}

export default PostSpace;
