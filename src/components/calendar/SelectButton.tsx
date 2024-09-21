import React from "react";
import { Mobile, PC } from "../../routes/Layout";

interface SelectButtonProps {
    title: string;
    img: string;
    bgColor: string;
    textColor: string;
}

const backgroundColorMap: { [key: string]: string } = {
    main: 'bg-main',
    red: 'bg-red',
    blue: 'bg-blue',
};

const textColorMap: { [key: string]: string } = {
    black: 'text-black',
    white: 'text-white',
};

const SelectButton: React.FC<SelectButtonProps> = ({title, img, bgColor, textColor }) => {

    const bgClass = backgroundColorMap[bgColor]; 
    const textClass = textColorMap[textColor]; 

    return (
        <div>
            <Mobile>
                <div className={`${bgClass} ${textClass} flex items-center justify-center w-[17.2vw] h-[3.2vh] rounded-[1vh]`}>
                    <img src={img} alt={title} className="h-[2.9vh] w-auto" />
                    <div className={`${textClass} font-regular text-[1.7vh]`}>{title}</div>
                </div>
            </Mobile>

            <PC>
                <div className={`${bgClass} ${textClass} flex`}>
                    <img src={img} alt={title} className="mb-2" />
                    <div>{title}</div>
                </div>
            </PC>
        </div>
    );
}

export default SelectButton;
