import React from 'react'
import qizi from '../assets/images/qizi.png'
const Jasur = () => {
  return (
    <>
    <h1 className='text-center text-[50px] mb-[100px]'>User Card</h1>
    <div className='bg-[#FCF2E5] w-[638px] h-[1000px] ' >
        <img className='pt-[63px] ml-[48px]' src={qizi} alt="" />
        <p className='font-black text-[42px] text-center pt-[87px]'>Emily Johnson</p>
        <p className='text-2xl w-[246px] text-center m-auto mt-[30px]'>Product Manager
Product Development</p>
    </div>
    </>
  )
}

export default Jasur