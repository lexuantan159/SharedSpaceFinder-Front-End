import React from "react";

const Owner = () => {
    return (
        <div>
      <div>
        <h2 className="my-5 text-3xl font-bold">Management Owner Account</h2>
      </div>
      <table class="w-full table-auto bg-white">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="border flex-1 p-2 text-black ">ID</th>
            <th className="border flex-1 p-2 text-black ">Name</th>
            <th className="border flex-1 p-2 text-black ">Email</th>
            <th className="border flex-1 p-2 text-black ">Phone</th>
            <th className="border flex-1 p-2 text-black ">Address</th>
            <th className="border flex-1 p-2 text-black ">Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex items-center h-16">
            <td className="border px-2 flex-1 h-full flex justify-center items-center">1</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Mit Xanh</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">vuacatxe@gmail.com</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">012391238</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Nghệ An</td>
            <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline">
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline">
                Xóa
              </button>
            </td>
          </tr>
          <tr className="flex items-center h-16">
          <td className="border px-2 flex-1 h-full flex justify-center items-center">2</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Mit Đỏ</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">vuacatxe@gmail.com</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">092848421</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">Thái Lan</td>
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
      </table>
    </div>
    )
}

export default Owner;