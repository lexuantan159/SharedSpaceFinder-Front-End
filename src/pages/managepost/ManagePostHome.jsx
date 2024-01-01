import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as spaceService from "../../services/spaces";
import AuthContext from "../../context/authProvider";
import EditSpace from "../editspace/EditSpace";

import * as userService from "../../services/user"
import MethodContext from "../../context/methodProvider";
import DeleteSpace from "../../components/deletespace/DeleteSpace";


const ManagePostHome = () => {
    const [IsEdit, setIsEdit] = useState(false)

    const {auth, setAuth} = useContext(AuthContext);
    const [dataEdit, setDataEdit] = useState({})

    const [spaces, setSpaces] = useState([]);
    const [deleteSpaces, setDeleteSpaces] = useState(false)
    const [user, setUser] = useState("");
    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);

    useEffect(() => {
        const getUser = async () => {
            if (auth.accessToken === undefined) {
                const myDataString = localStorage.getItem("auth");
                if (myDataString !== null) {
                    const myDataObject = JSON.parse(myDataString);
                    setAuth(myDataObject);
                }
            }
            // Only retrieve the access token if it's not already defined in auth.
            const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;

            try {
                const user = await userService.getcurrentuser(accessToken);
                if (user?.status === 200) {
                    setUser(user.data);
                } else {
                    console.log(user);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        getUser();
    }, [auth.accessToken, setAuth]);


    const {ownerId} = {
        ownerId: user?.id,
    }

    useEffect(() => {
        if (ownerId) {
            const fetchSpace = async () => {
                const param = {
                    ownerId: ownerId,
                };
                // call api
                const responseSpaces = await spaceService.getSpace(param);
                console.log(responseSpaces?.status)
                if (responseSpaces?.status === 200) {
                    const listSpace = responseSpaces?.data?.listSpaces;
                    setSpaces(listSpace);
                } else {
                    setSpaces([])
                    console.log(responseSpaces);
                }
            }
            fetchSpace();
        }
    }, [ownerId, deleteSpaces, IsEdit]);

    console.log(spaces);

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
        <div className="flex flex-col gap-6">
            <div className="py-4 border-b border-gray-200">
                <h1 className="text-2xl text-primaryColor font-semibold text-center">Quản lý bài đăng</h1>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="">
                    <input
                        type="text"
                        className="px-2 py-1 mx-4 border border-gray-200 outline-none rounded-md bg-gray-100 "
                        placeholder="Tìm Kiếm"
                    />
                    <Link to="/post-spaces">
                        <button className="px-3 py-2 text-white bg-red-600 rounded-md hover:opacity-90" >
                            Đăng tin mới
                        </button>
                    </Link>
                </div>
            </div>


            <table className="w-full table-auto">
                <thead>
                {
                    spaces.length > 0 && (<tr className="flex w-full bg-gray-100">
                        <th className="border flex-1 p-2 text-primaryColor ">Mã Tin</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Hình ảnh</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Tiêu đề</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Danh Mục</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Địa chỉ</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Giá</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Trạng Thái</th>
                        <th className="border flex-1 p-2 text-primaryColor ">Tùy Chọn</th>
                    </tr>)
                }

                </thead>
                <tbody>
                {
                    spaces.length > 0 ? spaces.map(item => {
                            return (
                                <tr className="flex items-center h-16" key={item.id}>
                                    <td className="border px-2 flex-1 h-full flex justify-center items-center">{`#${item?.id}`}</td>
                                    <td className="border px-2 flex-1 h-full flex justify-center items-center">
                                        <img className="w-[100px] h-[50px] object-cover"
                                             src={item?.images[0]?.imageUrl || "https://bandon.vn/uploads/posts/thiet-ke-nha-tro-dep-2020-bandon-0.jpg"}
                                             alt="anh phong"/>
                                    </td>
                                    <td className="border px-2 flex-1 h-full flex items-center justify-center text-center">{item?.title}</td>
                                    <td className="border px-2 flex-1 h-full flex items-center justify-center text-center">{item?.categoryId?.categoryName}</td>
                                    <td className="border px-2 flex-1 h-full flex items-center justify-center text-center truncate">{item?.address}</td>
                                    <td className="border px-2 flex-1 h-full flex items-center justify-center text-center">{formatNumber(item?.price) + " VND"}</td>
                                    <td className="border px-2 flex-1 h-full flex items-center justify-center text-center">{item?.status?.status}</td>
                                    <td className="flex h-full flex-1 items-center justify-center gap-4 border px-2">
                                        <button
                                            className="rounded-md bg-green-600 px-2 py-1 text-white font-semibold hover:opacity-90"
                                            onClick={(e) => {
                                                setDataEdit(item)
                                                setIsEdit(true)
                                            }}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className="rounded-md bg-red-600 px-2 py-1 text-white font-semibold hover:opacity-90"
                                            //  onClick={(e) => handleDeleteSpace(item?.id)}
                                            onClick={(e) => {
                                                setDataEdit(item)
                                                setDeleteSpaces(true)
                                            }
                                            }
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

            {/* hiển thị page EditSpace lên */}
            {IsEdit && <EditSpace setIsEdit={setIsEdit} dataEdit={dataEdit}/>}
            {deleteSpaces && <DeleteSpace setDeleteSpaces={setDeleteSpaces} dataEdit={dataEdit}/>}


        </div>
    );
};

export default ManagePostHome;
