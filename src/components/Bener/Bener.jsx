import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="벤처밸리 푸르지오-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '밴처밸리 푸르지오' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓는 순간, 본연으로 돌아가는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대구 동구 신천동, 동대구역 인접의 새로운 주거 기준.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 밴처밸리 푸르지오와 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업안내' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '입주자모집공고' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    신천동의 새 출발, 밴처밸리 푸르지오.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    동대구역, 4호선 트램(예정) 교통망으로 더 가까워지는 생활권.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브랜드 명성과 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    밴처밸리 푸르지오
                </div>
            </>
        );
    } else if (text === '입지안내' || text === '프리미엄') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통·학군·생활 인프라 모두 가까운 최적의 입지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수성 학군, 신설 초·중학교, 트램 호재까지 밴처밸리 푸르지오에서 누리세요.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    밴처밸리 푸르지오, 대구 동구 신천동 핵심 입지에서 찾아옵니다.
                </div>
            </>
        );
    }
}