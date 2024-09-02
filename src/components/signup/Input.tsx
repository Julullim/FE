import React from "react";
import { Form } from "react-bootstrap";
import { Mobile, PC } from "../../routes/Layout";

interface InputProps{
    title: string;
    value: string;
    setValue: (value: string) => void;

}

const Input: React.FC<InputProps> =({title, value, setValue}) =>{
    return(
        <div>
            <Mobile>
                <div className="flex items-center ml-[1.8vw]">
                    <div className="font-pt font-semibold text-[2.1vh]">{title}</div>
                    <div className="ml-[3vw] font-pt font-semibold text-[2.1vh] text-[#737373]">*</div>
                </div>

                <Form.Control
                className="w-[88.8vw] h-[5.9vh] bg-white border-2 border-[#F2DCC2] rounded-[17px]
                font-light text-[#333333] text-[1.6vh] leading-[1.9vh] flex items-center tracking-[-0.04em] pl-[3.2vw] focus:outline-none"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />

            </Mobile>

            <PC>

                <div className="flex items-center ml-[0.5vw]">
                    <div className="font-pt font-semibold text-[1.1vw]">{title}</div>
                    <div className="ml-[0.7vw] font-pt font-semibold text-[1.1vw] text-[#737373]">*</div>
                </div>

                <Form.Control
                className="w-[22.1vw] h-[4.9vh] bg-white border-2 border-[#F2DCC2] rounded-[1vw]
                font-light text-[#333333] text-[0.9vw] flex items-center tracking-[-0.04em] pl-[0.8vw] focus:outline-none"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />

            </PC>



        </div>   
    )
}

export default Input;