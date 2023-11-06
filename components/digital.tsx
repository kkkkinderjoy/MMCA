'use client'
export default function Digital(){
   return(
    <>
    <div className="dgsection">
            <div className="dgsection-wrap">
                <div className="title">
                    <h3>디지털미술관</h3>
                    <a href="#">디지털미술관 모두 보기<i className="icon more"></i></a>
                </div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/media1.png" alt="슬라이드1"/>
                                </div>
                                <div className="info">
                                    <span>MMCA TV</span>
                                    <p>청각장애인을 위한 수어 전시감상 «동녘에서 거닐다: 동산 박주환 컬렉션 특별전»</p>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                    <img src="images/media2.png" alt="슬라이드2" />
                                    </div>
                                <div className="info">
                                    <span>MMCA TV</span>
                                    <p>국립현대미술관 서울 10년, 새로운 미래를 위한 캠페인 “내일을 위해”</p>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                    <img src="images/media3.png" alt="슬라이드3"/>
                                    </div>
                                <div className="info">
                                    <span>MMCA TV</span>
                                    <p>[오늘, 이 작품] 공성훈ㅣ먼지 그림 (뒷산에서)ㅣ1996</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </>
   )
}