import React from 'react'
import * as userService from "../../services/user"
import {useContext, useState} from "react";
import MethodContext from "../../context/methodProvider"
import AuthContext from "../../context/authProvider";



const ChangePassword = ({setEditPass,dataEdit}) => {
  
    const [oldpassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const {auth, setAuth} = useContext(AuthContext);

    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const formData = new FormData();
    const [isLoading, setIsLoading] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = auth.accessToken || JSON.parse(localStorage.getItem("access-token")).accessToken;

        formData.append('oldpassword', oldpassword);
        formData.append('newPassword', newPassword);
        if (newPassword !== confirmNewPassword)
        { notify("Mật Khẩu KHông Trùng Nhau", "error")
     }
        setIsLoading(true);
        const id = toastLoadingId("Vui lòng chờ...")
        const responseUpdateProfile = await userService.editProfile(formData,accessToken);
        if (responseUpdateProfile?.status === 200)
        toastUpdateLoadingId("Cập Nhật Thành công,", "success", id);
    else
        toastUpdateLoadingId("Gửi yêu thất bại!", "error", id);
    setIsLoading(false);
    
       
      };


      
  return (
    <div
    className="fixed bottom-0 left-0 right-0 top-0 backdrop-brightness-75"
    onClick={(e) => {
      e.stopPropagation();    
      setEditPass(false);
    }}
  >
    <div
        className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-[700px] max-h-[500px] overflow-y-auto bg-white"
        onClick={(e) => {
        e.stopPropagation();
      }}
    >
     <div className='flex h-full flex-col items-center px-6'>
       <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                {" "}
                Thay đổi Mật Khẩu
            </h1>
            <form action=""  onSubmit={(e) => {
                    handleSubmit(e)
                }}
                className="flex w-3/5 flex-auto items-center justify-center"
            >
                <div className="flex w-full flex-col gap-4 py-6">
              
                <div className="flex">
                        <label
                        className="w-[192px] flex-none font-medium"
              htmlFor="oldpassword"
            >
              Mật Khẩu
            </label>
            <input
              type="text"
              placeholder=" Nhập Mật Khẩu"

              id="oldpassword"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={oldpassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
        
            <div className="flex">
            <label
              className="w-[192px] flex-none font-medium"
              htmlFor="newPassword"
            >
              Mật Khẩu Mới
            </label>
            <input
              type="text"
              placeholder=" Nhập Mật Khẩu Mới"
              id="newPassword"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex">
            <label
              className="w-[192px] flex-none font-medium"
              htmlFor="confirmNewPassword"
            >
              Nhập Lại Mật Khẩu Mới
            </label>
            <input
              type="text"
              id="confirmNewPassword"
              placeholder=" Nhập Lại Mật Khẩu Mới"

              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
                <button className="w-full rounded-md bg-green-600 px-2 py-2 text-white hover:underline"
                     
                    
                    >
                        Cập Nhật Mật Khẩu
                    </button>
                    



                </div>
                
            </form>

       </div>





     
    </div>

  </div>  )
}

export default ChangePassword;