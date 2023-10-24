import React from "react";
import AddressPost from "./AddressPost";
import Overview from "./Overview";
import { HiOutlineCamera } from "react-icons/hi";
import MapBox from "../../components/map/MapBox";

const PostSpaceHome = () => {
  return (
    <div className="px-6">
      <h1 className="text-3x1 text-primaryColor text-xl font-medium py-4 border-b border-gray-200">
        {" "}
        Đăng Tin Cho Thuê
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col gap-8 flex-auto">
          <AddressPost />
          <Overview />
          <div className="w-full mg-6">
            <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng </small>
            <div className="w-full">
              <label
                className="w-full border h-[200px] my-4 gap-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-md"
                htmlFor="file"
              >
                <HiOutlineCamera size={50} />
                Thêm ảnh
              </label>
              <input hidden type="file" id="file" />
            </div>
          </div>

          <button className="w-full px-2 py-2 text-white bg-green-600 rounded-md hover:underline">
            Tiếp Tục
          </button>
        </div>

        <div className="w-[30%] flex-none">
          <div className="py-10 h-[350px]">
            <MapBox />
          </div>
          <div className="w-full bg-[#fff3cd]">
            <h2 className="text-[#856404] text-xl p-2">Lưu ý Khi đăng tin</h2>
            <ul className="p-4 text-[#856404] ml-5">
              <li>* Nội dung phải viết bằng tiếng Việt có dấu</li>
              <li>*Tiêu đề tin không dài quá 100 kí tự</li>
              <li>
                *Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có
                hiệu quả hơn.
              </li>
              <li>
                *Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn,
                hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon
                tới đúng vị trí của tin rao.
              </li>
              <li>
                *Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần
                so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch
                nhanh chóng!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSpaceHome;
