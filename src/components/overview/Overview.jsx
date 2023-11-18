import React from "react";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import InputFormV1 from "../../components/inputform/InputFormV1";
import * as userService from "../../services/user"
import AuthContext from "../../context/authProvider";
import {useEffect, useContext,useState} from "react";
const Overview = ({ payload, setPayload, invalidFields, setInvalidFields }) => {


  const {auth} = useContext(AuthContext);
  const [user, setUser] = useState({});
  useEffect(() => {
      const getuser = async () => {
          try {
              const user = await userService.getcurrentuser(auth.accessToken);
              setUser(user.data)
              // console.log(user);

          } catch (error) {
              console.log("Error ", error);
          }
      }
      getuser();
  }, [])

  const categories = [
    { id: 1, name: "Phòng Trọ" },
    { id: 2, name: "Văn Phòng" },
    { id: 3, name: "Nhà Ở" },
    { id: 4, name: "Mặt Bằng" },
    { id: 5, name: "Căn Hộ" },
  ];
  const [categoryId, setCategoryID] = useState("");
  return (
    <div>
      <h2 className="py-4 text-xl font-semibold text-primaryColor">
        Thông Tin Mô Tả
      </h2>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-1/2 flex-1 flex-col gap-2">
          <SelectAddress
            type="category"
            value={categoryId}
            setValue={setCategoryID}
            options={categories}
            label="Loại Không Gian"
          />
        </div>
        <InputFormV1
          value={payload.title}
          setValue={setPayload}
          name="title"
          label="Tiêu đề"
          setInvalidFields={setInvalidFields}
          invaLidFields={invalidFields}
        />
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="desc">
            Nội dung mô tả
          </label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            className="w-full rounded-md border border-gray-300 p-2 outline-none"
            value={payload.description}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, description: e.target.value }))
            }
            onFocus={() => setInvalidFields([])}
          ></textarea>
          <small className="block w-full text-red-500">
            {invalidFields?.some((item) => (item.name == "description")) &&
              invalidFields?.find((item) => (item.name == "description"))
                ?.message}
          </small>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-1/2 flex-col gap-2">
            <label className="font-medium">Tên Hiển Thị</label>
            <input
              type="text"
              readOnly
              className="rounded-md border border-gray-200 bg-gray-100 p-2 outline-none"
              value={user?.name} 
            />
            <label className="font-medium">Số Điện Thoại</label>
            <input
              type="text"
              readOnly
              className="rounded-md border border-gray-200 bg-gray-100 p-2 outline-none"
              value={user?.phone}
            />
            <InputFormV1
              value={payload.price}
              setValue={setPayload}
              name="price"
              small="Nhập đầy đủ số, ví dụ 1 triệu thì nhập: 1000000"
              label="Giá Cho Thuê"
              unit="VND/Tháng"
              setInvalidFields={setInvalidFields}
              invaLidFields={invalidFields}
            />
            <InputFormV1
              value={payload.area}
              setValue={setPayload}
              name="area"
              label="Diện Tích"
              unit="m2"
              setInvalidFields={setInvalidFields}
              invaLidFields={invalidFields}
            />
            <InputFormV1
              value={payload.people_numbers}
              setValue={setPayload}
              name="people_numbers"
              label="Số Người"
              setInvalidFields={setInvalidFields}
              invaLidFields={invalidFields}
            />
            <InputFormV1
              value={payload.bedroom_numbers}
              setValue={setPayload}
              name="bedroom_numbers"
              label="Phòng Ngủ"
              setInvalidFields={setInvalidFields}
              invaLidFields={invalidFields}
            />
            <InputFormV1
              value={payload.bathroom_numbers}
              setValue={setPayload}
              name="bathroom_numbers"
              label="Phòng Tắm"
              setInvalidFields={setInvalidFields}
              invaLidFields={invalidFields}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
