import {React, useState, useEffect, useContext, Fragment} from "react";
import {HttpStatusCode} from "axios";
import * as adminsService from "../../services/admin";
import AuthContext from "../../context/authProvider";
import {deleteUserById} from "../../services/user";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";

const dataDropdown = [
    {
        value: "R1",
        text: "Admin",
    },
    {
        value: "R2",
        text: "Owner",
    },
    {
        value: "R3",
        text: "User",
    },
];

//show list
const User = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalRemove, setModalRemove] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [role, setRole] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUser = async () => {
            const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
            const param = {
                searchByRole: "User",
            };

            const responseUser = await adminsService.getUser(param, accessToken);
            console.log("🚀 ~ fetchUser ~ responseUser:", responseUser);

            if (responseUser?.status === 200) {
                setUsers(responseUser.data.listUsers);
                setTotalPages(() => responseUser.data.totalPages);
            } else {
                console.log(responseUser);
            }
        };
        fetchUser();
    }, []);


    const handleEdit = () => {
        setModalOpen(true);
    };

    const handleSubmitEdit = async () => {
        if (!user) return;
        if (user.roles[0].roleCode === role) return;
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const param = {
            userId: user.id,
            role: role,
        };

        const responseUser = await adminsService.updateUser(param, accessToken);
        console.log(responseUser);
        if (responseUser.status === HttpStatusCode.Ok) {
            setUsers((users) =>
                users.filter((userFilter) => userFilter.id !== user.id),
            );
        }

        setModalOpen(false);
    };

    //delete user
    const deleteId = async () => {
        if (!user) return;
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
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
            <h2 className="my-5 text-2xl font-bold">Quản lý tài khoản</h2>
            <table className=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
                <thead className=" w-full bg-[#ECEFF1]">
                <tr>
                    <th className="rounded-l-xl py-3 px-2 text-left text-base font-medium text-[#1B2432]">
                        Tên
                    </th>
                    <th className="text-left px-2  text-base font-medium text-[#1B2432]">
                        Id
                    </th>
                    <th className="text-left px-2  text-base font-medium text-[#1B2432]">
                        Email
                    </th>
                    <th className="text-left px-2  text-base font-medium text-[#1B2432]">
                        Số điện thoại
                    </th>
                    <th className="text-left px-2  text-base font-medium text-[#1B2432]">
                        Địa chỉ
                    </th>
                    <th className="text-left px-2  text-base font-medium text-[#1B2432]">
                        Vai trò
                    </th>
                    <th className="rounded-r-xl text-left text-base font-medium text-[#1B2432]">

                    </th>
                </tr>
                </thead>
                <tbody className="w-full">
                {users.map((user, index) => {
                    return (
                        <tr key={index} className=" bg-[#FFF]">
                            <td className="py-3 pl-3 rounded-l-xl">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                                        alt="avatar"
                                        className="object-cover rounded-full h-9 w-9"
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
                            <td className="py-3 pl-3 ml-auto rounded-r-xl">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setUser(() => user);
                                            handleEdit();
                                        }}
                                        className="rounded-xl bg-[#23A9F9] px-3 py-2 text-white font-semibold"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => {
                                            setUser(() => user);
                                            setModalRemove(true);
                                        }}
                                        className="rounded-xl bg-[#FFA900] px-3 py-2 text-white font-semibold"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <Pagination
                itemsPerPage={itemPerPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            {modalOpen && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                            className="flex min-h-full items-end rounded-lg justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg
                                                className="h-6 w-6 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left h-[250px]">
                                            <h3
                                                className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Chỉnh sửa vai trò
                                            </h3>
                                            <div className="mt-2 w-full">
                                                <Dropdown
                                                    data={dataDropdown.filter(
                                                        (userFilter) =>
                                                            userFilter.value !== user.roles[0].roleCode,
                                                    )}
                                                    setRole={setRole}
                                                ></Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={handleSubmitEdit}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Cập nhập
                                    </button>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalRemove && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg
                                                className="h-6 w-6 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Bạn có chắc là muốn xóa tài khoản này không ?
                                            </h3>
                                            <div className="mt-2"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={deleteId}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Xóa
                                    </button>
                                    <button
                                        onClick={() => setModalRemove(false)}
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Hủy
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
