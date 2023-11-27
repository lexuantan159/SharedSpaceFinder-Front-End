import React from "react";
import anonAvatar from "../../assets/images/avatar.jpg";
import validate from "../../components/inputform/ValidateFields";
import InputReadOnly from "../../components/inputform/InputReadOnly1"
import InputFormV3 from "../../components/inputform/InputFormV3";

import * as userService from "../../services/user"
import AuthContext from "../../context/authProvider";
import {useEffect, useContext, useState} from "react";


const Editprofile = () => {

    const {auth, setAuth} = useContext(AuthContext);
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState(auth?.avatar);

    // const [payload, setpayload] = useState({
    //     name: auth?.name || '',
    //     phone: '',
    //     dateOfBirth: '',
    //     address: auth?.address || '',
    //     avatar: auth?.avatar,
    // });


    const [user, setUser] = useState("");
    useEffect(() => {
        const getUser = async () => {
            if (auth.accessToken === undefined) {
                const myDataString = localStorage.getItem("auth");
                if (myDataString !== null) {
                    const myDataObject = JSON.parse(myDataString);
                    setAuth(myDataObject);
                }
            }
            // Only retrieve the access token if it's not already defined in auth.
            const accessToken =
                auth.accessToken || JSON.parse(localStorage.getItem("access-token")).accessToken;
           
            try {
                const user = await userService.getcurrentuser(accessToken);

                if (user?.status === 200) {
                    setUser(user.data);
                } else {
                    console.log(user);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        getUser();
    }, [auth.accessToken, setAuth]);

    const handleSubmit = async () => {
        let accessToken = JSON.parse(localStorage.getItem("auth")).accessToken;
        // const accessToken =
        //         auth.accessToken || JSON.parse(localStorage.getItem("access-token")).accessToken;
        // const accessToken = auth.accessToken;
         const payLoad = 
          {
            fullname: name,
            phone: phone,
            dateOfBirth: dateOfBirth,
            address: address
          }
         console.log(payLoad)
          const responseUpdateProfile = await userService.editProfile(payLoad,accessToken);
          console.log(responseUpdateProfile);
    }


    return (
        <div className="flex h-full flex-col items-center">
            <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                {" "}
                Chỉnh sửa Thông Tin Cá Nhân
            </h1>
            <div className="flex w-3/5 flex-auto items-center justify-center">
                <div className="flex w-full flex-col gap-4 py-6">
                <InputReadOnly
            value={`#${user?.id}` || ""}
            direction="flex-row"
            label="Mã Thành Viên"
          />
          <div className="flex">
            <label
              className="w-[192px] flex-none font-medium"
              htmlFor="fullname"
            >
              Tên Hiển Thị
            </label>
            <input
              type="name"
              id="fullname"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={name || user?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <InputReadOnly
            value={user?.email || ""}
            direction="flex-row"
            label="Email"
          />
          <div className="flex">
            <label
              className="w-[192px] flex-none font-medium"
              htmlFor="inputPhone"
            >
              Số Điện Thoại
            </label>
            <input
              type="text"
              id="inputPhone"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={phone || user?.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex">
            <label
              className="w-[192px] flex-none font-medium"
              htmlFor="inputdate"
            >
              Ngày Sinh
            </label>
            <input
              type="text"
              id="inputdate"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={dateOfBirth || user?.dateOfBirth}
              onChange={(e) => setdateOfBirth(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="w-[192px] flex-none font-medium" htmlFor="diachi">
              Địa chỉ
            </label>
            <input
              type="text"
              id="diachi"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={address || user?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-6 flex">
            <label className="w-48 flex-none font-medium" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={user?.avatar || anonAvatar}
                alt="avatar"
                className="h-28 w-28 rounded-full object-cover"
              />
              <input type="file" className="my-4 appearance-none" id="avatar" />
            </div>
          </div>
                    {/* <InputReadOnly
                        value={`#${user?.id}` || ""}
                        direction="flex-row"
                        label="Mã Thành Viên"
                    />
                    
                    <InputReadOnly
                        value={user?.email || ""}
                        direction="flex-row"
                        label="Email"
                    />
                    <InputFormV3
                        name="dateOfBirth"
                        setValue={setpayload}
                        setInvalidFields={setInvalidFields}
                        invaLidFields={invalidFields}
                        direction="flew-row"
                        value={payload.dateOfBirth || user?.dateOfBirth}
                        label="Ngày sinh"
                    />
                    <InputFormV3
                        name="address"
                        setValue={setpayload}
                        setInvalidFields={setInvalidFields}
                        invaLidFields={invalidFields}
                        direction="flew-row"
                        value={payload.address}
                        label="Địa chỉ"
                    />
 */}

                    {/* <div className="flex" >
                <label className='font-medium w-[192px] flex-none' htmlFor="fullname">Tên Hiển Thị</label>
                <input
                type='name'
                id='fullname'
                className='outline-none border border-gray-300 rounded-md p-2 flex-auto'
                
                value={name} 
                onChange={(e) => setName(e.target.value)}

                />
            </div> */}

                    {/* <div className="mb-6 flex">
                        <label className="w-48 flex-none font-medium" htmlFor="avatar">
                            Ảnh đại diện
                        </label>
                        <div>
                            <img
                                src={user?.avatar || anonAvatar}
                                alt="avatar"
                                className="h-28 w-28 rounded-full object-cover"
                            />
                            <input type="file" className="my-4 appearance-none" id="avatar"/>
                        </div>
                    </div> */}


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
