import React, { useState } from "react";

import { HiOutlineCamera } from "react-icons/hi";
import MapBox from "../../components/map/MapBox";
import AddressPost from "../../components/addresspost/AddressPost";
import Overview from "../../components/overview/Overview";
import validate from "../../components/inputform/ValidateFields";

const PostSpaceHome = () => {
  const [payload, setPayload] = useState({
    category_id: "",
    title: "",
    description: "",
    price: "",
    area: "",
    people_numbers: 0,
    bathroom_numbers: 0,
    bedroom_numbers: 0,
    address: "",
    image: "",
  });

  const [invalidFields, setInvalidFields] = useState([]);

  const handleSubmit = async () => {
    console.log(payload);
    const result = validate(payload, setInvalidFields);
    console.log(result);
  };
  return (
    <div className="px-6">
      <h1 className="text-3x1 border-b border-gray-200 py-4 text-xl font-medium text-primaryColor">
        {" "}
        Đăng Tin Cho Thuê
      </h1>
      <div className="flex gap-4">
        <div className="flex flex-auto flex-col gap-8 py-4">
          <AddressPost />
          <Overview
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            payload={payload}
            setPayload={setPayload}
          />
          <div className="mg-6 w-full">
            <h2 className="py-4 text-xl font-semibold">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng </small>
            <div className="w-full">
              <label
                className="my-4 flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-md border border-2 border-dashed border-gray-300"
                htmlFor="file"
              >
                <HiOutlineCamera size={50} />
                Thêm ảnh
              </label>
              <input hidden type="file" id="file" multiple />
            </div>
          </div>

          <button
            className="w-full rounded-md bg-green-600 px-2 py-2 text-white hover:underline"
            onClick={handleSubmit}
          >
            Tiếp Tục
          </button>
        </div>

        <div className="h-full w-[30%] flex-none">
          <div className="py-10 lg:h-full ">
            <MapBox />
          </div>
          <div className="bg-[#fff3cd]">
            <h2 className="p-2 text-xl text-[#856404]">Lưu ý Khi đăng tin</h2>
            <ul className="ml-5 text-[#856404]">
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
