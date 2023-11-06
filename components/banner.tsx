'use client'
import styles from './place.module.css'
import Image from "next/image"

export default function Banner(){
    return(
    <>
    <div className="max-w-[1600px] flex flex-wrap mx-auto">
        <div className="border-t-black border-[1px] relative">
            <div className="">
                <a href="/" target='_blank' className='flex items-center justify-end w-full h-[190px] m-[10px_0]'><img src="/images/banner.jpg" alt="배너" className='max-w-full align-middle' /></a>
            </div>
         </div>
    </div>
    </>
    )
}