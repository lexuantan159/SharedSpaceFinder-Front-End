import {React, useState, useEffect,useContext} from "react";
import axios from "axios";
import * as adminsService from "../../services/admin"
import AuthContext from "../../context/authProvider";
import Modal from "../admin/ModalUser"

//show list
const User = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [users, setUsers] = useState([]);
  const {auth,setAuth} = useContext(AuthContext)

  useEffect(() => {
 
    const fetchUser = async () => {
      const accessToken = auth.accessToken
      const param = {

      }

      const responseUser = await adminsService.getUser(param,accessToken)

      if(responseUser?.status === 200) {
        setUsers(responseUser.data.listUsers);
      }else {
        console.log(responseUser);
      }

    }
    fetchUser()

  }, [auth]);

    useEffect(() => {
      const myDataString = localStorage.getItem('auth');
      if ( myDataString !== null ) {
          const myDataObject = JSON.parse(myDataString);
          setAuth(myDataObject);
      }else {
          setAuth({});
      }
  },[]);

//edit user
const [editingUser, setEditingUser] = useState(null);

const handleSubmit = (newRow) => {
  rowToEdit === null
    ? setUsers([...users, newRow])
    : setUsers(
        users.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newRow;
        })
      );
};

const handleEdit = async (user) => {
  setModalOpen(true);
  setRowToEdit(user.id);
  console.log(user.id);
  const accessToken = auth.accessToken
      const param = {
          userId: user,
          role: "R2"
      }
      const responseUpdate = await adminsService.updateUser(param,accessToken);
          console.log(responseUpdate);
};

const handleSave = (editedUser) => {
  const updatedUsers = users.map((user) =>
    user.id === editedUser.id ? editedUser : user
  );
  setUsers(updatedUsers);
  setEditingUser(null); 
};

  //delete user
  const deleteId = async (id) => {
    const res = await axios.delete(
      `http://localhost:8080/api/users/delete-user?userId=${id}`,
      {
        withCredentials: false,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaXR0dDIyQGdtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIl0sImlhdCI6MTcwMDY3MDA4OCwiZXhwIjoxNzAwODQyODg4fQ.2KQFebGwI6B5rBBl9uEGhb_Ghc_iuh_BKfoY0YaEBAX85kxBG2ejo3Uj2cWWaXyYY3XNrqqiTP-J0b5kieSa_Q",
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
        
   
          <table className="w-full table-auto bg-white">
            <thead>
              <tr className="flex w-full bg-gray-100">
                <th className="border flex-1 p-2 text-black ">ID</th>
                <th className="border flex-1 p-2 text-black ">Name</th>
                <th className="border flex-1 p-2 text-black ">Email</th>
                <th className="border flex-1 p-2 text-black ">Phone</th>
                <th className="border flex-1 p-2 text-black ">Address</th>
                <th className="border flex-1 p-2 text-black ">Role</th>
                <th className="border flex-1 p-2 text-black ">Tùy Chọn</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key= {index} className="flex items-center h-16" data-index={index}>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.id}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.name}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.email}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.phone}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.address}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.role}</td>
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

          
        
     
      {modalOpen }
      <div>
      {modalOpen && (
            <Modal
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
                
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && users[rowToEdit]}
            />
          )}
      </div>
          
    </div>
    
        
    )
}

export default User;