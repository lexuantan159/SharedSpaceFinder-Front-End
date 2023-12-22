import React from "react";
import InputReadOnly from "../../components/inputform/InputReadOnly1"
import * as userService from "../../services/user"
import {useContext, useState} from "react";
import MethodContext from "../../context/methodProvider"

const ProffileEdit = ({setIsEdit,dataEdit}) => {
    const [fullName, setFullName] = useState(dataEdit?.name || "")
    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);

    const [phone, setPhone] = useState(dataEdit?.phone || "")
    const [dateOfBirth, setdateOfBirth] = useState(dataEdit?.dateOfBirth || "")
    const [address, setAddress] = useState(dataEdit?.address || "")
    const formData = new FormData();
    const [isLoading, setIsLoading] = useState(false)
    const [avartar, setAvartar] = useState(null);

    const handleFileChange = (e) => {
      const selectedAvartar = e.target.files[0];
      setAvartar(selectedAvartar);
    };
   
     const handleSubmit = async (e) => {


      e.preventDefault();

        formData.append("fullName", fullName);
        formData.append("phone", phone);
        formData.append("address", address);
        // formData.append("dateOfBirth", dateOfBirth);
          formData.append('avartar', avartar);
        let accessToken = JSON.parse(localStorage.getItem("auth")).accessToken;
        
        setIsLoading(true);
        const id = toastLoadingId("Vui lòng chờ...")

         
        const responseUpdateProfile = await userService.editProfile(formData,accessToken);
        if (responseUpdateProfile?.status === 200)
        toastUpdateLoadingId("Cập Nhật Thành công,", "success", id);
    else
        toastUpdateLoadingId("Gửi yêu thất bại!", "error", id);
    setIsLoading(false);

}

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 backdrop-brightness-75"
      onClick={(e) => {
        e.stopPropagation();    
        setIsEdit(false);
      }}
    >
      <div
        className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-[850px] max-h-[500px] overflow-y-auto bg-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
       <div className='flex h-full flex-col items-center px-6'>
       <h1 className="text-3x1 w-full border-b border-gray-200 py-4 text-start font-medium text-primaryColor">
                {" "}
                Chỉnh sửa Thông Tin Cá Nhân
            </h1>
            <form action=""  onSubmit={(e) => {
                    handleSubmit(e)
                }}
                className="flex w-3/5 flex-auto items-center justify-center"
            >
                <div className="flex w-full flex-col gap-4 py-6">
                <InputReadOnly
            value={`#${dataEdit?.id}` || ""}
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <InputReadOnly
            value={dataEdit?.email || ""}
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
              value={phone}
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
              type="date"
              id="inputdate"
              className="flex-auto rounded-md border border-gray-300 p-2 outline-none"
              value={dateOfBirth}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            
          </div>
          <div className=" mt-3 mb-6 flex">
            <label className="w-[192px] flex-none font-medium" htmlFor="anh">
              Chọn Ảnh Đại Diện
            </label>
            <input
            className="appearance-none"
            type="file"
            id="avatar"
            // accept=".png, .jpg, .jpeg"
            
            onChange={(e) => handleFileChange(e)}
            />

            
          </div>
          
                <button className="w-full rounded-md bg-green-600 px-2 py-2 text-white hover:underline"
                     
                    
                    >
                        Cập Nhật
                    </button>
                    



                </div>
                
            </form>

       </div>





       
      </div>

    </div>
  )
}

export default ProffileEdit