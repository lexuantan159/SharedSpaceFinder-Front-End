import Address from "../../components/selectAddress/Address";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import LayoutListSpaces from "../../layouts/LayoutListSpaces";
import * as serviceSpaces  from '../../services/spaces'

const Spaces = () => {
    const categories = [
        {id: 1, name: 'Phòng Trọ'},
        {id: 2, name: 'Văn Phòng'},
        {id: 3, name: 'Nhà Ở'},
        {id: 4, name: 'Mặt Bằng'},
        {id: 5, name: 'Căn Hộ'},
    ]
    const [categoryId, setCategoryID] = useState("")
    const [address, setAddress] = useState("")
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
        console.log(1)
        const fetchSpaces = async () => {
            const response = await serviceSpaces.getSpace()
            if(response?.status === 200)
                setSpaces(response?.data?.spaceData)
            else {
                console.log(response?.message)
            }
        }
        fetchSpaces()
    },[])

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
                                   options={categories} label="Danh Mục"/>
                    <Address hiddenTitle={true} setAddress={setAddress}/>
                    <div className="text-center md:transform md:translate-x-1/2 lg:translate-x-0">
                        <button className="px-4 py-3 bg-primaryColor text-white font-semibold rounded-lg">
                            Tìm Kiếm
                            <FontAwesomeIcon className="ml-3" icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </div>
            </div>
            {/*Layout display item */}
            <LayoutListSpaces spacesList={spaces}/>
        </div>
    )
}

export default Spaces;