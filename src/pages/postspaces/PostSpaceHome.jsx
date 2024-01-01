import React, {useState, useContext, useEffect} from "react";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import Address from "../../components/selectAddress/Address";
import * as spaceService from "../../services/spaces"
import * as userServices from "../../services/user"
import * as authServices from "../../services/auth"
import MethodContext from "../../context/methodProvider"
import AuthContext from "../../context/authProvider"

const PostSpaceHome = () => {
    const [categoryId, setCategoryID] = useState("None")
    const [address, setAddress] = useState(" , , ")
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [ward, setWard] = useState("")
    const [area, setArea] = useState("")
    const [numBed, setNumBed] = useState("")
    const [numBath, setNumBath] = useState("")
    const [numPeo, setNumPeo] = useState("")
    const [price, setPrice] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const formData = new FormData();
    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const {auth, setAuth} = useContext(AuthContext);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")).userInfo)

    function hasOwnerRole(roles) {
        return roles.some(role => role?.authority === 'Owner');
    }

    const categories = [
        {id: 1, name: 'Phòng Trọ'},
        {id: 2, name: 'Căn Hộ'},
        {id: 3, name: 'Nhà Nguyên Căn'},
        {id: 4, name: 'Văn Phòng'},
        {id: 5, name: 'Mặt Bằng'},
        {id: 6, name: 'Chung Cư'},
    ]

    const handleFileChange = (e) => {
        // Access the selected files from the input element
        const selectedFiles = e.target.files;
        // Convert the FileList to an array and update the state
        setFiles(Array.from(selectedFiles));
    };

    useEffect(() => {
        const getUser = async () => {
            if (auth.accessToken === undefined) {
                const myDataString = localStorage.getItem("auth");
                if (myDataString !== null) {
                    const myDataObject = JSON.parse(myDataString);
                    setAuth(myDataObject);
                }
            }
        }
        getUser()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a new FormData object
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        // Append each state variable to the FormData
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('area', area);
        formData.append('bedroomsNumber', numBed);
        formData.append('bathroomsNumber', numBath);
        formData.append('peopleNumber', numPeo);
        formData.append('province', province);
        formData.append('district', district);
        formData.append('ward', ward);
        formData.append('address', address);
        formData.append('ownerId', storedAuth?.userInfo?.id);
        formData.append('categoryId', categoryId);

        // Append each file to the 'files' field
        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }

        if (localStorage.getItem("access-token") === null) {
            notify("Không tồn tại token", "error")
            return;
        }
        // get Token from localStorage
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        setIsLoading(true);

        const id = toastLoadingId("Vui lòng chờ...")
        // Call your API with the FormData object
        const responseCreateSpace = await spaceService.createSpace(accessToken, formData);
        console.log(responseCreateSpace)
        if (responseCreateSpace?.status === 201)
            toastUpdateLoadingId("Gửi yêu cầu đăng bài thành công, vui lòng chờ duyệt bài!", "success", id);
        else
            toastUpdateLoadingId("Gửi yêu cầu đăng bài thất bại!", "error", id);
        setIsLoading(false);
    }

    const handleRefresh = async () => {
        // Only retrieve the access token if it's not already defined in auth.
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const refreshToken = JSON.parse(localStorage.getItem("refresh-token")).refreshToken;
        try {
            const user = await userServices.getcurrentuser(accessToken);
            if (user?.status === 200) {
                setUser(user.data);
                localStorage.setItem('auth', JSON.stringify({...auth, userInfo: user?.data}));
                const responseRefreshToken = await authServices.refreshToken(refreshToken)
                console.log(responseRefreshToken)
                if(responseRefreshToken?.status === 200){
                    const newToken = responseRefreshToken?.data?.newAccessToken
                    localStorage.setItem("access-token", JSON.stringify({accessToken: newToken}))
                }
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const handleRegisOwner = async () => {
        // get Token from localStorage
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;

        const id = toastLoadingId("Vui lòng chờ...")
        // Call your API with the FormData object
        const responseRegisOwner = await userServices.registerOwner(accessToken);
        if (responseRegisOwner?.status === 200){
            // handle refresh token
            await handleRefresh()
            toastUpdateLoadingId("Gửi yêu cầu đăng bài thành công!", "success", id);
        }
        else
            toastUpdateLoadingId("Gửi yêu cầu đăng bài thất bại!", "error", id);
    }


    return (
        hasOwnerRole(user?.role) ?

            <div className="px-6">
                <div className="py-4 border-b border-gray-200">
                    <h1 className="text-2xl text-primaryColor font-semibold text-center">Đăng bài</h1>
                </div>
                <form className="w-full p-5 border-primaryColor border-2 rounded" onSubmit={(e) => handleSubmit(e)}>
                    <div
                        className="md:grid md:grid-cols-2 md:gap-5 md:items-center lg:flex lg:items-center lg:justify-around">
                        <SelectAddress type="category" value={categoryId} setValue={setCategoryID}
                                       options={categories} label="Danh Mục"
                        />
                        <Address setAddress={setAddress} setProvince={setProvince} setDistrict={setDistrict}
                                 setWard={setWard}/>
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                               htmlFor="inputAdress">Địa Chỉ</label>
                        <textarea
                            className="block w-full h-[50px] pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                            id="inputAdress"
                            placeholder="Địa chỉ..."
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div
                        className="md:grid md:grid-cols-2 md:gap-5 md:items-center lg:flex lg:items-center lg:justify-between">
                        <div className="mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputEmail">Diện tích (m²)</label>
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputEmail"
                                   type="number"
                                   placeholder="Diện tích..."
                                   min={1}
                                   value={area}
                                   onChange={(e) => setArea(e.target.value)}
                                   required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputEmail">Phòng ngủ</label>
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputEmail"
                                   type="number"
                                   placeholder="Phòng ngủ..."
                                   min={1}
                                   value={numBed}
                                   onChange={(e) => setNumBed(e.target.value)}
                                   required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputEmail">Phòng tắm</label>
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputEmail"
                                   type="number"
                                   placeholder="WC..."
                                   min={1}
                                   value={numBath}
                                   onChange={(e) => setNumBath(e.target.value)}
                                   required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputEmail">Số người</label>
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputEmail"
                                   type="number"
                                   placeholder="Số người..."
                                   min={1}
                                   value={numPeo}
                                   onChange={(e) => setNumPeo(e.target.value)}
                                   required/>
                        </div>
                    </div>
                    <div className="flex sm:flex-wrap md:flex-nowrap lg:justify-between gap-4 mb-4">
                        <div className="w-full mb-4">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputAdress">Tiêu Đề</label>
                            <textarea
                                className="block w-full h-[50px] pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                id="inputAdress"
                                placeholder="Tiêu đề..."
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                                   htmlFor="inputEmail">Giá</label>
                            <input className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                   id="inputEmail"
                                   type="number"
                                   placeholder="Giá..."
                                   min={1}
                                   value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                                   required/>
                        </div>
                    </div>
                    <div className="w-full mb-4">
                        <label className="block text-[18px] font-semibold text-textBoldColor mb-2"
                               htmlFor="inputAdress">Mô tả</label>
                        <textarea
                            className="block w-full h-[100px] pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                            id="inputAdress"
                            placeholder="Mô tả..."
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="formFileMultiple"
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Chọn nhiều file</label
                        >
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"
                            id="formFileMultiple"
                            accept=".png, .jpg, .jpeg"
                            onChange={(e) => handleFileChange(e)}
                            required
                            multiple/>
                    </div>

                    <button
                        className="block bg-primaryColor text-white text-lg font-bold w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none">{isLoading ?
                        "Đang chờ...." : "Đăng Bài"
                    }
                    </button>
                </form>

            </div> :
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline  px-6 py-3 bg-primaryColor hover:opacity-90 hover:cursor-pointer text-white font-bold rounded-xl"
               onClick={handleRegisOwner}>Đăng ký đăng bài</p>
    );
};

export default PostSpaceHome;
