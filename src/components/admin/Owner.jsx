import { React, useState, useEffect } from "react";
import * as spaceService from "../../services/spaces";

const Owner = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      const param = {};

      const responseOwner = await spaceService.getSpace(param);

      if (responseOwner?.status === 200) {
        const listSpace = responseOwner?.data?.listSpaces;
        setOwners(listSpace);
      } else {
        console.log(responseOwner);
      }
    };
    fetchOwner();
  }, []);

  function deleteid(id) {
    // axios({
    //   url: "http://localhost:8080/api/users/delete-user/?userId"+id,
    //   method: "delete",
    //   withCredentials: false,
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZXh1YW50YW4xMkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBZG1pbiJdLCJpYXQiOjE2OTk3Njg4NzEsImV4cCI6MTY5OTk0MTY3MX0.lNnNDP-mp8od_8RukgHZU-mR3cDAG00w96uZ-aQEPZ0kCnKuU6Lb5WYQZS2vOzdpvNodL0sASDKvEb_GkjCvow',
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => {
    //   setPost(response.data.listUsers);
    // });
  }

  return (
    <div>
      <div>
        <h2 className="my-5 text-3xl font-bold">Management Owner Account</h2>
      </div>
      <table className="w-full table-auto bg-white">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="flex-1 border p-2 text-black ">ID</th>
            <th className="flex-1 border p-2 text-black ">Name</th>
            <th className="flex-1 border p-2 text-black ">Email</th>
            <th className="flex-1 border p-2 text-black ">Phone</th>
            <th className="flex-1 border p-2 text-black ">Address</th>
            <th className="flex-1 border p-2 text-black ">Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((space, index) => (
            <tr key={index} className="flex h-16 items-center">
              <td className="flex h-full flex-1 items-center justify-center border px-2">
                {space?.ownerId?.id}
              </td>
              <td className="flex h-full flex-1 items-center justify-center border px-2">
                {space?.ownerId?.name}
              </td>
              <td className="flex h-full flex-1 items-center justify-center border px-2">
                {space?.ownerId?.email}
              </td>
              <td className="flex h-full flex-1 items-center justify-center border px-2">
                {space?.ownerId?.phone}
              </td>
              <td className="flex h-full flex-1 items-center justify-center border px-2">
                {space?.ownerId?.address}
              </td>
              <td className="flex h-full flex-1 items-center justify-center gap-4 border px-2">
                <button
                  className="rounded-md bg-green-600 px-2 py-1 text-white hover:underline"
                  oncl
                >
                  Sửa
                </button>
                <button
                  className="rounded-md bg-red-600 px-2 py-1 text-white hover:underline"
                  onClick={deleteid}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Owner;
