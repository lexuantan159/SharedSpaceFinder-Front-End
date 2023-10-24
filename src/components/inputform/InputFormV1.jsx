import React from 'react'

const InputFormV1 = ({label, unit, small, }) => {
  return (
    <div>
        <label htmlFor="title" className='font-medium'>{label}</label>
        <div className='flex items-center'>
          <input 
          type="text" 
          id="title" 
          className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} outline-none border flex-auto border-gray-300 p-2`} 
          // value={value}
          // onChange={}
          />
    
          {unit && <span className='p-2 border flex-none w-25 flex items-center rounded-tr-md rounded-br-md justifi-center bg-gray-200'>{unit}</span>}
        </div>
        {small && <small className='opacity-70 text-primaryColor'>{small}</small>}
    </div>
  )
}

export default InputFormV1;