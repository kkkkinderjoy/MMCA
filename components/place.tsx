'use client'
import Image from "next/image"

export default function Header(){
    return(
        <>
         <div className="max-w-[1600px] flex flex-wrap mx-auto">
         <div className='w-full border-t-[1px] border-black relative p-[40px_0_99px]'>
            <div className='mt-5'>
                <h3 className='font-semibold text-[26px]'>미술관</h3>
            </div>
            <div className='mt-[38px]'>
                <ul className='flex justify-between'>
                    <li className='p-0 w-[23%] mb-[1rem]'><a href="#" className='mb-[15px]'><img src="images/placeimg1.jpg" alt="서울" width={400} height={400} className='max-w-full mx-auto'/></a>
                    <div className='info'>
                        <p className='text-[28px] inline-block w-[80%] mb-[0.5rem] font-semibold'>서울</p>
                        <span className='block mt-2 mb-[0.5rem]'>월요일,화요일,목요일,금요일,일요일 10:00–18:00 <br/> 수요일, 토요일 야간개장 10:00–21:00 </span>
                        <div className="m-[16px_0_0_-2px]">
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">전시</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">필름앤비디오</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">다원예술</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">교육</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">이벤트</a></span> 
                        </div>
                    </div>
                    </li>
                    <li className='p-0 w-[23%] mb-[1rem]'><a href="#"><img src="/images/placeimg2.jpg" alt="과천" width={400} height={400}/></a>
                    <div className='info'>
                        <p className='text-[28px] inline-block w-[80%] mb-[0.5rem] font-semibold'>과천</p>
                        <span className='block mt-2 mb-[0.5rem]'>화요일–일요일(월요일 휴관), 10:00–18:00  </span>
                        <div className="m-[16px_0_0_-2px]">
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">전시</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">교육</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">어린이미술관</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">이벤트</a></span> 
                        </div>
                    </div>
                    </li>
                    <li className='p-0 w-[23%] mb-[1rem]'><a href="#"><img src="/images/placeimg3.jpg" alt="덕수궁" width={400} height={400}/></a>
                    <div className='info'>
                        <p className='text-[28px] inline-block w-[80%] mb-[0.5rem] font-semibold'>덕수궁</p>
                        <span className='block mt-2 mb-[0.5rem]'>화요일,목요일,금요일,일요일(월요일 휴관), 10:00–18:00<br/> 수요일, 토요일 야간개장 10:00–21:00 </span>
                        <div className="m-[16px_0_0_-2px]">
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">전시</a></span> 
                        </div>
                    </div>
                    </li>
                    <li className='p-0 w-[23%] mb-[1rem]'><a href="#"><img src="/images/placeimg4.jpg" alt="청주" width={400} height={400}/></a>
                    <div className='info'>
                        <p className='text-[28px] inline-block w-[80%] mb-[0.5rem] font-semibold'>청주</p>
                        <span className='block mt-2 mb-[0.5rem]'>화요일-일요일(월요일 휴관), 10:00–18:00</span>
                        <div className="m-[16px_0_0_-2px]">
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">전시</a></span> 
                            <span className='inline-block m-[4px_2px] h-[25px] p-[0_10px] border-[1px] border-black rounded-[13px] leading-[23px] bg-white transition duration-200 cursor-pointer'><a href="#">이벤트</a></span> 
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
         </div>
        </>
    )
}