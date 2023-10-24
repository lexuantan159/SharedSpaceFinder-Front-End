import React, {useState} from "react";
import SelectAddress from "../../components/selectAddress/SelectAddress";
import InputFormV1 from '../../components/inputform/InputFormV1'

  
const Overview = () => {
    const categories = [
        {id: 1, name: 'Phòng Trọ'},
        {id: 2, name: 'Văn Phòng'},
        {id: 3, name: 'Nhà Ở'},
        {id: 4, name: 'Mặt Bằng'},
        {id: 5, name: 'Căn Hộ'},
    ]
    const [categoryId, setCategoryID] = useState("")
  return (
    <div >
        <h2 className='font-semibold text-xl text-primaryColor py-4'>Thông Tin Mô Tả</h2>
        <div className='w-full flex flex-col gap-4'>
                <div className="w-1/2 flex flex-col gap-2 flex-1">
                    <SelectAddress type="category" value={categoryId} setValue={setCategoryID}
                    options={categories} label="Loại Không Gian"/>
                                   {/* <label className='font-medium' htmlFor="">Loại Không Gian</label>
                    <select name="" id=""className="outline-none border border-gray-300 p-2 rounded-md w-full">
                        <option>Danh Mục</option>
                        <option>Phòng Trọ </option>
                        <option>Văn Phòng</option>
                        <option>Nhà ở</option>
                        <option>Mặt Bằng</option>
                        <option>Căn hộ</option>
                    </select> */}
                </div>
                <InputFormV1 label='Tiêu đề'/>
            <div className='flex flex-col gap-2'>
                    <label className='font-medium'htmlFor="desc">Nội dung mô tả</label>
                    <textarea id="desc" cols="30" rows="10" className='w-full rounded-md outline-none border border-gray-300 p-2'></textarea>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <label className='font-medium'>Tên Hiển Thị</label>
                    <input type='text' readOnly className='border border-gray-200 outline-none rounded-md bg-gray-100 p-2'/>
                    <label className='font-medium'>Số Điện Thoại</label>
                    <input type='text' readOnly className='border border-gray-200 outline-none rounded-md bg-gray-100 p-2'/>
                    <InputFormV1 small='Nhập đầy đủ số, ví dụ 1 triệu thì nhập: 1000000' label='Giá Cho Thuê' unit='VND/Tháng'/>
                    <InputFormV1 label='Diện Tích' unit='m2'/>
                    <InputFormV1 label='Số Người'/>
                    <InputFormV1 label='Phòng Ngủ'/>
                    <InputFormV1 label='Phòng Tắm'/>
                    
                </div>
                
                    
            </div>
            
        </div>
    </div>
  )
}

export default Overview;