import {
  faBars,
  faBell,
  faClock,
  faSquareCheck,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as spaceService from "../../services/spaces";

const SidebarAdminClone = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    const fetchingSpaces = async () => {
      let param = {
        status: 3,
      };
      const data = await spaceService.getSpace(param);

      setSpaces(() => data?.data?.listSpaces || []);
      if (data && data?.totalPages > 1 && data?.totalPages !== 1) {
        param = {
          page: data.totalPages,
        };
        const dataContinue = await spaceService.getSpace(param);
        setSpaces((space) => [
          ...space,
          ...(dataContinue?.data?.listSpaces || []),
        ]);
      }
    };
    fetchingSpaces();
  }, []);

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
      <div className="flex flex-col items-center w-full gap-8 px-0 mx-auto md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
        <button
          className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
          type="button"
          onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Brand */}
        <Link
          className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase text-blueGray-600 whitespace-nowrap md:block md:pb-2"
          to="/"
        >
          <img
            src="/logoTransparent.png"
            alt=""
            className="h-[38px] w-[107px] scale-150 object-cover"
          />
        </Link>
        <ul className="flex flex-col w-full">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl px-3 py-3 font-medium ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon className="text-xl" icon={faBars} />
              Bảng điều khiển
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/user"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl font-medium px-3 py-3  ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon className="text-xl" icon={faUser} />
              Người dùng
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/owner"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl font-medium px-3 py-3  ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon className="text-xl" icon={faUserTie} />
              Chủ phòng
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/notification"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl font-medium px-3 py-3  ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon className="text-xl" icon={faBell} />
              Thông báo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/posts-space/3"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl font-medium px-3 py-3  ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <div className="relative">
                <FontAwesomeIcon className="text-xl" icon={faClock} />
                {spaces.length > 0 && (
                  <div className="absolute top-0 left-0 flex items-center justify-center w-3 h-3 translate-x-2 bg-red-500 rounded-full">
                    <span className="text-[8px] text-white">
                      {spaces.length}
                    </span>
                  </div>
                )}
              </div>
              Không gian chờ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/posts-space/0"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl font-medium px-3 py-3  ${
                  isActive
                    ? "bg-primaryColor text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon className="text-xl" icon={faSquareCheck} />
              Không gian đã duyệt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarAdminClone;
