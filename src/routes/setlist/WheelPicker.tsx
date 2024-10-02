import React, { useState, useRef, useEffect, useCallback } from 'react';

interface WheelPickerProps {
    options: any[];
    height: number;
    setFunc: (value: any) => void;
}

const WheelPicker: React.FC<WheelPickerProps> = ({ options, height, setFunc }) => {
    const [selectedID, setSelectedID] = useState<number>(0);
    const wheelPickerRef = useRef<HTMLDivElement>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // 스크롤 이벤트 핸들러 최적화
    const handleScroll = useCallback(() => {
        if (wheelPickerRef.current) {
            const scrollTop = wheelPickerRef.current.scrollTop;
            const index = Math.round(scrollTop / height);
            const selectedIndex = index < options.length ? index : options.length - 1;
            setSelectedID(selectedIndex);
        }
    }, [height, options.length]);

    useEffect(() => {
        if (options.length > 0) {
            setFunc(options[selectedID]);
        }
    }, [options, selectedID, setFunc]);

    useEffect(() => {
        const handleScrollWithRaf = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // requestAnimationFrame으로 스크롤 처리 최적화
            requestAnimationFrame(() => handleScroll());

            // 스크롤이 멈춘 후 selectedID에 대한 조정을 비동기로 처리
            scrollTimeout.current = setTimeout(() => {
                if (wheelPickerRef.current) {
                    wheelPickerRef.current.scrollTop = selectedID * height;
                }
            }, 200);
        };

        if (wheelPickerRef.current) {
            wheelPickerRef.current.addEventListener('scroll', handleScrollWithRaf);
        }

        return () => {
            if (wheelPickerRef.current) {
                wheelPickerRef.current.removeEventListener('scroll', handleScrollWithRaf);
            }
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [handleScroll, selectedID, height]);

    return (
        <div
            ref={wheelPickerRef}
            className="wheel-picker relative w-full h-full overflow-y-scroll scrollbar-hide text-center text-[130%]"
        >
            <div>&nbsp;</div>
            {options.length > 0 ? options.map((option, index) => (
                <div
                    key={index}
                    className={`wheel-option ${selectedID === index ? 'font-bold' : ''}`}
                >
                    {option.name ? option.name : option}
                </div>
            )) : <div>&nbsp;</div>}
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    );
};

export default WheelPicker;
