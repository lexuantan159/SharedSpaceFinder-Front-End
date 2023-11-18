import React, { memo, useState } from "react";
import anonAvatar from "../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { Link } from "react-router-dom";

const ItemFavoriteSpace = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  return (
    <Link to="/spaces/:spaceId">
      <div className="gap-4 py-8 border-b border-orange-600 ">
        <div className="w-full flex h-full flex-center hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2">
          <div className="w-2/5 h-[228px] relative ">
            <img
              className="w-full h-full object-cover"
              src="https://afamilycdn.com/thumb_w/710/2017/photo-2-1507000784259.jpg"
              alt="anh phong"
            />
            <p className="absolute top-3 left-3 uppercase bg-primaryColor text-white text-xs font-semibold px-4 py-[1px]">
              Top rate
            </p>
            <div className=" absolute bottom-3 left-3 right-3 flex justify-between text-white">
              <div className="font-bold">
                <FontAwesomeIcon className="pr-3" icon={faLayerGroup} />
                <span>04 Ảnh</span>
              </div>
              <div className="font-bold">
                <span
                  onMouseEnter={() => setIsHoverHeart(true)}
                  onMouseLeave={() => setIsHoverHeart(false)}
                >
                  Saved
                  {isHoverHeart ? (
                    <FontAwesomeIcon
                      className="mx-1"
                      icon={faHeart}
                      
                    />
                  ) : (
                    <FontAwesomeIcon color="red" className="mx-1" icon={faHeart} />
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="w-4/5">
            <div className="px-3">
              <p className="text-xl text-green-600 font-semibold">Phòng Trọ</p>
              <h4 className="text-xm font-bold text-textBoldColor ">
                Tên Owner
              </h4>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xm font-bold text-green-600 text-textBoldColor">
                  1.450.000{" "}
                  <span className="text-[#d4d4d4] font-thin">/ tháng</span>
                </p>
                <img
                  src={anonAvatar}
                  alt="avatar"
                  className="w-[40px] h-[40px] rounded-full mx-3"
                />
              </div>

              <div className="mb-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#d4d4d4" }} />
                <span className="ml-3 text-BoldColor ">12 đánh giá</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[#8a8d91] text-sm">
                <div className="text-left ">
                  <FontAwesomeIcon
                    className="-rotate-45"
                    icon={faArrowsLeftRight}
                    style={{ color: "#8a8d91" }}
                  />
                  <span className="ml-3">120 m^2</span>
                </div>
                <div className="text-right ">
                  <FontAwesomeIcon icon={faBed} style={{ color: "#8a8d91" }} />
                  <span className="ml-3">02 Phòng ngủ</span>
                </div>
                <div className="text-left ">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    style={{ color: "#8a8d91" }}
                  />
                  <span className="ml-3">04 Người</span>
                </div>
                <div className="text-right ">
                  <FontAwesomeIcon icon={faBath} style={{ color: "#8a8d91" }} />
                  <span className="ml-3">01 Phòng Tắm</span>
                </div>
              </div>
            </div>
            <div className="flex py-3 items-center justify-between text-textBoldColor bg-[#fafafa] rounded-b-xl px-3 py-2">
              <div>
                <FontAwesomeIcon icon={faMapLocationDot} />
                <span className="mx-3">18 Tô Hiệu, Liên Chiểu, Đà Nẵng</span>
              </div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ItemFavoriteSpace);
