import React from "react";


const SelectAddress = ({type,label,options, value,setValue,hiddenTitle = false,}) => {

    const address = (type, item) => {
        if (type === "province") {
            return {
                id: item?.province_id,
                name: item?.province_name
            };
        } else if (type === "district")
            return {
                id: item?.district_id,
                name: item?.district_name
            };
        else if (type === "ward") {
            return {
                id: item?.ward_id,
                name: item?.ward_name
            }
        } else {
            return {
                id: item?.id,
                name: item?.name
            }
        }
    }

    return (
        <div className={hiddenTitle ? 'w-full my-3 mb-4 md:w-full md:mx-0 lg:w-[20%] lg:mx-0' : "w-full mb-4"}>
            {hiddenTitle ? null :
                <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                       htmlFor="address">{label}</label>
            }
            <select value={value} onChange={(e) => setValue(e.target.value)} name="address"
                    id="address"
                    className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none">
                <option className='pl-4 pr-10 py-3 shadow'
                        value="None">{hiddenTitle ? label : `--Chọn: ${label}--`}</option>
                {options?.map(item => {
                    return (
                        <option key={address(type, item).id}
                                value={address(type, item).id}>
                            {address(type, item).name}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}

export default SelectAddress