import React, { useState, useEffect, useRef } from 'react';

const SelectConcert: React.FC = () => {
    const [year, setYear] = useState<number>(2022);
    const [concert, setConcert] = useState<string>("");
    const [concerts, setConcerts] = useState<{ [key: number]: string[] }>({});
    const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
    const concertRefs = useRef<(HTMLDivElement | null)[]>([]);

    const years = [2019,2020,2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];

    useEffect(() => {
        setConcerts({
            2022: ["여름공연", "겨울공연"],
            2023: ["봄공연", "여름공연"],
            2024: ["가을공연", "겨울공연"],
        });
        setYear(2022); // 초기 설정
    }, []);

    // IntersectionObserver 설정
    useEffect(() => {
        const yearObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetYear = parseInt(entry.target.getAttribute('data-year') || "2022");
                        setYear(targetYear);
                        setConcert(""); // 연도 변경 시 공연 초기화
                    }
                });
            },
            { threshold: 0.6 } // 60% 이상 보이면 선택
        );

        yearRefs.current.forEach((ref) => {
            if (ref) {
                yearObserver.observe(ref);
            }
        });

        return () => {
            yearRefs.current.forEach((ref) => {
                if (ref) {
                    yearObserver.unobserve(ref);
                }
            });
        };
    }, [years]);

    useEffect(() => {
        const concertObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetConcert = entry.target.getAttribute('data-concert') || "";
                        setConcert(targetConcert);
                    }
                });
            },
            { threshold: 0.6 }
        );

        concertRefs.current.forEach((ref) => {
            if (ref) {
                concertObserver.observe(ref);
            }
        });

        return () => {
            concertRefs.current.forEach((ref) => {
                if (ref) {
                    concertObserver.unobserve(ref);
                }
            });
        };
    }, [concerts, year]);

    return (
        <div className="absolute w-full h-full">
            <div className='flex absolute w-full top-0 h-full pt-[2vh] pb-[6vh]'>
                <div className='absolute w-full text-[130%]'>
                    <br /><br />
                    <div className='rounded-lg bg-lightgray '>
                        &nbsp;
                    </div>
                </div>

                {/* 년도 선택 영역 */}
                <div className='overflow-y-scroll h-full w-full text-[130%] text-center scrollbar-hide relative'>
                    {years.map((yr, index) => (
                        <div
                            key={yr}
                            ref={(el) => (yearRefs.current[index] = el)}
                            data-year={yr}
                            className={yr === year ? "font-semibold" : ""}
                        >
                            {yr}
                        </div>
                    ))}
                </div>

                {/* 공연 목록 영역 */}
                <div className='overflow-y-scroll h-full w-full text-[130%] text-center scrollbar-hide relative'>
                    {concerts[year]?.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (concertRefs.current[index] = el)}
                            data-concert={item}
                            className={item === concert ? "font-semibold" : ""}
                        >
                            {item}
                        </div>
                    )) || <div></div>}
                </div>
            </div>

            {/* 하단 버튼 영역 */}
            <div className="flex absolute w-full bottom-0">
                <div className="relative bg-[#F2DCC2] w-[30vw] h-[8vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center">
                    <p className="text-black text-[90%] w-[35vw] text-center font-semibold">
                        공연 추가
                    </p>
                </div>
                <div className="relative bg-[#FFE57B] w-[30vw] h-[8vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center">
                    <p className="text-black text-[90%] w-[35vw] text-center font-semibold">
                        확인
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SelectConcert;
