import SelectAddress from "./SelectAddress";
import React, {useEffect, useState} from "react";
import {getDistrict, getProvinces, getWard} from "../../services/address";

const AddressEdit = ({ space,
                     setAddress, hiddenTitle = false, resetAddress = false, setResetAddress = () => {
    }, setProvince = () => {
    }, setDistrict = () => {
    }, setWard = () => {
    }
                 }) => {



    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [provinceId, setProvinceId] = useState("")
    const [districtId, setDistrictId] = useState("")
    const [wardId, setWardId] = useState("")
    
    useEffect(() => {
        let addressArr = space?.address?.split(',')
        let foundProvince = provinces.length > 0 && provinces?.find(item => item.province_name === addressArr[addressArr.length - 1]?.trim())
        setProvinceId(foundProvince ? foundProvince.province_id : '')
     }, [provinces]);
     useEffect(() => {
         let addressArr = space?.address?.split(',')
         let foundDistrict = districts.length > 0 && districts?.find(item => item.district_name === addressArr[addressArr.length - 2]?.trim())
         setDistrictId(foundDistrict ? foundDistrict.district_id : '')
      }, [districts]);
      useEffect(() => {
         let addressArr = space?.address?.split(',')
         let foundWards = wards.length > 0 && wards?.find(item => item.ward_name === addressArr[addressArr.length - 3]?.trim())
         setWardId(foundWards ? foundWards.ward_id : '')
      }, [wards]);

    useEffect(() => {
        if (resetAddress) {
            setProvinces([])
            setDistricts([])
            setWards([])
            setProvinceId("")
            setDistrictId("")
            setWardId("")
        }

    }, [resetAddress]);


    useEffect(() => {
        const fetchProvince = async () => {
            const provincesResponse = await getProvinces();
            if (provincesResponse.status === 200)
                setProvinces(provincesResponse?.data?.results)
            setDistricts([])
            setWards([])
            setDistrictId("")
            setWardId("")
            setResetAddress(false)
        }
        fetchProvince()
    }, [resetAddress])


    useEffect(() => {

        const fetchDistricts = async () => {

            const districtResponse = await getDistrict(provinceId);

            if (districtResponse.status === 200)
                setDistricts(districtResponse?.data?.results)
            setWards([])
            setWardId("")
        }
        provinceId && fetchDistricts()


    }, [provinceId])

    useEffect(() => {
        const fetchWards = async () => {
            const wardResponse = await getWard(districtId);
            if (wardResponse.status === 200)
                setWards(wardResponse?.data?.results)
        }
        districtId && fetchWards()


    }, [districtId])

    useEffect(() => {
        const fullAddress = `${wardId ? `${wards.find((item) => item.ward_id === wardId)?.ward_name},` : ''} ${districtId ? `${districts.find((item) => item.district_id === districtId)?.district_name},` : ''} ${provinceId ? `${provinces.find((item) => item.province_id === provinceId)?.province_name}` : ''}`
        // Kiểm tra và gọi các hàm setProvince, setDistrict, setWard nếu chúng đã được định nghĩa
        if (setWard && wardId) {
            setWard(wards.find((item) => item.ward_id === wardId)?.ward_name);
        }

        if (setDistrict && districtId) {
            setDistrict(districts.find((item) => item.district_id === districtId)?.district_name);
        }

        if (setProvince && provinceId) {
            setProvince(provinces.find((item) => item.province_id === provinceId)?.province_name);
        }
        setAddress(fullAddress)
    }, [provinceId, districtId, wardId]);


    return (
        <>
            <SelectAddress hiddenTitle={hiddenTitle} type="province" value={provinceId} setValue={setProvinceId}
                           label="Tỉnh / Thành Phố" options={provinces}/>
            <SelectAddress hiddenTitle={hiddenTitle} type="district" value={districtId} setValue={setDistrictId}
                           label="Quận / Huyện" options={districts}/>
            <SelectAddress hiddenTitle={hiddenTitle} type="ward" value={wardId} setValue={setWardId} label="Phường / Xã"
                           options={wards}/>
        </>
    )
}


export default AddressEdit;