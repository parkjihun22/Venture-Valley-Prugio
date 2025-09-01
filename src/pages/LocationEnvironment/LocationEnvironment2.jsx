import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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
        <title>밴처밸리 푸르지오 - 프리미엄</title>
        <meta
          name="description"
          content="대구 동구 신천동 밴처밸리 푸르지오 프리미엄을 확인하세요. 동대구역 복합환승센터·도시철도 4호선(트램 예정), 신천 수변공원·수성못, 신설 초·중학교(초품아), 풍부한 생활·문화 인프라의 가치를 안내합니다."
        />
        <link rel="canonical" href="https://tradexmeds.com/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        벤처밸리 푸르지오- 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        벤처밸리 푸르지오만의 차별화된 프리미엄을 만나보세요. 고급스러운
        디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해
        푸르지오만의 독보적인 가치를 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>동대구의 눈부신 가치 위에</div>
        <div>밴처밸리 푸르지오의 새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* <img
        src={page1}
        className={styles.image3}
        alt="벤처밸리 푸르지오-image1"
      /> */}
      <Ready/>
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
