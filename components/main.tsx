'use client'
import Image from 'next/image'

export default function Main(){
    return(
        <>
    <div className='w-full h-full relative'>
    <div className='max-w-[1600px] flex flex-wrap mx-auto p-0 relative'>
        <div className='w-full p-[40px_0_40px] border-t-0 border-b-[1px] mt-0 border-black'>
            <div className='w-[45%]'>
             <h3 className='font-semibold block -mt-[2px] text-[40px]'>국립현대미술관 관람 예약 바로가기</h3>
            </div>
            <div className='w-[55%] mt-0 text-right absolute top-[35px] right-0'>
                    <button type="button" className='p-[0_30px] text-[15px] font-semibold rounded-3xl h-12 leading-[46px] align-middle text-center cursor-pointer bg-black text-white'>전시 관람 예약하기</button>
                    <div className='mt-[10px]'>
                    <button type="button" className='p-[0_30px] text-[15px] font-semibold rounded-3xl h-12 leading-[46px] align-middle text-center cursor-pointer bg-white text-black border-black border-[1px]'>자주 묻는 질문 바로가기</button>
                    </div>
            </div>
            <div className=''>
                <ul className='mt-[11px]'>
                    <li className='font-semibold'>화요일-일요일 10:00-18:00 (월요일 서울 개관)</li>
                    <li className='font-semibold'>서울·덕수궁:수요일, 토요일 야간개장 10:00-21:00</li>
                </ul>
            </div>
            <div className='text-right inline-block absolute top-40 right-0'>
                <div className='align-middle w-auto h-5 border-0 cursor-pointer mt-[1px] bg-[url("/public/images/icon_dialog_closeL.png")] bg-no-repeat'></div>
            </div>
        </div>
        <div className='p-[40px_0_99px]'>
            <div className="mainimg-wrap">
                <img src="/images/main.jpg" alt="[덕수궁]가장 진지한 고백: 정욱진 회고전" width={1500} height={500}/>
                <div className='mt-[35px] flex justify-between'>
                    <div className=''>
                        <p className='text-[40px] mt-0 font-semibold'>[덕수궁]가장 진지한 고백: 정욱진 회고전</p>
                        <span className='text-[15px] font-semibold'>2023.9.14-2024.02.12</span>
                    </div>
                    <button type="button" className='ml-0 inline-block relative align-middle h-12 p-[0_30px] border-[1px] border-black leading-[46px] rounded-[24px] cursor-pointer bg-white text-black'>전시 예약 바로가기</button>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}