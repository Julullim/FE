import React from "react";
import { Mobile } from "../../routes/Layout";
import { CalendarMarkProps } from "./CalendarMark";

const ColorMap: { [key: number]: string } = {
    1: 'bg-main', // 일정
    2: 'bg-red', // 마감
};

 // 시간을 두 자리로 
 export const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

const DetailMark: React.FC<CalendarMarkProps> = ({
    scheduleId,
    scheduleType,
    content,
    startDate,
    endDate,
}) => {
    const ColorClass: string = ColorMap[scheduleType];

   

    // 랜더링 마크 분기
    const renderMarks = () => {
        return (
            scheduleType === 3 ? (
                <div className="flex border-b border-lightgray h-[5.1vh] items-center">
                    <div className="ml-[2.5vw] font-medium text-darkgray text-[1.7vh] ">{formatTime(startDate)}</div>
                    <div className="bg-blue w-[0.8vw] h-[2.3vh] ml-[1vw] rounded-[1vh]" />
                    <div  className="ml-[4.2vw]">
                        <div className="text-[1.7vh]">
                            {content}
                        </div>
                        <div className="text-[1.3vh] text-darkgray">
                            {formatTime(startDate)} ~ {formatTime(endDate)}
                        </div>
                    </div>
                    <div/>
                </div>
            ) : (
                <div className="flex border-b border-lightgray h-[4.1vh] items-center gap-[3.3vw]">
                    <div className={`${ColorClass} w-[2.1vh] h-[2.1vh] rounded-full ml-[4.3vw]`} />
                    <div className=" text-[1.7vh]" >{content}</div>
                </div>
            )
            
        );
    };

    return (
        <div>
            <Mobile>
                <div>
                    {renderMarks()}
                </div>
            </Mobile>
        </div>
    );
};

export default DetailMark;
