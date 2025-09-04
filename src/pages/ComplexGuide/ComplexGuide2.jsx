import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";




const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>밴처밸리 푸르지오 - 호수배치도</title>
        <meta
          name="description"
          content="대구 동구 신천동 밴처밸리 푸르지오 호수배치도를 통해 세대별 위치와 전망, 일조 방향, 프라이버시를 고려한 설계를 확인하세요."
        />
        <link rel="canonical" href="https://www.a7lashare.com/ComplexGuide/detailintro" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="밴처밸리 푸르지오" />
        <meta property="og:title" content="밴처밸리 푸르지오 - 호수배치도" />
        <meta
          property="og:description"
          content="밴처밸리 푸르지오 호수배치도: 세대별 위치, 전망, 일조, 프라이버시를 고려한 동·호수 설계를 한눈에 확인하세요."
        />
        <meta property="og:url" content="https://www.a7lashare.com/ComplexGuide/detailintro" />
        <meta property="og:image" content="https://www.a7lashare.com/img/og/complex.jpg" />
      </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      <h1 className={styles.screenReaderOnly}>
        벤처밸리 푸르지오- 호수배치도
      </h1>
      <p className={styles.screenReaderOnly}>
        호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이
        원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게
        돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>벤처밸리 푸르지오가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="벤처밸리 푸르지오호수배치도-image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>


  

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
