import React from 'react'
import InputField from './InputField'

function Footer() {
  return (
    <section>
        <div className='bg-gradient-to-br from-dark-blue to-light-blue flex flex-col items-center justify-center p-28 gap-8'>
            <h2 className='text-white font-extrabold text-4xl'>Subscribe to our newsletter!</h2>
            <div className='space-y-3 min-w-[26.5rem]'>
              <InputField label='Email' id='email' type='text' isRequired={true} />
              <InputField label='First Name' id='firstname' type='text' isRequired={false} />
              <InputField label='Last Name' id='lastname' type='text' isRequired={false} />
              <div className='flex items-center justify-start pt-1 pb-6 pl-2 gap-3 text-white text-sm'>
                <input type="checkbox" name="memeber" id="memeber" className='w-5 h-5' />
                <label htmlFor="memeber">Check if related to A2SV as a student, mentor or other</label>
              </div>
              <button type="button" className="bg-yellow text-white w-full py-2.5 rounded-md tracking-widest">Subscribe Now</button>
            </div>
        </div>
        
        <div className='flex flex-col items-center justify-center py-6 gap-4 font-nunito text-gray-600 font-medium text-lg'>
            <p>Follow us on social media</p>
            <div className='flex items-center justify-center gap-8'>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/email.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/linkedin.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/instagram.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/facebook.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/twitter.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
              <div className='bg-gray-300 p-3.5 cursor-pointer hover:bg-primary hover:bg-opacity-20 bg-opacity-25 rounded-full'> <img src='/youtube.svg' className='w-[1.3rem] h-[1.3rem]' /></div>
            </div>
            <hr className='w-full'/>
            <p className='text-sm text-gray-500'>© Copyright 2023 <span className='font-extrabold'>A2SV Foundation</span>. All rights reserved. <a href="https://a2sv.org/privacy-policy" className='text-primary underline'>Privacy Policy</a> | <a href="https://a2sv.org/cookie-policy" className='text-primary underline'>Cookie Policy</a></p>
        </div>
    </section>
  )
}

export default Footer