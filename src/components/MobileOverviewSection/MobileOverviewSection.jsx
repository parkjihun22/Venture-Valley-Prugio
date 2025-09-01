// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>밴처밸리 푸르지오</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대구광역시 동구 신천동 311-4 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 5층 ~ 지상 33층, 아파트 4개동 / 오피스텔 1개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84㎡ (84A·84B·84C)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>아파트 540세대, 오피스텔 56실</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지안내",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지안내 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지안내 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            동대구역 인접과 수성 생활권을 누리는<br />
            밴처밸리 푸르지오 프리미엄 라이프
          </p>
        </div>
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "동대구역·트램 호재, 미래가치 프리미엄",
      desc:
        "도시철도 4호선(트램·예정) 개통 예정<br/>동대구역 복합환승센터 인접<br/>수성 생활권 공유로 풍부한 생활·문화 인프라",
    },
    {
      img: slide2,
      title: "의료·생활 인프라 초근접 프리미엄",
      desc:
        "대구파티마병원, 동대구로 의료기관 접근성 우수<br/>쇼핑·문화시설 풍부<br/>생활 인프라 완비",
    },
    {
      img: slide3,
      title: "광역 교통망 프리미엄",
      desc:
        "동대구역(KTX·SRT) 도보권<br/>대구 도시철도 1호선·4호선(예정) 연계<br/>도시·광역 교통망으로 뛰어난 접근성",
    },
    {
      img: slide4,
      title: "교육·학군 프리미엄",
      desc:
        "신설 초·중학교 예정<br/>수성 학군 인접<br/>학세권과 생활권을 동시에",
    },
    {
      img: slide5,
      title: "브랜드 신축 단지 프리미엄",
      desc:
        "전용 84㎡ 중심 실속형 평면<br/>다양한 타입 선택지 제공",
    },
    {
      img: slide6,
      title: "대우건설 푸르지오 브랜드 가치",
      desc:
        "국내 대표 아파트 브랜드 푸르지오<br/>대우건설 시공, 2026년 4월 입주 예정",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>VENTURE VALLEY PRUGI BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
