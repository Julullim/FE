import { AnimatePresence, motion, wrap } from "framer-motion";
import React, { useState } from "react";
import { Mobile } from "../../routes/Layout";
import { useDrag } from "react-use-gesture" // react-use-gesture 라이브러리에서 useDrag 훅을 가져옵니다.

// 이미지 배열 정의
const imgs = [
    "src/assets/background1.png",
    "src/assets/JulAllim.png",
];

const ImgSlider: React.FC = () => {
    // useState를 함수 내부에 선언
    const [visible, setVisible] = useState(0);
    const [back, setBack] = useState(false);

    // 이미지 처리 
    const imageIndex = wrap(0, imgs.length, visible);

    // 스와이프 제스처 설정
    const bind = useDrag((state) => {
        if (state.offset[0] < -100) {
            nextPlease();
        } else if (state.offset[0] > 100) {
            prevPlease();
        }
    });

    // 다음 이미지로 이동하는 함수
    const nextPlease = () => {
        // next 때는 false
        setBack(false);
        setVisible((prev) =>
            prev === imgs.length - 1 ? imgs.length - 1 : prev + 1
        );
    };

    // prev 버튼
    const prevPlease = () => {
        // prev 때는 true
        setBack(true);
        setVisible((prev) => (prev === 0 ? 0 : prev - 1));
    };

    return (
        <Mobile>
            <div className="relative h-[25vh] overflow-hidden">
                <AnimatePresence custom={back}>
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${imgs[imageIndex]})`,
                        }}
                        custom={back}
                        variants={boxVariants}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key={visible}
                        {...bind()} // useDrag 훅의 바인딩을 적용
                    />
                </AnimatePresence>
                <button 
                    onClick={prevPlease} 
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-0 bg-transparent border-none"
                >
                    <img 
                        src="src/assets/common/etc/white_arrow.png" 
                        alt="Previous"
                        className="w-8 h-8 rotate-180"
                    />
                </button>
                <button 
                    onClick={nextPlease} 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-0 bg-transparent border-none"
                >
                    <img 
                        src="src/assets/common/etc/white_arrow.png" 
                        alt="Next"
                        className="w-8 h-8"
                    />
                </button>
            </div>
        </Mobile>
    );
};

// 애니메이션 변수 설정
const boxVariants = {
    entry: (back: boolean) => ({
        // back이 true일 때 (이전 슬라이드로 이동할 때) 슬라이드를 왼쪽에서 진입
        x: back ? "-100%" : "100%",
        opacity: 0,
        scale: 0.9, // 이미지 크기를 약간 축소하여 진입
    }),
    center: {
        // 중앙에 도달하면 위치를 0으로 설정하고 투명도를 1로 설정하여 표시
        x: "0%",
        opacity: 1,
        scale: 1, // 이미지 크기를 원래 크기로 설정
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { type: "spring", stiffness: 300, damping: 30 },
        },
    },
    exit: (back: boolean) => ({
        // back이 true일 때 (이전 슬라이드로 이동할 때) 슬라이드를 오른쪽으로 퇴장
        x: back ? "100%" : "-100%",
        opacity: 0,
        scale: 1.1, // 이미지 크기를 약간 확대하여 퇴장
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { type: "spring", stiffness: 300, damping: 30 },
        },
    }),
};

export default ImgSlider;
