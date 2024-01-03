import SelectAddress from "./SelectAddress";
import React, {useEffect, useState} from "react";
import {getDistrict, getProvinces, getWard} from "../../services/address";

const Address = ({
                     space,
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
        if (resetAddress) {
            setProvinces([]);
            setDistricts([]);
            setWards([]);
            setProvinceId("");
            setDistrictId("");
            setWardId("");
        }
    }, [resetAddress]);

    useEffect(() => {
        const fetchProvince = async () => {
            const provincesResponse = await getProvinces();
            if (provincesResponse.status === 200) {
                setProvinces(provincesResponse?.data?.results);
            }
            setDistricts([]);
            setWards([]);
            setDistrictId("");
            setWardId("");
            // setResetAddress(false)
        };
        fetchProvince();
    }, [resetAddress]);

    useEffect(() => {
        const fetchDistricts = async () => {
            const districtResponse = await getDistrict(provinceId);
            if (districtResponse.status === 200) {
                setDistricts(districtResponse?.data?.results);
            }
            setWards([]);
            setWardId("");
        };
        provinceId && fetchDistricts();
    }, [provinceId]);

    useEffect(() => {
        const fetchWards = async () => {
            const wardResponse = await getWard(districtId);
            if (wardResponse.status === 200) {
                setWards(wardResponse?.data?.results);
            }
        };
        districtId && fetchWards();
    }, [districtId]);

    useEffect(() => {
        const fullAddress = `${
            wardId
                ? `${wards.find((item) => item.ward_id === wardId)?.ward_name},`
                : ""
        } ${
            districtId
                ? `${
                    districts.find((item) => item.district_id === districtId)
                        ?.district_name
                },`
                : ""
        } ${
            provinceId
                ? `${
                    provinces.find((item) => item.province_id === provinceId)
                        ?.province_name
                }`
                : ""
        }`;
        setProvince(provinceId
            ? `${
                provinces.find((item) => item.province_id === provinceId)
                    ?.province_name
            }`
            : "")
        setDistrict(districtId
            ? `${
                districts.find((item) => item.district_id === districtId)
                    ?.district_name
            }`
            : "")
        setWard(wardId
            ? `${wards.find((item) => item.ward_id === wardId)?.ward_name}`
            : "")
        setAddress(fullAddress);
    }, [provinceId, districtId, wardId]);

    return (
        <>
            <SelectAddress
                hiddenTitle={hiddenTitle}
                type="province"
                value={provinceId}
                setValue={setProvinceId}
                label="Tỉnh / Thành Phố"
                options={provinces}
            />
            <SelectAddress
                hiddenTitle={hiddenTitle}
                type="district"
                value={districtId}
                setValue={setDistrictId}
                label="Quận / Huyện"
                options={districts}
            />
            <SelectAddress
                hiddenTitle={hiddenTitle}
                type="ward"
                value={wardId}
                setValue={setWardId}
                label="Phường / Xã"
                options={wards}
            />
        </>
    );
};

export default Address;