import React, { useState, useEffect, useRef } from 'react';
import WheelPicker from './WheelPicker';


const SelectConcert = ({ popAddConcert }) => {
    const [year, setYear] = useState<number>();
    const [concert, setConcert] = useState<string>();
    const [concerts, setConcerts] = useState<{ [key: number]: string[] }>({});
    const [_height, setHeight] = useState<number>(0);

    const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];

    useEffect(() => {
        setConcerts({
            2022: ["여름공연", "겨울공연"],
            2023: ["봄공연", "여름공연"],
            2024: ["가을공연", "겨울공연"],
        });
    }, []);


    return (
        <div className="absolute w-full h-full">
            <div className='flex absolute w-full top-0 h-full pt-[2vh] pb-[6vh]'>
                <div className='absolute w-full text-[130%]'>
                    <br />
                    <div
                        className='rounded-lg bg-lightgray'
                        ref={(el) => {
                            if (el) {
                                setHeight(el.getBoundingClientRect().height);
                            }
                        }}
                    >
                        &nbsp;
                    </div>
                </div>

                {/* 년도 선택 영역 */}
                <WheelPicker options={years} height={_height} setFunc={setYear} />
                {/* 공연 목록 영역 */}
                <WheelPicker options={concerts.hasOwnProperty(year) ? concerts[year] : []} height={_height} setFunc={setConcert} />

            </div>

            {/* 하단 버튼 영역 */}
            <div className="flex absolute w-full bottom-0">
                <button className="relative bg-[#F2DCC2] w-[30vw] h-[8vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center"
                    onClick={() => { popAddConcert(true) }}>
                    <p className="text-black text-[90%] w-[35vw] text-center font-semibold">
                        공연 추가
                    </p>
                </button>
                <button className="relative bg-[#FFE57B] w-[30vw] h-[8vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center"
                    onClick={() => {
                        console.log(year, concert);
                    }}>
                    <p className="text-black text-[90%] w-[35vw] text-center font-semibold">
                        확인
                    </p>
                </button>
            </div>
        </div>
    );

}

export default SelectConcert;