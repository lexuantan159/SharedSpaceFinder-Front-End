import React, { useState} from "react";
import InputFormV2 from "../../components/inputform/InputFormV2";
import anonAvatar from '../../assets/images/avatar.jpg'
import Button from "../../components/button/Button";


const Editprofile = () => {
    const [invalidFields, setinvalidFields] = useState([])
    const [payload, setpayload] = useState({
        name: '',
        email:'',
        phone:'',
        date_of_birth:'',
        address:'',
        avatar:'',
    })
    // const handleUploadFile = (e) => { 
    //     const image = e.target.files[0]
    //  }
    return  (
        <div className="flex flex-col h-full items-center">
            <h1 className='text-3x1 w-full text-start text-primaryColor font-medium py-4 border-b border-gray-200'> Chỉnh sửa Thông Tin Cá Nhân</h1>
            <div className='w-3/5 flex items-center justify-center flex-auto'>
            <div className="py-6 flex flex-col gap-4 w-full">
                <InputFormV2
                    name='name'
                    setValue={setpayload} 
                    setInvalidFields={setinvalidFields} 
                    invaLidFields={invalidFields} 
                    direction='flew-row'
                    value={payload.name}
                    label='Tên Hiển Thị'/>
                <InputFormV2
                    name='email'
                    setValue={setpayload}
                    setInvalidFields={setinvalidFields}
                    invaLidFields={invalidFields}
                    direction='flew-row'
                    value={payload.email}
                    label='Email'/>
                <InputFormV2
                    name='phone'
                    setValue={setpayload}
                    setInvalidFields={setinvalidFields}
                    invaLidFields={invalidFields}
                    direction='flew-row'
                    value={payload.phone}
                    label='Số Điện Thoại'/>

                <InputFormV2
                    name='date'
                    setValue={setpayload}
                    setInvalidFields={setinvalidFields}
                    invaLidFields={invalidFields}
                    direction='flew-row'
                    value={payload.date_of_birth}
                    label='Ngày Sinh'/>
                <InputFormV2
                    name='address'
                    setValue={setpayload}
                    setInvalidFields={setinvalidFields}
                    invaLidFields={invalidFields}
                    direction='flew-row mb-5'
                    value={payload.address}
                    label='Địa Chỉ'/>
                <div className='flex mb-6'>

                    <label className='w-48 flex-none' htmlFor='avatar'>Ảnh đại diện</label>
                    <div>
                        <img src={payload.avatar || anonAvatar} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
                        <input type="file" className="appearance-none my-4" id="avatar" />
                        

                    </div>
                </div>
                <Button 
                text='Cập Nhật'
                bgColor='bg-blue-600'
                textColor='text-white'
                />
            </div>
            </div>
        </div>
    )
}

export  default Editprofile;