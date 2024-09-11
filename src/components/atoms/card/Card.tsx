import React from 'react'
import { Button } from '../../ui/button'
import { Ellipsis,Logs,Paperclip,MessageSquareText } from 'lucide-react'


const Card = () => {
  return (
    
<div className=' w-[320px] h-[178px] border-2 rounded-[12px] mx-auto px-[12px] py-[12px] mb-3 '>
    {/* 1 */}
    <ul className='flex justify-between pb-2'>
        <li>
            <p className='text-[14px] font-black'>Design system update</p>
            <p className='text-[12px]'>Dribbble marketing</p>
        </li>
        <li className='ml-[20px] flex justify-center items-center w-[26px] h-[26px] rounded-[50%] bg-[#ffffff] border-[.5px] border-[#c2c2c2]'>
            <Ellipsis size={20} strokeWidth={0.75} />
        </li>
    </ul>
    {/* 2 */}
    <ul className='flex justify-between items-center pb-1'>
        <li className='flex items-center w-[76px] h-[23px] '>
            <Logs />
            <p className='text-[14px] ml-1'>Progress</p>
        </li>
        <li>
            <p className='text-[14px] font-bold '>7/10</p>
        </li>

    </ul>
    {/* 3 */}
    <ul className='w-[100%] bg-[#ededed] h-1 mt-2'>
        <li className='w-[70%] bg-[#ffa048] h-1 '></li>
    </ul>
    {/* 4 */}
    <ul className='flex justify-between py-4 '>
        <Button className='bg-[#f4f4f7] text-[#878da7] font-bold'> {Date.now()} </Button>

        <ul className='flex hidden'>
            <li className='flex items-center mr-2'>
                <MessageSquareText size={14} className='text-[#a2a3a4]' />
                <p className='text-[10px] ml-1 font-bold text-[#a2a3a4]'>3</p>
            </li>
            <li className='flex items-center'>
                <Paperclip size={14} className='text-[#a2a3a4]' />
                <p className='text-[10px] ml-1 font-bold text-[#a2a3a4]'>3</p>

            </li>
        </ul>
        
        <ul className='flex relative  '>
            <li className='z-[1] bg-red-700 relative left-4 w-[30px] h-[30px] rounded-[50%] border-2 border-white'>
            </li>

            <li className='bg-black z-[2] relative left-2  w-[30px] h-[30px] rounded-[50%] border-2 border-white'>
            </li>

            <li className='bg-white z-[3]  flex justify-center items-center w-[30px] h-[30px] rounded-[50%] border-2 border-[#a2a3a4] font-bold text-[12px]'>
            +3
            </li>
        </ul>
    </ul>
    {/* 5 */}
</div>
  )
}

export default Card