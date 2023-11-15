import {React, useState, useEffect} from "react";
import axios from "axios";

const Owner = () => {
  const [owners, setPost] = useState([]);
  const baseURL = "http://localhost:8080/api/users/users";
  useEffect(() => {
    axios({
      url: baseURL,
      method: "get",
      withCredentials: false,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZXh1YW50YW4xMkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBZG1pbiJdLCJpYXQiOjE2OTk3Njg4NzEsImV4cCI6MTY5OTk0MTY3MX0.lNnNDP-mp8od_8RukgHZU-mR3cDAG00w96uZ-aQEPZ0kCnKuU6Lb5WYQZS2vOzdpvNodL0sASDKvEb_GkjCvow',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setPost(response.data.listUsers);
    });
  }, []);

 function deleteid(id){
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
  console.log("aaaa")
 };
  console.log("data",owners.listUsers)
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
          {owners.map((owner, index) => (
            <tr className="flex items-center h-16">
            <td className="border px-2 flex-1 h-full flex justify-center items-center">{owner.id}</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">{owner.name}</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">{owner.email}</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">{owner.phone}</td>
            <td className="border px-2 flex-1 h-full flex justify-center items-center">{owner.address}</td>
            <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline" oncl>
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline" onClick={deleteid}>
                Xóa
              </button>
            </td>
          </tr>
          ))}          
        </tbody>
      </table>
    </div>
    )
}

export default Owner;