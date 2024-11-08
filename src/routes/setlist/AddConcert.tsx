import React, { useState, useEffect } from 'react';

const AddConcert: React.FC = () => {
    const [inputYear, setInputYear] = useState("");
    const [inputConcert, setInputConcert] = useState("");
    useEffect(() => {
        const yearInput = document.getElementById('input_year') as HTMLInputElement;
        const concertInput = document.getElementById('input_concert') as HTMLInputElement;

        const handleYearChange = (event: Event) => {
        setInputYear((event.target as HTMLInputElement).value);
        };

        const handleConcertChange = (event: Event) => {
        setInputConcert((event.target as HTMLInputElement).value);
        };

        yearInput.addEventListener('input', handleYearChange);
        concertInput.addEventListener('input', handleConcertChange);

        return () => {
        yearInput.removeEventListener('input', handleYearChange);
        concertInput.removeEventListener('input', handleConcertChange);
        };
    }, []);
    return (
        <div className="absolute w-full h-full">
            <div className="text-[110%]">
                연도
            </div>
            <input type="text" className="mt-[1vh] w-[80%] border-gray border-[1px]" id="input_year">
            </input>
            <div className="text-[110%] mt-[2vh]">
                공연 이름
            </div>
            <input type="text" className="mt-[1vh] w-[80%] border-gray border-[1px]" id="input_concert">
            </input>
            <button
                onClick={() => {
                    alert(
                        `연도: ${inputYear}, 공연 이름: ${inputConcert}`
                        +'\n추가합니다.'
                    );
                }}
                className="absolute bg-[#F2DCC2] w-[30vw] h-[8vw] left-1/2
                 transform -translate-x-1/2 mt-[2vh] rounded-lg flex items-center justify-center
                 font-bold text-[90%]
                 ">
                공연 추가
            </button>
        </div>
    )
}

export default AddConcert;