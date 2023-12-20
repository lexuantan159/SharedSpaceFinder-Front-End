import React from "react";
import anonAvatar from "../../assets/images/avatar.jpg";
import InputReadOnly from "../../components/inputform/InputReadOnly1"
import * as userService from "../../services/user"
import AuthContext from "../../context/authProvider";
import {useEffect, useContext, useState} from "react";
import ProffileEdit from "./ProffileEdit";
import ChangePassword from "../../components/changepassword/ChangePassword";

const Editprofile = () => {

    const {auth, setAuth} = useContext(AuthContext);
    // const [fullName, setFullName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [dateOfBirth, setdateOfBirth] = useState("");
    // const [address, setAddress] = useState("");
    const formData = new FormData();
    const [IsEdit, setIsEdit] = useState(false) 
    const [dataEdit, setDataEdit] = useState({}) 
    const [editPass, setEditPass] = useState(false) 



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
                console.log(user)
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
    }, [auth.accessToken, setAuth , IsEdit]);

    // const handleSubmit = async (e) => {


    //   e.preventDefault();
    //     let accessToken = JSON.parse(localStorage.getItem("auth")).accessToken;
    //     formData.append("fullName", fullName);

         
         
    //       const responseUpdateProfile = await userService.editProfile(formData,accessToken);
    //       console.log(responseUpdateProfile);
    // }


    return (
        <div className="flex h-full flex-col items-center">
            <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                {" "}
                 Thông Tin Cá Nhân
            </h1>
            <form action=""  onSubmit={(e) => {
                    handleSubmit(e)
                }}
                className="flex w-3/5 flex-auto items-center justify-center"
            >
              <div className="flex w-full flex-col gap-4 py-6">
              <InputReadOnly
            value={`#${user?.id}` || ""}
            direction="flex-row"
            label="Mã Thành Viên"
          />
                        <InputReadOnly
            value={user?.email}
            direction="flex-row"
            label="Email"
          />
        
          <InputReadOnly
            value={user?.name}
            direction="flex-row"
            label="Tên Thành Viên"
          />
             <div className="mt-2 mb-2 flex">
            <label className="w-[192px] flex-none font-medium">
              Mật Khẩu
            </label>
            <div >
             <small className="text-primaryColor hover:underline font-medium"
                onClick={(e) => {
                  setDataEdit(user)
                  setEditPass(true)
                 } 
                }   
              >Đổi Mật Khẩu</small>
            </div>
          </div>
          <InputReadOnly
            value={user?.phone}
            direction="flex-row"
            label="Số Điện Thoại"
          />
          <InputReadOnly
            value={user?.dateOfBirth}
            direction="flex-row"
            label="Ngày Sinh"
          />
          <InputReadOnly
            value={user?.address}
            direction="flex-row"
            label="Địa chỉ"
          />
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
            </div>
          </div>
            </div>
            </form>
            <button className="w-3/5 rounded-md bg-green-600 px-2 py-2 text-white hover:underline"
                     onClick={(e) => {
                      setDataEdit(user)
                      setIsEdit(true)
                     } 
                    }   
                    >
                        Cập Nhật Thông Tin
                    </button>
          {IsEdit && <ProffileEdit setIsEdit={setIsEdit} dataEdit={dataEdit}/> }
          {editPass && <ChangePassword setEditPass={setEditPass} dataEdit={dataEdit}/> }

        </div>
    );
};

export default Editprofile;
