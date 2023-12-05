import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
// import EditSpace from "../editspace/EditSpace";
import * as spaceService from "../../services/spaces";
import AuthContext from "../../context/authProvider";
import Swal from "sweetalert2";


const ManagePostHome = () => {
  const [IsEdit, setIsEdit] = useState(false) 
  const {auth, setAuth} = useContext(AuthContext);
  
  const [spaces, setSpaces] = useState([]);
  const [deleteSpaces, setDeleteSpaces] = useState(false)
  
  

  

  useEffect(() => {
    const fetchSpace = async () => {
      const param = {
        ownerId: 21,

      };
      const responseSpaces = await spaceService.getSpace(param);

      if (responseSpaces?.status === 200) {
        const listSpace = responseSpaces?.data?.listSpaces;
        console.log(listSpace)
        setSpaces(listSpace);
      } else {
        console.log(responseSpaces);
      }
    };
    fetchSpace();
  }, [deleteSpaces]);


  const handleDeleteSpace = async (e) => {
    
   const accessToken = auth.accessToken
    console.log(accessToken)
    const responseDeleteSpace = await spaceService.deleteSpace(e,accessToken)
  //   if(responseDeleteSpace?.status === 200) {
  //     setDeleteSpaces(true)
  //     notify("Xóa bài viết thành công!", "error")
  //   }
  //   else {
  //     console.log(responseDeleteSpace)
  //     notify("Xóa bài viết thất bại!", "error")
  // }
  if(responseDeleteSpace?.status === 200) {
        
        Swal.fire("Xóa bài viết thành công!").then(() =>{
          setDeleteSpaces(true)
        })
      }
      else {
        console.log(responseDeleteSpace)
        Swal.fire("Xóa bài viết không thành công!", "error")
    }
  }


  const formatNumber = (number) => {
    if (typeof number === 'number' && !isNaN(number)) {
        const formattedString = number.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        return formattedString.replace(/\.00$/, '');
    }
}
  
  return (
    <div className="flex flex-col gap-6 ">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3x1 text-primaryColor font-semibold">Quản Lý Bài Đăng </h1>
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


      <table classname="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="border flex-1 p-2 text-primaryColor ">Mã Tin</th>
            <th className="border flex-1 p-2 text-primaryColor ">Hình ảnh</th>
            <th className="border flex-1 p-2 text-primaryColor ">Tiêu đề</th>
            <th className="border flex-1 p-2 text-primaryColor ">Danh Mục</th>
            <th className="border flex-1 p-2 text-primaryColor ">Địa chỉ</th>
            <th className="border flex-1 p-2 text-primaryColor ">Giá</th>
            <th className="border flex-1 p-2 text-primaryColor ">Trạng Thái</th>
            <th className="border flex-1 p-2 text-primaryColor ">Tùy Chọn</th>
          </tr>                             
        </thead>
        <tbody>
        {/* {spaces.map((item, index) => (
            <tr className="flex items-center h-16" key={index.id} >
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.id}</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">Hình ảnh</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{`${item?.title.slice(0,20)}...`}</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.categoryId?.categoryName}</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{`${item?.address.slice(0,20)}...`}</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.price}</td>
               <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.status?.status}</td>
              <td className="flex h-full flex-1 items-center justify-center gap-4 border px-2">
                <button
                  className="rounded-md bg-green-600 px-2 py-1 text-white hover:underline"
                >
                  Sửa
                </button>
                <button
                  className="rounded-md bg-red-600 px-2 py-1 text-white hover:underline"
                  
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))} */}
        {
                    spaces.length > 0 ? spaces.map(item => {
                            return (
                              <tr className="flex items-center h-16" key={item.id} >
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{`#${item?.id}`}</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">Hình ảnh</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{`${item?.title.slice(0,20)}...`}</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.categoryId?.categoryName}</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{`${item?.address.slice(0,20)}...`}</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{formatNumber(item?.price) + " VND"}</td>
                              <td className="border px-2 flex-1 h-full flex justify-center items-center">{item?.status?.status}</td>
                             <td className="flex h-full flex-1 items-center justify-center gap-4 border px-2">
                               <button
                                 className="rounded-md bg-green-600 px-2 py-1 text-white hover:underline"
                               >
                                 Sửa
                               </button>
                               <button
                                 className="rounded-md bg-red-600 px-2 py-1 text-white hover:underline"
                                 onClick={(e) => handleDeleteSpace(item?.id)}
                               >
                                 Xóa
                               </button>
                             </td>
                           </tr>
                            )
                        }) :
                        <p className="text-2xl py-4 font-medium text-center text-primaryColor min-h-[490px]">
                            Không có phòng nào!
                        </p>
                }
        </tbody>
      </table>

      {/* {IsEdit && <EditSpace setIsEdit={setIsEdit} /> } */}
      
    </div>
  );
};

export default ManagePostHome;
