import React from "react";

const PostSpace = () => {
    return (
        <>
        <div>          
            
                <table>
                <thead>
              <tr className="flex w-full bg-gray-100">
                <th className="border flex-1 p-2 text-black ">ID</th>
                <th className="border flex-1 p-2 text-black ">Name User</th>
                <th className="border flex-1 p-2 text-black ">Name Space</th>
                <th className="border flex-1 p-2 text-black ">Image Space</th>
                <th className="border flex-1 p-2 text-black ">Address</th>
                <th className="border flex-1 p-2 text-black ">Tùy Chọn</th>
              </tr>
            </thead>
                </table>
            <tbody>
            <tr className="flex items-center h-16" >
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">id</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">username</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">useremail</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">userphone</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">useraddress</td>
                  <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline">
                Xóa
              </button>
            </td>
                </tr>
            </tbody>
            </div>
        
        </>
        
    )
}

export default PostSpace;