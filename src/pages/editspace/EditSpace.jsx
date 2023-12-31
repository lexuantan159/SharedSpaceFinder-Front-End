import React from "react";
import {useEffect, useContext, useState} from "react";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import * as spaceService from "../../services/spaces";
import MethodContext from "../../context/methodProvider";
import AddressEdit from "../../components/selectAddress/AddressEdit";
import SlideImagesEdit from "../../components/slideImages/SlideImagesEdit";

const EditSpace = ({setIsEdit, dataEdit}) => {
    console.log(dataEdit)
    const [categoryId, setCategoryID] = useState(
        dataEdit?.categoryId?.id || "none",
    );
    const [address, setAddress] = useState(" , , ");
    const [addressOnly, setAddressOnly] = useState(dataEdit?.address || " , , ");
    const [province, setProvince] = useState(dataEdit?.province || "");
    const [district, setDistrict] = useState(dataEdit?.district || "");
    const [ward, setWard] = useState(dataEdit?.ward || "");
    const [area, setArea] = useState(dataEdit?.area || "");
    const [numBed, setNumBed] = useState(dataEdit?.bedroomNumbers || "");
    const [numBath, setNumBath] = useState(dataEdit?.bathroomNumbers || "");
    const [numPeo, setNumPeo] = useState(dataEdit?.peopleNumbers || "");
    const [price, setPrice] = useState(dataEdit?.price || "");
    const [title, setTitle] = useState(dataEdit?.title || "");
    const [description, setDescription] = useState(dataEdit?.description || "");
    const [files, setFiles] = useState([]);
    const formData = new FormData();
    const {toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const [imagesDeleted, setImagesDeleted] = useState([])

    const categories = [
        {id: 1, name: "Phòng Trọ"},
        {id: 2, name: "Căn Hộ"},
        {id: 3, name: "Nhà Nguyên Căn"},
        {id: 4, name: "Văn Phòng"},
        {id: 5, name: "Mặt Bằng"},
        {id: 6, name: "Chung Cư"},
    ];

    const handleFileChange = (e) => {
        // Access the selected files from the input element
        const selectedFiles = e.target.files;
        // Convert the FileList to an array and update the state
        setFiles(Array.from(selectedFiles));
    };

    console.log(dataEdit)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = {
            spaceId: dataEdit?.id,
        };
        // handle input form data
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("bedroomsNumber", numBed);
        formData.append("bathroomsNumber", numBath);
        formData.append("peopleNumber", numPeo);
        formData.append("province", province);
        formData.append("district", district);
        formData.append("ward", ward);
        formData.append("address", address);
        formData.append("categoryId", categoryId);

        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }
        imagesDeleted.forEach(imageId => {
            formData.append("imagesId[]", imageId);
        });
        // Get token
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const id = toastLoadingId("Vui lòng chờ...")
        // call api
        const responseUpdateSpace = await spaceService.updateSpace(
            params,
            formData,
            accessToken,
        );
        if (responseUpdateSpace?.status === 200) {
            toastUpdateLoadingId("Cập Nhật Thành công,", "success", id);
            setIsEdit(false)
        } else {
            toastUpdateLoadingId("Gửi yêu thất bại!", "error", id);
        }
    };


    return (
        <div tabIndex="-1" aria-hidden="true"
             className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 justify-center items-center w-full md:inset-0 h-full bg-black/50 hover:cursor-pointer"
             onClick={() => setIsEdit(false)}
        >
            <div
                className="relative top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-6xl max-h-full "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="px-6 bg-white rounded-lg">
                    <h1 className="text-3x1 border-b border-gray-200 py-4 text-xl font-medium text-primaryColor ">
                        Chỉnh Sửa Tin Đăng
                    </h1>
                    <form
                        className="w-full rounded border-2 border-primaryColor p-5"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div
                            className="md:grid md:grid-cols-2 md:items-center md:gap-5 lg:flex lg:items-center lg:justify-around">
                            <SelectAddress
                                type="category"
                                value={categoryId}
                                setValue={setCategoryID}
                                options={categories}
                                label="Danh Mục"
                            />

                            <AddressEdit
                                space={dataEdit}
                                setAddress={setAddress}
                                setProvince={setProvince}
                                setDistrict={setDistrict}
                                setWard={setWard}
                            />


                        </div>
                        <div className="mb-4 w-full">
                            <label
                                className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                htmlFor="inputAdress"
                            >
                                Địa Chỉ Chính Xác
                            </label>
                            <input
                                className="block h-[50px] w-full py-3 pl-4 pr-10 shadow border border-gray-200 outline-none rounded-md bg-gray-100"
                                id="inputAdress"
                                placeholder="Địa chỉ..."
                                readOnly
                                value={addressOnly}
                                onChange={(e) => setAddressOnly(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                htmlFor="inputAdress"
                            >
                                Địa Chỉ Thay Đổi
                            </label>
                            <textarea
                                className="block h-[50px] w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                id="inputAdress"
                                placeholder="Địa chỉ..."
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div
                            className="md:grid md:grid-cols-2 md:items-center md:gap-5 lg:flex lg:items-center lg:justify-between">
                            <div className="mb-4">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputEmail"
                                >
                                    Diện tích (m²)
                                </label>
                                <input
                                    className="block w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputEmail"
                                    type="number"
                                    placeholder="Diện tích..."
                                    min={1}
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputEmail"
                                >
                                    Phòng ngủ
                                </label>
                                <input
                                    className="block w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputEmail"
                                    type="number"
                                    placeholder="Phòng ngủ..."
                                    min={1}
                                    value={numBed}
                                    onChange={(e) => setNumBed(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputEmail"
                                >
                                    Phòng tắm
                                </label>
                                <input
                                    className="block w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputEmail"
                                    type="number"
                                    placeholder="WC..."
                                    min={1}
                                    value={numBath}
                                    onChange={(e) => setNumBath(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputEmail"
                                >
                                    Số người
                                </label>
                                <input
                                    className="block w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputEmail"
                                    type="number"
                                    placeholder="Số người..."
                                    min={1}
                                    value={numPeo}
                                    onChange={(e) => setNumPeo(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex gap-4 sm:flex-wrap md:flex-nowrap lg:justify-between">
                            <div className="mb-4 w-full">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputAdress"
                                >
                                    Tiêu Đề
                                </label>
                                <textarea
                                    className="block h-[50px] w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputAdress"
                                    placeholder="Tiêu đề..."
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="">
                                <label
                                    className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                    htmlFor="inputEmail"
                                >
                                    Giá
                                </label>
                                <input
                                    className="block w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                    id="inputEmail"
                                    type="number"
                                    placeholder="Giá..."
                                    min={1}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                htmlFor="inputAdress"
                            >
                                Mô tả
                            </label>
                            <textarea
                                className="block h-[100px] w-full rounded-xl py-3 pl-4 pr-10 shadow outline-none"
                                id="inputAdress"
                                placeholder="Mô tả..."
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                className="mb-2 block text-[18px] font-semibold text-textBoldColor"
                                htmlFor="anh"
                            >
                                Ảnh bài đăng
                            </label>
                            <SlideImagesEdit images={dataEdit?.images || []} setImagesDeleted={setImagesDeleted}/>
                        </div>


                        <div className="mb-3 mt-8 ">
                            <label
                                htmlFor="formFileMultiple"
                                className="mb-2  text-[18px] font-semibold text-textBoldColor "
                            >Chọn file thay đổi ảnh </label
                            >
                            <input
                                className="mt-4 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFileMultiple"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => handleFileChange(e)}
                                multiple/>
                        </div>
                        <button
                            className="block w-full rounded-lg bg-primaryColor py-2  text-lg font-medium text-white hover:opacity-90 outline-none">
                            {dataEdit?.status?.id === 5 ? "Đăng lại" : "Chỉnh sửa"}

                        </button>
                        <div className="h-[20px]"></div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default EditSpace;
