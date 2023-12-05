import { React, useState, useEffect, useContext, Fragment } from "react";
import axios from "axios";
import * as adminsService from "../../services/admin";
import AuthContext from "../../context/authProvider";
import Modal from "../admin/ModalUser";
import { deleteUserById } from "../../services/user";

//show list
const User = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = auth.accessToken;
      const param = {
        searchByRole: "User",
      };

      const responseUser = await adminsService.getUser(param, accessToken);
      console.log("🚀 ~ fetchUser ~ responseUser:", responseUser);

      if (responseUser?.status === 200) {
        setUsers(responseUser.data.listUsers);
      } else {
        console.log(responseUser);
      }
    };
    fetchUser();
  }, [auth]);

  useEffect(() => {
    const myDataString = localStorage.getItem("auth");
    if (myDataString !== null) {
      const myDataObject = JSON.parse(myDataString);
      setAuth(myDataObject);
    } else {
      setAuth({});
    }
  }, []);

  //edit user
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setUsers([...users, newRow])
      : setUsers(
          users.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          }),
        );
  };

  const handleSave = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user,
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleEdit = async (user) => {
    setModalOpen(true);
    // setRowToEdit(user.id);
    // console.log(user.id);
    // const accessToken = auth.accessToken;
    // const param = {
    //   userId: user,
    //   role: "R2",
    // };
    // const responseUpdate = await adminsService.updateUser(param, accessToken);
    // console.log(responseUpdate);
  };

  //delete user
  const deleteId = async () => {
    if (!user) return;
    const accessToken = auth.accessToken;
    const res = await deleteUserById(accessToken, user.id);
    const userDelete = res.data.user;
    console.log(userDelete);
    const newUsers = [...users];
    newUsers.splice(
      newUsers.findIndex((user) => user.id === userDelete.id),
      1,
    );
    setUsers(() => newUsers);
    setModalRemove(false);
  };
  return (
    <Fragment>
      <h2 className="my-5 text-2xl font-bold">Management User Account</h2>
      <table class=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
        <thead className=" w-full  bg-[#ECEFF1]">
          <tr>
            <th className="rounded-l-xl py-3 pl-3 text-left text-base font-medium text-[#1B2432]">
              User Name
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Visit Id
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Email
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Phone
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Address
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Role
            </th>
            <th className="rounded-r-xl text-left text-base font-medium text-[#1B2432]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {users.map((user, index) => {
            return (
              <tr key={index} className=" bg-[#FFF]">
                <td className="rounded-l-xl py-3 pl-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                      alt="avatar"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.id}</span>
                </td>
                <td className="py-3 pl-3">
                  <span> {user.email}</span>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.phone}</span>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.address}</span>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.roles[0].roleValue}</span>
                </td>
                <td className="ml-auto rounded-r-xl py-3 pl-3">
                  <div className="flex gap-2">
                    <button
                      onClick={handleEdit}
                      className="rounded-xl bg-[#23A9F9] px-6 py-2 text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setUser(() => user);
                        setModalRemove(true);
                      }}
                      className="rounded-xl bg-[#FFA900] px-6 py-2 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modalOpen && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    onClick={() => setModalOpen(false)}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalRemove && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={deleteId}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    onClick={() => setModalRemove(false)}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default User;
