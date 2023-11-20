import React from 'react'

const InputFormV1 = ({label, unit, value, setValue, small,name,invaLidFields,setInvalidFields}) => {
  return (
    <div>
        <label htmlFor="title" className='font-medium'>{label}</label>
        <div className='flex items-center'>
          <input 
          type="text" 
          id="title" 
          className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} outline-none border flex-auto border-gray-300 p-2`} 
          value={value}
          onChange={(e) => setValue(prev => ({...prev, [name]:e.target.value}))}

          onFocus={() => setInvalidFields([])}
          />
    
          {unit && <span className='p-2 border flex-none w-25 flex items-center rounded-tr-md rounded-br-md justifi-center bg-gray-200'>{unit}</span>}
        </div>
        {small && <small className='opacity-70 text-primaryColor whitespace-nowrap'>{small}</small>}
        <small className='text-red-500 block w-full'>
          {
            invaLidFields?.some(item => item.name == name) && invaLidFields?.find(item => item.name == name)?.message
          }
        </small>
    </div>
  )
}

export default InputFormV1;