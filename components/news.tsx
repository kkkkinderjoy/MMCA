'use client'

export default function News () {
    return(
        <>
        <div className="midbanner">
            <div className="midbanner-wrap">
                <a href="#"><img src="images/residency_PC.jpg" alt="레지던시" /></a>
            </div>
        </div>
        <div className="newssection">
            <div className="newssection-wrap">
                <div className="title">
                    <h3>MMCA 뉴스레터</h3>
                    <a href="#">MMCA 뉴스레터 모두 보기<i className="icon more"></i></a>
                </div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                <img src="images/newlet1.png" alt="슬라이드1" />
                                </div>
                                <div className="info">
                                    <p>포커스</p>
                                    <span>김구림, 피카소, 정연두, 장욱진! 하반기 주목할 전시들</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                    <img src="images/newslet2.png" alt="슬라이드2" />
                                </div>
                                <div className="info">
                                    <p>미술관 포커스</p>
                                    <span>미술관에 열린 예술 커뮤니티 ‹MMCA 아트살롱›</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                    <img src="images/newslet3.png" alt="슬라이드3" />
                                </div>
                                <div className="info">
                                    <p>미술관 플러스</p>
                                    <span>“국립현대미술관에서 받는 예술적 영감” ‹#helloMMCA› 4기 발족</span>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <div className="box">
                                    <img src="images/newslet4.png" alt="슬라이드4" />
                                </div>
                                <div className="info">
                                    <p>소장품 더보기</p>
                                    <span>자연에 기반한 기하학적 추상, 유영국 ‹산›</span>
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