import Address from "../../components/selectAddress/Address";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import LayoutListSpaces from "../../layouts/LayoutListSpaces";
import * as serviceSpaces from '../../services/spaces'
import {toast} from "react-toastify";

const Spaces = ({type = "None"}) => {

    const initialState = {
        categoryId: null,
        address: null,
        page: 1,
        sortBy: null,
        sortDir: null,
        searchByProvince: null,
        searchByDistrict: null,
        searchByWard: null,
        priceFrom: null,
        priceTo: null,
        areaFrom: null,
        areaTo: null,
        status: 3,
    }

    const categories = [
        {id: 1, name: 'Phòng Trọ'},
        {id: 2, name: 'Căn Hộ'},
        {id: 3, name: 'Nhà Nguyên Căn'},
        {id: 4, name: 'Văn Phòng'},
        {id: 5, name: 'Mặt Bằng'},
        {id: 6, name: 'Chung Cư'},
    ]

    const [categoryId, setCategoryID] = useState("None")
    const [address, setAddress] = useState(" , , ")
    const [state, setState] = useState(initialState);
    const [spaces, setSpaces] = useState([])
    const [resetAddress, setResetAddress] = useState(false)


    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message);
    }

    const handleSearch = () => {
        // handel split address
        const splitAddress = address.split(',').map((item) => item.trim());
        const [province, district, ward] = splitAddress.reverse();
        // handle error when province district ward undefined
        if (province === "undefined" || district === "undefined" || ward === "undefined") {
            notify("Lỗi Tìm Kiếm, Vui Lòng Chọn Lại Địa Chỉ!", "error")
            return;
        }
        // handle add parram
        setState((prevState) => ({
            ...prevState,
            categoryId: !isNaN(categoryId) ? categoryId : null,
            searchByProvince: province || null,
            searchByDistrict: district || null,
            searchByWard: ward || null,
        }));
    }


    useEffect(() => {
        const fetchSpaces = async () => {

            // Lọc bỏ các giá trị null hoặc undefined khỏi object
            const filteredParams = Object.fromEntries(
                Object.entries(state).filter(([_, value]) => value !== null && value !== undefined)
            );
            // Kết quả là một object chỉ chứa các tham số không phải là null hoặc undefined
            const response = await serviceSpaces.getSpace(filteredParams)
            if (response?.status === 200)
                setSpaces(response?.data?.listSpaces)
            else {
                setSpaces([])
                console.log("Call Api: ", response?.message)
            }
        }
        fetchSpaces()
    }, [state])

    return (
        <div className="">
            <div className="relative w-full h-[300px] ">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/14332700/pexels-photo-14332700.jpeg?cs=srgb&dl=pexels-marek-piwnicki-14332700.jpg&fm=jpg"
                    alt="intro"/>
                <div
                    className="max-w-[1200px] mx-auto absolute left-5 right-5 bottom-0 transform translate-y-1/2 md:grid md:grid-cols-2 md:gap-5 md:items-center lg:flex lg:items-center lg:justify-around  p-4 md:py-2 md:px-6 backdrop-blur-sm bg-white/40 rounded-xl shadow ">
                    <SelectAddress type="category" hiddenTitle={true} value={categoryId} setValue={setCategoryID}
                                   options={categories} label="Danh Mục"
                                   resetAddress={resetAddress} setResetAddress={setResetAddress}
                    />
                    <Address hiddenTitle={true} resetAddress={resetAddress} setResetAddress={setResetAddress}
                             setAddress={setAddress}/>
                    <div className="text-center md:transform md:translate-x-1/2 lg:translate-x-0">
                        <button className="px-4 py-3 bg-primaryColor text-white font-semibold rounded-lg"
                                onClick={handleSearch}
                        >
                            Tìm Kiếm
                            <FontAwesomeIcon className="ml-3" icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </div>
            </div>
            {/*Layout display item */}
            <LayoutListSpaces type={type} initialState={initialState} setCategory={setCategoryID} setResetAddress={setResetAddress}
                              state={state} setState={setState} spacesList={spaces}/>
        </div>
    )
}

export default Spaces;