import React from "react";
import { Mobile, PC } from "../../routes/Layout";

export interface CalendarMarkProps {
    scheduleId: number;
    scheduleType: number;
    content: string;
    startDate: Date;
    endDate: Date;
    day?: number | null; // 표시할 날짜
}

const backgroundColorMap: { [key: number]: string } = {
    1: 'bg-main text-black', // 일정
    2: 'bg-red text-white', // 마감
    3: 'bg-blue text-white', // 합주
};

// startDate와 endDate 사이에 있는지 확인
const isDateInRange = (day: number | null, startDate: Date, endDate: Date): boolean => {

    if (day === null) return false;

    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const target = new Date(startDate.getFullYear(), startDate.getMonth(), day);

    return target >= start && target <= end;
};

const CalendarMark: React.FC<CalendarMarkProps> = ({
    scheduleType,
    content,
    startDate,
    endDate,
    day,
}) => {
    const bgClass: string = backgroundColorMap[scheduleType];

    // scheduleType이 1일 때 startDate와 endDate 사이에 있는지 확인
    const isInRange: boolean = isDateInRange(day, startDate, endDate);
    
    const shouldDisplayContent: boolean = 
        (scheduleType === 1 && isInRange) ||                 // 일정의 경우
        (scheduleType === 2 && day === endDate.getDate()) ||  // 마감일 경우
        (scheduleType === 3 && day === endDate.getDate());    // 합주의 경우

    const displayedContent: string = shouldDisplayContent 
        ? scheduleType === 2 
            ? `${content} 마감` 
            : content.slice(0, 6) 
        : '';

    //console.log(content + '('+ scheduleType +')' +':' + startDate + '/' + endDate);

    return (
        <div>
            <Mobile>
                {
                    shouldDisplayContent ? 
                        <div className={`${bgClass} text-center w-[12.3vw] h-[1.5vh] text-[1vh] font-regular mt-[0.5vh]`}>
                            {displayedContent}
                        </div>
                    :
                    ''
                }
            </Mobile>

            <PC>
                {
                     shouldDisplayContent ? 
                     <div className={`${bgClass} flex items-center justify-center w-[7.7vw] h-[2.4vh] text-[1vh] font-regular mt-[0.5vh]`}>
                         {displayedContent}
                     </div>
                 :
                 ''

                }
            </PC>
        </div>
    );
};

export default CalendarMark;
