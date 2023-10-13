import React from 'react'

function InputField({label, type, isRequired, id}) {
  return (
    <div className='flex flex-col gap-2 font-nunito'>
        <label htmlFor={id} className='text-white font-medium'>{label}{isRequired ? <span className='text-red-600 text-lg'>*</span> : <></>}</label>
        <input type={type} required={isRequired} name={id} id={id} className='bg-gray-300 h-11 rounded-md w-full' />
    </div>
  )
}

export default InputField