import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='mb-36'>
        <div className='max-w-7xl m-auto bg-[#3A499C] rounded-tr-[50px]  rounded-bl-[50px] overflow-hidden grid grid-cols-2 items-center '>
<div>
    <Image src={'/user.png'} width={608} height={434} alt='user' />
</div>
<div>
    <h2 className='text-[56px] text-[#FFFFFF] font-bold'>Безопасностьс первого взгляда</h2>
    <p className='text-[20px] text-[#FFFF] mt-4 mb-8'>Быстрое и безопасное решение <br/>биометрической идентификации для банкови <br/> финансового сектора</p>
    <button className='bg-[#D94540] w-[306px] text-[20px] text-[#FFFF] cursor-pointer font-bold h-[59px] rounded-full'>Подключайтесь сейчас</button>
</div>
        </div>
    </div>
  )
}
