import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (

    <div className='flex flex-col gap-10'>
      {/* SOCIAL LINKS */}
      <div className='flex justify-center gap-5'>
        <a href="http://www.instagram.com/" target='_blank'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK5e1X8pyBNA6t1Zaf9GrxiTQ_IPQeyh19A&s" alt="" style={{width:50,height:50}}/></a>

        <a href="http://www.whatsup.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP2JjnLB9Y93thcaG3HKbXeXmGF5hkTaSPg&s" alt="" style={{width:50,height:50}}/></a>

        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyxU0K2Jex5or5LSATjWaNB8oSA6XPsWRRg&s" alt="" style={{width:50,height:50}}/></a>

        <a href="https://github.com/kumaramit55"><img src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueuOgdtMJqywAkqRjJ3tjuJVLU4-zrlg9lA&s" alt="" style={{width:50,height:50}}/>
        </a>
      </div>

      {/* CONTACT FORM */}
   <form action="" className=''>
    <div className='flex flex-col w-4/5 sm:w-1/2 mx-auto border-b-2 border-slate-100 p-3 mb-4'>
      <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Name</label>
      <input type="text" className='text-xl rounded-md py-2 px-1 font-medium' placeholder='Jon Doe' />
    </div>

    <div className='flex flex-col w-4/5 sm:w-1/2 mx-auto  border-b-2 border-slate-100 p-3'>
      <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Email Adrress</label>
      <input type="text" className='text-xl rounded-md py-2 px-1 font-medium'placeholder='jondoes@gmail.com' />
    </div>
    <div className='flex flex-col w-4/5  sm:w-1/2 mx-auto  border-b-2 border-slate-100 p-3'>
    <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Message</label>
    <textarea name="" id="" rows={4} cols={20} placeholder='Write Your Message Here' className='text-xl rounded-md p-1'></textarea>
   
    </div>

    <div className='text-xl mt-4'><button className='bg-gray-400 p-3 rounded-sm font-serif'>Send message</button></div>
    

    
   </form>
   </div>
  )
}
