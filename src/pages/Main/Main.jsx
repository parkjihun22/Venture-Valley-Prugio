import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import DarkComplexSection from "../../components/DarkComplexSection/DarkComplexSection";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";
import MobileNewsSection from "../../components/MobileNewsSection/MobileNewsSection";
import newsLists from "../../NewsList"

import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `브랜드 신축 대단지 프리미엄`,
    text2: `아파트 540세대 + 오피스텔 56실 규모<br/>
            동대구역 인접, 수성 생활권 핵심 입지`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `광역 교통망 호재`,
    text2: `동대구역 복합환승센터 인접<br/>
            도시철도 4호선(트램·예정) 연결<br/>
            전국 어디든 빠른 접근성`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `의료·생활 인프라 풍부`,
    text2: `대구파티마병원·의료기관 인접<br/>
            백화점·쇼핑몰·카페거리 원스톱 생활<br/>
            풍부한 도심 인프라`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `쾌적한 자연·문화 환경`,
    text2: `신천 수변공원·수성못 생활권<br/>
            신설 초·중학교 예정, 문화·여가 인프라 확충`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];



const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (생년월일, 거주지역 필드 추가)
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    birthday: "",
    residence: "",
    message: "", // ✅ 누락 방지
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 팝업 열릴 때 배경 스크롤 잠금 + 포커스 트랩(접근성)
  useEffect(() => {
    if (isInterestPopupOpen) {
      // 배경 스크롤 잠금
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // 포커스 트랩
      const modal =
        document.querySelector('[role="dialog"]') ||
        document.querySelector("[data-interest-popup]") ||
        document.querySelector(".InterestPopup") ||
        document.body; // 안전망

      const focusable = modal.querySelectorAll?.(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable?.[0];
      const last = focusable?.[focusable.length - 1];

      const onKeyDown = (e) => {
        if (e.key !== "Tab" || !first || !last) return;
        if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // tab
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      // 포커스 진입
      setTimeout(() => {
        first?.focus?.();
      }, 0);

      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        document.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [isInterestPopupOpen]);

  // PC에서만 페이지 전환 스크롤 이벤트 처리 (원상복구: wheel 방식)
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      // 폼 포커스/팝업 오픈 시에는 페이지 스냅 이동 방지
      const activeTag = document.activeElement?.tagName;
      const isFormFocus = ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(activeTag || "");
      if (isFormFocus || isInterestPopupOpen) return;

      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile, isInterestPopupOpen]);

  // PC에서 페이지 번호에 따라 스크롤 이동 (원상복구)
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>

      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="벤처밸리 푸르지오-mainimage1"
            />
            <div className={styles.overlay}></div>
                        <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                브랜드 평판 1위 푸르지오{" "}
                <span className={styles.greyText}>브랜드 프리미엄</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>대구가 기다린 미래 프리미엄</div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>
                  밴처밸리 푸르지오
                </div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                  aria-label="관심고객 등록 열기"
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="벤처밸리 푸르지오관심고객등록"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  벤처밸리 푸르지오 중요 POINT
                </div>
                <div className={styles.text3}>
                - 동대구역 복합환승센터 인접, 도시철도 4호선(트램·예정) 연결로 우수한 광역 교통망<br />
                - 대구파티마병원·동대구로 의료기관 등 종합 의료 인프라 인접, 안심 생활환경<br />
                - 신천 수변공원·수성못 등 도심 속 풍부한 녹지와 쾌적한 자연환경<br />
                - 백화점·대형마트·카페거리 등 생활·문화 인프라 밀집
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                    className={styles.popupBtn}
                    aria-label="관심고객 등록하기"
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="벤처밸리 푸르지오브랜드소개-image2"
                  loading="lazy"
                  decoding="async"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>
                    최고의 브랜드 아파트 <br />
                    벤처밸리 푸르지오
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    벤처밸리 푸르지오가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="벤처밸리 푸르지오 입지환경 소개 이미지2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  벤처밸리 푸르지오에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="벤처밸리 푸르지오아파트 조감도 이미지"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} loading="lazy" decoding="async" />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="벤처밸리 푸르지오 브랜드 소개 이미지4"
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.text1}>벤처밸리 푸르지오</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* ================== 방문예약 섹션 (PC) ================== */}
          <div className={styles.pcVisitContainer}>
            {/* 상단 타이틀 영역 (좌: 제목/부제, 우: 안내문구) */}
            <div className={styles.pcTitleRow}>
              <div className={styles.leftTitle}>
                <h2>벤처밸리 푸르지오</h2>
                <p>방문예약</p>
              </div>
              <div className={styles.rightText}>
                방문예약 등록 시 모델하우스 주소 SMS발송 및
                <br />
                잔여세대를 안내드립니다.
              </div>
            </div>

            {/* 입력 폼 */}
            <form
              className={styles.pcVisitForm}
              action="https://formspree.io/f/movnldqr"
              method="POST"
            >
              <label htmlFor="name">
                고객명 <span className={styles.redStar}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="고객명"
                value={registration.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phone">
                연락처 <span className={styles.redStar}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="010-0000-0000"
                value={registration.phone}
                onChange={handleInputChange}
                required
                inputMode="tel"
                pattern="^01[0-9][-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$"
                title="예: 01012345678 또는 010-1234-5678"
              />

              {/* 허니팟 (봇 스팸 방지) */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className={styles.hiddenHoney}
              />

              <label htmlFor="message">
                문의 내용
              </label>
              <textarea
                name="message"
                placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
                value={registration.message}
                onChange={handleInputChange}
                rows={5}
              />

              <button type="submit">등록하기</button>
            </form>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  벤처밸리 푸르지오
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    벤처밸리 푸르지오가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="벤처밸리 푸르지오오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
            <img
              src={mobileImageMain}
              className={styles.mainImage}
              alt="벤처밸리 푸르지오 모바일 메인 이미지"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox1}>
              <div className={styles.mainImageTextSub1}>
              동대구의 새로운 시작, 높은 미래가치<br/>
              브랜드 평판 1위 푸르지오
              <br />
              <span className={styles.greyText1}>브랜드 프리미엄</span>
              <br />
            </div>
            <div className={styles.mainImageTitleBox1}>
              <div className={styles.mainImageText1}>
                밴처밸리 푸르지오
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
            벤처밸리 푸르지오 중요 POINT
          </div>
          <div className={styles.text3}>
          - 동대구역 복합환승센터 인접, 도시철도 4호선(트램·예정)으로 광역 교통망<br />
          - 대구파티마병원·동대구로 의료기관 등 종합 의료 인프라 인접<br />
          - 신천 수변공원·수성못 등 녹지와 공원 인접, 쾌적한 자연환경<br />
          - 백화점·대형마트·카페거리 등 풍부한 생활·문화 인프라 밀집
          </div>
            <div className={styles.text4}>
              {/* 외부 링크대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
                aria-label="관심고객 등록하기"
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>
          <MobileOverviewSection />
          {/* ─── 2.5. 중간에 풀-스크린 이미지 섹션 ───
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="단지 전경 추가 이미지"
             className={styles.middleImage}
           />
         </div> */}

          {/* ② DarkComplexSection 추가 */}
          <section className={styles.darkSection}>
            <DarkComplexSection />
          </section>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                대구의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  벤처밸리 푸르지오가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="벤처밸리 푸르지오모바일 입지안내 이미지"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                벤처밸리 푸르지오에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 <br /> 벤처밸리 푸르지오에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="벤처밸리 푸르지오모바일 조감도 이미지"
              loading="lazy"
              decoding="async"
            />
          </div>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div> */}

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="벤처밸리 푸르지오브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}
          <MobileNewsSection newsList={newsLists} />

          {/* 모바일 방문예약 섹션 */}
          <div className={styles.mobileVisitContainer}>
            <h2>벤처밸리 푸르지오</h2>
            <p className={styles.mobileSubTitle}>방문예약</p>
            <p className={styles.mobileInfoText}>
              방문예약 등록 시 모델하우스 주소 SMS발송 및<br />
              잔여세대를 안내드립니다.
            </p>

            <form
              className={styles.mobileVisitForm}
              action="https://formspree.io/f/movnldqr"
              method="POST"
            >
              <label htmlFor="name">
                고객명 <span className={styles.redStar}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="고객명"
                value={registration.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phone">
                연락처 <span className={styles.redStar}>*</span>
              </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-1234-5678 또는 01012345678"
                  value={registration.phone}
                  onChange={handleInputChange}
                  required
                  inputMode="tel"
                  pattern="^01[0-9][-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$"
                  title="예: 01012345678 또는 010-1234-5678"
                />

              {/* 허니팟 (봇 스팸 방지) */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className={styles.hiddenHoney}
              />

              <label htmlFor="message">
                문의 내용
              </label>
              <textarea
                name="message"
                placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
                value={registration.message}
                onChange={handleInputChange}
                rows={5}
              />

              <button type="submit">등록하기</button>
            </form>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="벤처밸리 푸르지오오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
