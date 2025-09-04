import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>벤처밸리 푸르지오 - 홍보영상</title>
			<meta
				name="description"
				content="대구 동구 신천동 밴처밸리 푸르지오 홍보영상을 통해 세대 설계, 첨단 커뮤니티, 쾌적한 자연환경과 입지 프리미엄을 생생하게 확인하세요."
			/>
			<link rel="canonical" href="https://www.a7lashare.com/Brand/video" />
			<meta name="robots" content="index,follow" />

			{/* Open Graph */}
			<meta property="og:type" content="video.other" />
			<meta property="og:site_name" content="벤처밸리 푸르지오" />
			<meta property="og:title" content="벤처밸리 푸르지오 - 홍보영상" />
			<meta
				property="og:description"
				content="밴처밸리 푸르지오 홍보영상: 대구 동구 신천동 입지의 프리미엄, 고급 커뮤니티, 쾌적한 자연환경을 영상으로 확인하세요."
			/>
			<meta property="og:url" content="https://www.a7lashare.com/Brand/video" />
			<meta property="og:image" content="https://www.a7lashare.com/img/og/video.jpg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="벤처밸리 푸르지오 - 홍보영상" />
			<meta
				name="twitter:description"
				content="대구 동구 신천동 밴처밸리 푸르지오 홍보영상: 첨단 설계, 프리미엄 입지, 쾌적한 자연환경을 영상으로 만나보세요."
			/>
			<meta name="twitter:image" content="https://www.a7lashare.com/img/og/video.jpg" />
			<meta name="twitter:url" content="https://www.a7lashare.com/Brand/video" />
			</Helmet>


			
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

						{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
						<h1 className={styles.screenReaderOnly}>벤처밸리 푸르지오- 홍보영상</h1>
						<p className={styles.screenReaderOnly}>벤처밸리 푸르지오의 홍보영상을 통해 단지의 매력적인 디자인과 최신 편의시설을 생생하게 만나보세요. 현대적 감각과 고급스러움을 결합한 주거 환경, 용인의 중심에서 경험할 수 있는 새로운 라이프스타일을 영상으로 확인하세요.
						</p>	

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>벤처밸리 푸르지오가 눈부신 가치 위에</div>
                <div>새로운 자부심으로 찾아옵니다.</div>
            </div>

			<div className={styles.videoContainer}>
				<YouTube
					videoId="OACqO8K3F9g"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
