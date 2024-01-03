import Address from "../../components/selectAddress/Address";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import React, {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import LayoutListSpaces from "../../layouts/LayoutListSpaces";
import * as serviceSpaces from '../../services/spaces'
import * as sharingServices from '../../services/sharing'
import {useLocation, useNavigate} from "react-router-dom";
import MethodContext from "../../context/methodProvider";

const Spaces = ({type = "None"}) => {

    let initialState = type === "sharing" ? {
        page: 1,
    } : {
        page: 1,
        status: 0,
    }

    const categories = [
        {id: 1, name: 'Phòng Trọ'},
        {id: 2, name: 'Căn Hộ'},
        {id: 3, name: 'Nhà Nguyên Căn'},
        {id: 4, name: 'Văn Phòng'},
        {id: 5, name: 'Mặt Bằng'},
        {id: 6, name: 'Chung Cư'},
    ]

    const {notify, filteredKeyNull} = useContext(MethodContext);
    const [categoryId, setCategoryID] = useState("None")
    const [address, setAddress] = useState(" , , ")
    const [state, setState] = useState(initialState);
    const [spaces, setSpaces] = useState([])
    const [resetAddress, setResetAddress] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


    const handleSearch = () => {
        // handel split address
        setResetAddress(false)
        const splitAddress = address.split(',').map((item) => item.trim());
        const [province, district, ward] = splitAddress.reverse();
        // handle error when province district ward undefined
        if (province === "undefined" || district === "undefined" || ward === "undefined") {
            if (!isNaN(categoryId)) {
                // handle add parram
                setState((prevState) => ({
                    ...prevState,
                    categoryId: categoryId
                }));
                return;
            }
            notify("Lỗi tìm kiếm, Vui lòng chọn lại địa chỉ!", "error")
            return;
        }
        console.log(categoryId)
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
        if (location.state?.categoryId) {
            setState((prevState) => ({
                ...prevState,
                categoryId: location.state?.categoryId
            }));
            setCategoryID(location.state?.categoryId)
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, []);


    useEffect(() => {
        const fetchSpaces = async () => {
            // Filters out null or undefined values from the object
            const filteredParams = filteredKeyNull(state)
            // The result is an object that contains only parameters that are not null or undefined
            let response;
            if (type === "sharing")
                response = await sharingServices.getSharing(filteredParams)
            else
                response = await serviceSpaces.getSpace(filteredParams)

            if (response?.status === 200) {
                if (type === "sharing") {
                    const listSharing = response?.data?.listSharing
                    const spaceIds = [];

                    // Duyệt qua mảng listSharing và lấy ra giá trị của spaceId
                    listSharing.forEach(item => {
                        if (item && item.spaceId) {
                            spaceIds.push(item.spaceId);
                        }
                    });
                    setSpaces(spaceIds)
                } else {
                    setSpaces(response?.data?.listSpaces)
                }
            } else {
                setSpaces([])
                console.log("Call Api: ", response?.message)
            }

        }
        fetchSpaces()
    }, [state])

    console.log(type)

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
            <LayoutListSpaces type={type} initialState={initialState} setCategory={setCategoryID}
                              setResetAddress={setResetAddress}
                              state={state} setState={setState} spacesList={spaces}/>
        </div>
    )
}

export default Spaces;