
import React, {useState} from "react";
import Address from "../../components/selectAddress/Address";
import InputFormV1 from '../../components/inputform/InputFormV1'

const AddressPost = () => {
  const [address, setAddress] = useState("")

  return (
    <div >
        <h2 className='font-semibold text-xl text-primaryColor py-4'>Địa chỉ cho thuê</h2>
        <div className='flex flex-col gap-4 '>
            <div className='flex items-center gap-4 '>
              <Address setAddress={setAddress}/>
            </div>
            <div className='flex flex-col gap-2'>
                <div className="w-full mb-4">
                     
                      <label className="font-medium"
                      
                          htmlFor="inputAdress">Địa Chỉ chính xác</label>
                          <textarea
                          className="w-full outline-none p-2 border border-gray-200 rounded-md bg-gray-100"
                          id="inputAdress"
                          placeholder="địa chỉ"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                      />
                  </div> 
            </div>
        </div>
    </div>
  )
}

export default AddressPost;