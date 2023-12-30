import {React, useState, useEffect, Fragment, useContext} from "react";
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

const Owner = () => {
    const [owners, setOwners] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalRemove, setModalRemove] = useState(false);

    const [owner, setOwner] = useState({});
    const {auth, setAuth} = useContext(AuthContext);
    const [role, setRole] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUser = async () => {
            const accessToken = auth.accessToken;
            const param = {
                searchByRole: "Owner",
                page: currentPage,
                limit: itemPerPage,
            };

            const responseUser = await adminsService.getUser(param, accessToken);
            console.log("🚀 ~ fetchUser ~ responseUser:", responseUser);

            if (responseUser?.status === 200) {
                setOwners(responseUser.data.listUsers);
                setTotalPages(() => responseUser.data.totalPages);
            } else {
                console.log(responseUser);
            }
        };
        fetchUser();
    }, [auth, currentPage]);

    useEffect(() => {
        const myDataString = localStorage.getItem("auth");
        if (myDataString !== null) {
            const myDataObject = JSON.parse(myDataString);
            setAuth(myDataObject);
        } else {
            setAuth({});
        }
    }, []);

    useEffect(() => {
        const myDataString = localStorage.getItem("auth");
        if (myDataString !== null) {
            const myDataObject = JSON.parse(myDataString);
            setAuth(myDataObject);
        } else {
            setAuth({});
        }
    }, []);

    const handleSubmitEdit = async () => {
        if (!owner) return;
        if (owner.roles[0].roleCode === role) return;
        const accessToken = auth.accessToken;
        const param = {
            userId: owner.id,
            role: role,
        };

        const responseUser = await adminsService.updateUser(param, accessToken);
        console.log(responseUser);
        setOwners((owners) =>
            owners.filter((ownerFilter) => ownerFilter.id !== owner.id),
        );
        setModalOpen(false);
    };

    //delete user
    const deleteId = async () => {
        if (!owner) return;
        const accessToken = auth.accessToken;
        const res = await deleteUserById(accessToken, owner.id);
        const userDelete = res.data.user;
        console.log(userDelete);
        const newOwners = [...owners];
        newOwners.splice(
            newOwners.findIndex((user) => user.id === userDelete.id),
            1,
        );
        setOwners(() => newOwners);
        setModalRemove(false);
    };

    return (
        <Fragment>
            <h2 className="my-5 text-2xl font-bold">Quản lý tài khoản</h2>
            <table class=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
                <thead className=" w-full  bg-[#ECEFF1]">
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
                {owners.map((user, index) => {
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
                            <td className="py-3 pl-3 truncate">
                                <span>{user.address}</span>
                            </td>
                            <td className="py-3 pl-3">
                                <span>{user.roles[0].roleValue}</span>
                            </td>
                            <td className="py-3 pl-3 ml-auto rounded-r-xl">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setOwner(() => user);
                                            setModalOpen(true);
                                        }}
                                        className="rounded-xl bg-primaryColor px-3 py-2 text-white font-semibold"
                                    >
                                        Cập nhập
                                    </button>
                                    <button
                                        onClick={() => {
                                            setOwner(() => user);
                                            setModalRemove(true);
                                        }}
                                        className="rounded-xl bg-red-500 px-3 py-2 text-white font-semibold"
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
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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
                                                Cập nhập vai trò
                                            </h3>
                                            <div className="mt-2 w-full">
                                                <Dropdown
                                                    data={dataDropdown.filter(
                                                        (userFilter) =>
                                                            userFilter.value !== owner.roles[0].roleCode,
                                                    )}
                                                    setRole={setRole}
                                                ></Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                                        Xóa
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
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                                                Bạn có chắc là muốn xóa tài khoản này không?
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

export default Owner;

/**
 * <div>
 <div>
 <h2 className="my-5 text-3xl font-bold">Management Owner Account</h2>
 </div>
 <table className="w-full bg-white table-auto">
 <thead>
 <tr className="flex w-full bg-gray-100">
 <th className="flex-1 p-2 text-black border ">ID</th>
 <th className="flex-1 p-2 text-black border ">Name</th>
 <th className="flex-1 p-2 text-black border ">Email</th>
 <th className="flex-1 p-2 text-black border ">Phone</th>
 <th className="flex-1 p-2 text-black border ">Address</th>
 <th className="flex-1 p-2 text-black border ">Tùy Chọn</th>
 </tr>
 </thead>
 <tbody>
 {owners.map((space, index) => (
 <tr key={index} className="flex items-center h-16">
 <td className="flex items-center justify-center flex-1 h-full px-2 border">
 {space?.ownerId?.id}
 </td>
 <td className="flex items-center justify-center flex-1 h-full px-2 border">
 {space?.ownerId?.name}
 </td>
 <td className="flex items-center justify-center flex-1 h-full px-2 border">
 {space?.ownerId?.email}
 </td>
 <td className="flex items-center justify-center flex-1 h-full px-2 border">
 {space?.ownerId?.phone}
 </td>
 <td className="flex items-center justify-center flex-1 h-full px-2 border">
 {space?.ownerId?.address}
 </td>
 <td className="flex items-center justify-center flex-1 h-full gap-4 px-2 border">
 <button
 className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline"
 oncl
 >
 Sửa
 </button>
 <button
 className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline"
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
 *
 */
