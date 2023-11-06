'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import styles from './today.module.css'
import Image from "next/image"

export default function Today () {
    SwiperCore.use([Navigation, Scrollbar, Autoplay]);
    return(
        <>
        <div className="max-w-[1600px] flex flex-wrap mx-auto">
            <div className='w-full border-t-[1px] border-black relative p-[40px_0_99px]'>
            <div className="">
                <div className="mb-10">
                    <h3 className='inline-block font-semibold text-[28px]'>전시</h3>
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mb-[45px]">
                        <ul className='flex items-center'>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>전체</a></li>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>서울</a></li>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>과천</a></li>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>덕수궁</a></li>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>청주</a></li>
                         <li className='p-[0_15px]'><a href="#" className='text-[28px] text-[#949494] font-semibold text-center transition-colors duration-200 border-b-[1px] border-black'>어린이미술관</a></li>
                        </ul>
                    </div>
                <div className="more"><a href="#" className='inline-block absolute top-[58px] right-0 text-[15px]'>전시모두보기<i className="-mt-[1px] ml-2 top-[58px] w-1 h-2 bg-[url('/public/images/icon_btnMore.svg')] bg-no-repeat bg-contain"></i></a></div>
                </div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t1.png" alt="슬라이드1" />
                                </div>
                                <div className="info">
                                    <span>청주</span>
                                    <p>국립현대미술관 청주 다원예술 2023 릴레이 퍼포먼스</p>
                                    <span>2023-08-04~2023-08-25</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t2.png" alt="슬라이드2" />
                                </div>
                                <div className="info">
                                    <span>서울</span>
                                    <p>아피찻퐁 위라세타쿤: 2023 서울국제실험영화페스티벌 인디비주얼</p>
                                    <span>2023-07-21~2023-09-03</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t3.jpg" alt="슬라이드3" />
                                </div>
                                <div className="info">
                                    <span>청주</span>
                                    <p>국립현대미술관 청주 다원예술 2023 릴레이 퍼포먼스</p>
                                    <span>2023-08-04~2023-08-25</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t4.gif" alt="슬라이드4" />
                                </div>
                                <div className="info">
                                    <span>서울</span>
                                    <p>국립현대미술관 다원예술 2023: 전자적 숲; 소진된 인간</p>
                                    <span>2023-05-26~2024-02-25</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t5.png" alt="슬라이드5" />
                                </div>
                                <div className="info">
                                    <span>과천</span>
                                    <p>동녘에서 거닐다: 동산 박주환 컬렉션 특별전</p>
                                    <span>2023-05-18~2024-02-12</span>
                                </div>
                            </a>
                            <button type="button"><i className="icon headphon"></i>오디오가이드</button>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/slide_t6.jpg" alt="슬라이드6" />
                                </div>
                                <div className="info">
                                    <span>서울</span>
                                    <p>게임사회</p>
                                    <span>2023-05-12~2023-09-10</span>
                                </div>
                            </a>
                            <button type="button"><i className="icon headphon"></i>오디오가이드</button>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}