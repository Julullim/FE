import React from "react";


const AddConcert: React.FC = () => {
    return (
        <div className="absolute w-full h-full">
            <div className="text-[110%]">
                연도
            </div>
            <input type="text" className="mt-[1vh] w-[80%] border-gray border-[1px]">
            </input>
            <div className="text-[110%] mt-[2vh]">
                공연 이름
            </div>
            <input type="text" className="mt-[1vh] w-[80%] border-gray border-[1px]">
            </input>
            <div className="relative bg-[#F2DCC2] w-[30vw] h-[8vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center">
                <p className="text-black text-[90%] w-[35vw] text-center font-semibold">
                    공연 추가
                </p>
            </div>
        </div>
    )
}
export default AddConcert