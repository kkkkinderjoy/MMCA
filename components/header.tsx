'use client'

export default function Header(){
    return(
    <>
    <div className='top-0 z-[100] w-full pt-10 bg-white transition-all duration-200'>
    <div className='flex flex-wrap max-w-[1600px] mx-auto border-b-[1px] border-black min-h-[60px]'>
        <div className='h-18'>
            <img src="/images/bg_logo_full.svg" alt="" /><a href="/" className='block w-[310px] h-18 mb-[25px] transition-all duration-500 ease-in'></a>
        </div>
        <div className='relative transition-all duration-200 w-full h-[90px]'>
            <ul className='flex items-center'>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px] pl-0'><a href="/" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">관람·참여</a>
                 <div className='h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white'>
                    <ul className='flex'>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>서울</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>과천</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>덕수궁</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>청주</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>어린이미술관</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>이벤트</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>통합예약</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>전시해설</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>레지던시</a></li>
                        <li><a href="/" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>미술은행</a></li>
                    </ul>
                 </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] font-semibold text-2xl text-center text-black active:text-gray-400">전시</a>
                 <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                    <ul className='flex'>
                        <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>현재전시</a></li>
                        <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>예정전시</a></li>
                        <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>과거전시</a></li>
                    </ul>
                 </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">교육</a>
                    <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                        <ul className='flex'>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>미술관교육소개</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>어린이</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>청소년</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>교사</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>성인</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>교육자료실</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>참여신청</a></li>
                        </ul>
                    </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">소장품</a>
                    <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                        <ul className='flex'>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>소장품 검색</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>소장품 탐색</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>보존과학</a></li>
                        </ul>
                    </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">미술연구</a>
                    <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                        <ul className='flex'>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>도서와 아카이브 </a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>연구</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>발간자료</a></li>
                        </ul>
                    </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">디지털미술관</a>
                    <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                        <ul className='flex'>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>메인</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>맞춤검색</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>오디오가이드</a></li>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>이용자갤러리</a></li>
                        </ul>
                    </div>
                </li>
                <li className='p-[40px_15px_10px] h-[90px] max-w-[210px]'><a href="#" className="block h-10 leading-[41px] text-2xl font-semibold text-center text-black active:text-gray-400">서울관 10 축제</a>
                    <div className="h-0 overflow-hidden absolute top-[90px] left-0 w-full border-[1px] border-b-black bg-white">
                        <ul className='flex'>
                            <li><a href="#" className='text-lg h-10 leading-[41px] p-[0_20px] font-semibold'>행사소개</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        <div className='absolute -top-[81px] right-0'>
            <ul>
                <li className='pr-[11px] font-normal inline-block align-middle text-black
                '><a href="/" className='flex w-[90px] h-[90px] justify-center items-center text-center font-semibold bg-black rounded-[50%] text-white border-[1px] border-[#000] text-[15px]'>MMCA <br />회원가입</a></li>
                <li className='p-[0_7.5px] h-[26px] pr-[11px] font-normal inline-block align-middle text-black
                '><a href="/" >로그인</a></li>
                <li className='-ml-[5px] p-[0_7.5px] h-[26px] pr-[11px] font-normal inline-block align-middle text-black
                '>
                    <select className='m-0 p-[0_10px_0_5px] border-0 bg-[url("/images/icon_select_arrow.svg")] bg-no-repeat bg-right  appearance-none font-normal text-[15px]'  title="언어선택">
                    <option value="/">한국어</option>
                    <option value="/">ENG</option>
                    <option value="/">中文</option>
                    <option value="/">日本語</option>
                    </select>
                    <button type="button" className='ml-[5px] p-[0_12px] h-[26px] align-top leading-6 text-[13px] relative inline-block max-w-full font-semibold border-black border-[1px] text-black rounded-3xl text-center bg-white cursor-pointer' title="선택된 언어로 화면 전환">Go</button>
                </li>
            </ul>
        </div>
        </div>
        <div className='absolute right-0 top-[76%] transform -translate-y-1/2'>
            <div className='inline-block w-10 h-10 cursor-pointer border-0 '></div>
        </div>
    </div>
</div>
        </>
    )
}