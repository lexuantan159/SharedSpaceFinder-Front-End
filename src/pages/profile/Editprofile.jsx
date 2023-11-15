import React, { useState } from "react";
import InputFormV2 from "../../components/inputform/InputFormV2";
import anonAvatar from "../../assets/images/avatar.jpg";
import Button from "../../components/button/Button";
import validate from "../../components/inputform/ValidateFields";
// import InputFormV1 from "../../components/inputform/InputFormV1";

///api/users/edit-profile/
const Editprofile = () => {
  const [payload, setpayload] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    address: "",
    avatar: "",
  });

  const [invalidFields, setInvalidFields] = useState([]);
  const handleSubmit =  () => {
    // const invalidcounter = validate (payload,setInvalidFields)
    // console.log(invalidcounter);
    console.log(payload);
    }
  // console.log(payload);
  // const handleUploadFile = (e) => {
  //     const image = e.target.files[0]
  //  }
  return (
    <div className="flex h-full flex-col items-center">
      <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
        {" "}
        Chỉnh sửa Thông Tin Cá Nhân
      </h1>
      <div className="flex w-3/5 flex-auto items-center justify-center">
        <div className="flex w-full flex-col gap-4 py-6">
          <InputFormV2
            name="name"
            setValue={setpayload}
            setInvalidFields={setInvalidFields}
            invaLidFields={invalidFields}
            direction="flew-row"
            value={payload.name}
            label="Tên Hiển Thị"
          />
          <InputFormV2
            name="email"
            setValue={setpayload}
            setInvalidFields={setInvalidFields}
            invaLidFields={invalidFields}
            direction="flew-row"
            value={payload.email}
            label="Email"
          />
          <InputFormV2
            name="phone"
            setValue={setpayload}
            setInvalidFields={setInvalidFields}
            invaLidFields={invalidFields}
            direction="flew-row"
            value={payload.phone}
            label="Số Điện Thoại"
          />
          <InputFormV2
            name="date_of_birth"
            setValue={setpayload}
            setInvalidFields={setInvalidFields}
            invaLidFields={invalidFields}
            direction="flew-row"
            value={payload.date_of_birth}
            label="Ngày Sinh"
          />
          <InputFormV2
            name="address"
            setValue={setpayload}
            setInvalidFields={setInvalidFields}
            invaLidFields={invalidFields}
            direction="flew-row mb-5"
            value={payload.address}
            label="Địa Chỉ"
          />
          <div className="mb-6 flex">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={payload.avatar || anonAvatar}
                alt="avatar"
                className="h-28 w-28 rounded-full object-cover"
              />
              <input type="file" className="my-4 appearance-none" id="avatar" />
            </div>
          </div>
          <button className="w-full rounded-md bg-green-600 px-2 py-2 text-white hover:underline" 
           onClick={handleSubmit}
         
          >
            Tiếp Tục
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
