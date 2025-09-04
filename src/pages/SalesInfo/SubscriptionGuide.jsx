import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";

import Ready from "../../components/Ready/Ready";



const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    // { title: "청약안내문", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "오피스텔분양광고", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
        <Helmet>
          <title>밴처밸리 푸르지오 - 오피스텔분양광고</title>
          <meta
            name="description"
            content="대구 동구 신천동 밴처밸리 푸르지오 청약방법을 확인하세요. 청약 자격, 신청 절차, 준비서류 및 유의사항을 상세히 안내합니다."
          />
          <link
            rel="canonical"
            href="https://www.a7lashare.com/SalesInfo/SubscriptionGuide"
          />
          <meta name="robots" content="index,follow" />
        </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        벤처밸리 푸르지오- 오피스텔 분양광고
      </h1>
      <p className={styles.screenReaderOnly}>
        벤처밸리 푸르지오 분양 전 필수 오피스텔 분양광고를 확인하세요. 청약
        자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을
        정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수
        있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>벤처밸리 푸르지오가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="벤처밸리 푸르지오청약제도 변경안내 이미지1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      /> */}


      <Ready/>




      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
