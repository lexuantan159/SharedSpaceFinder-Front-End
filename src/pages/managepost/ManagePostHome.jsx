import React from "react";
import anonAvatar from '../../assets/images/avatar.jpg'
import {Link} from "react-router-dom";
const ManagePostHome = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3x1 text-primaryColor font-semibold">Quản Lý Tin Đăng</h1>
        <div className="">
        <input
            type="text"
            className="px-2 py-1 mx-4 border border-gray-200 outline-none rounded-md bg-gray-100 "
            placeholder="Tìm Kiếm"
          />
          <Link to="/post-spaces" >
          <button className="px-3 py-2 text-white bg-red-600 rounded-md hover:underline">
                Đăng tin mới
              </button>
          </Link>
        </div>
      </div>


      <table class="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="border flex-1 p-2 text-primaryColor ">ID</th>
            <th className="border flex-1 p-2 text-primaryColor ">Hình ảnh</th>
            <th className="border flex-1 p-2 text-primaryColor ">Tiêu đề</th>
            <th className="border flex-1 p-2 text-primaryColor ">Danh Mục</th>
            <th className="border flex-1 p-2 text-primaryColor ">Ngày Đăng</th>
            <th className="border flex-1 p-2 text-primaryColor ">Giá</th>
            <th className="border flex-1 p-2 text-primaryColor ">Trạng Thái</th>
            <th className="border flex-1 p-2 text-primaryColor ">Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex items-center h-16">
            <td className="border px-2 flex-1 h-full flex justify-center items-center">1</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">
            <img src={anonAvatar} alt="avatar" className='w-10 h-10 object-cover rounded-md'/>
            </td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Cho Thuê Văn Phòng</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Văn Phòng</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">10/10/2023</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">100000</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Đang hoạt động</td>
            <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Xóa
              </button>
            </td>
          </tr>
          <tr className="flex items-center h-16">
            <td className="border px-2 flex-1 h-full flex justify-center items-center">2</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">
            <img src={anonAvatar} alt="avatar" className='w-10 h-10 object-cover rounded-md'/>
            </td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Cho Thuê Văn Phòng</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Văn Phòng</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">10/10/2023</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">100000</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Đang hoạt động</td>
            <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Xóa
              </button>
            </td>
          </tr>

          {/* <tr className="flex items-center h-16">
            <td className="border px-2 flex-1 h-full flex justify-center items-center">3</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">
            <img src={anonAvatar} alt="avatar" className='w-10 h-10 object-cover rounded-md'/>
            </td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Văn Phòng</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">10/10/2023</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">100000</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">ok</td>
            <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Xóa
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>


      
    </div>
  );
};

export default ManagePostHome;
