import {React, useState, useEffect} from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const baseURL = "http://localhost:8080/api/users/users";
  useEffect(() => {
    axios({
      url: baseURL,
      method: "get",
      withCredentials: false,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdXkxQGdtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIl0sImlhdCI6MTcwMDA2NzUyMSwiZXhwIjoxNzAwMjQwMzIxfQ.gOtjwa6PWQQxzZPCWOzLTVwqMTZBBTI5krhoBpH6lHHvuY6dPYTdtpfUMiAFMIgjbVXpWAc0woAoOvXfvJZ-wA',
        "Content-Type": "application/json"
      }
    }).then((response) => {
      setUsers(response.data.listUsers);
    });
  }, []);

//edit user
const [editingUser, setEditingUser] = useState(null);
const handleEdit = (user) => {
  setEditingUser(user);
};

const handleSave = (editedUser) => {
  const updatedUsers = users.map((user) =>
    user.id === editedUser.id ? editedUser : user
  );
  setUsers(updatedUsers);
  setEditingUser(null); // Close the editing window/modal after saving
};

  //delete user
  const deleteId = async (id) => {
    const res = await axios.delete(
      `http://localhost:8080/api/users/delete-user?userId=${id}`,
      {
        withCredentials: false,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdXkxQGdtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIl0sImlhdCI6MTcwMDA2NzUyMSwiZXhwIjoxNzAwMjQwMzIxfQ.gOtjwa6PWQQxzZPCWOzLTVwqMTZBBTI5krhoBpH6lHHvuY6dPYTdtpfUMiAFMIgjbVXpWAc0woAoOvXfvJZ-wA",
          "Content-Type": "application/json",
        },
      },
    );
    const userDelete = res.data.user;
    console.log(userDelete);
    const newUsers = [...users];
    newUsers.splice(
      newUsers.findIndex((user) => user.id === userDelete.id),
      1,
    );
    setUsers(() => newUsers);
  };
    return (
    <div className="">
      <div>
        <h2 className="my-5 text-3xl font-bold">Management User Account</h2>
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
              {users.map((user, index) => (
                <tr className="flex items-center h-16" data-index={index}>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.id}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.name}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.email}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.phone}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.address}</td>
                  <td className="border px-2 flex-1 h-full flex items-center justify-center gap-4">
              <button className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline" onClick={()=>handleEdit(user.id)} >
                Sửa
              </button>
              <button className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline" onClick={()=>deleteId(user.id)}>
                Xóa
              </button>
            </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editingUser && (
        <div>
          <h2>Edit User</h2>
          <label>Role:</label>
          <input
            type="text"
            value={editingUser.role}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
          <button className=" border px-3 bg-green-600 rounded-md hover:underline" onClick={() => handleSave(editingUser)}>Save</button>
        </div>
      )}
          
    </div>
        
    )
}

export default User;