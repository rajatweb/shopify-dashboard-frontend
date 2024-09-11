import React from 'react'
import CardWrapper from '@/components/atoms/card/Card-wrapper'
import Card from '@/components/atoms/card/Card'
import { Button } from '@/components/ui/button'
import { Grip, CirclePlus, Ellipsis } from 'lucide-react'
const page = () => {
  return (
    <div>
      <nav className='flex  justify-between items-center border-2 border-black'>
        {/* 1 */}
        <ul className='flex ml-[10px]'>
          <li className='flex items-center '>
            <Grip size={18} />
            <p className='ml-1 text-[15px] font-semibold text-[#1C1D22]'>Board view</p>
          </li>
          <li className='ml-[20px] flex items-center text-[12px] font-semibold text-[#c2c2c2]'>
            <CirclePlus size={20} strokeWidth={0.75} />
            <p className='ml-1 text-[15px] font-semibold text-[#c2c2c2]'>Add view</p>
          </li>
        </ul>
        {/* 2 */}
        <ul className='flex items-center'>
          <li className='text-[15px] font-semibold text-[#1C1D22]'>Filter</li>
          <li className='ml-[20px] text-[15px] font-semibold text-[#c2c2c2]'>Sort</li>
          <li className='ml-[20px] flex justify-center items-center w-[26px] h-[26px] rounded-[50%] bg-[#ffffff] border-[.5px] border-[#c2c2c2]'><Ellipsis size={20} strokeWidth={0.75} /></li>
          <Button className='ml-[20px] w-[140px] h-[38px] rounded-[19px] bg-black text-[#ffffff] text-[14px]'>New Template</Button>
        </ul>
      </nav>
      <CardWrapper>
        {/* nav */}
        <nav className=' text-[14px]'>
          <ul className='flex justify-between py-2 px-4'>
            <li className='font-black text-[#a2a3a4]'> To Do (4)</li>
            <li className='font-black flex'><CirclePlus size={20} strokeWidth={0.75} /> <p>Add New Task</p></li>
          </ul>
        </nav>
        {/* card */}
        <Card />
        <Card />
      </CardWrapper>
    </div>
  )
}

export default page