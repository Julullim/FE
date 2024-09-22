import React, { useState, useMemo, useEffect } from "react";
import { Mobile, PC } from "../../routes/Layout";
import SelectButton from "./SelectButton";
import CalendarMark from "./CalendarMark";
import { CalendarMarkProps } from "./CalendarMark";
import back from "../../assets/calendar/back.svg";
import next from "../../assets/calendar/next.svg";
import calendar from "../../assets/calendar/calendar.svg";
import deadline from "../../assets/calendar/fire.svg";
import train from "../../assets/calendar/heart.svg";
import CalendarModal from "./CalendarModal";
import CalendarList from "./CalendarList";

// 날짜 계산
const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    const daysArray = Array.from({ length: lastDate }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, () => null); // 빈칸 추가
    return [...emptyDays, ...daysArray];
};

interface ScheduleData {
    common: { schedule_id: number, start_time: string, end_time: string, content: string }[];
    has_ending: { schedule_id: number, start_time: string, end_time: string, content: string }[];
    personal: { practice_id: number, song_id: number, start_time: string, end_time: string, title: string }[];
}

export const transformDataToSchedules = (data: ScheduleData): CalendarMarkProps[] => [
    ...data.common.map(item => ({
        scheduleId: item.schedule_id,
        scheduleType: 1, // common
        content: item.content,
        startDate: new Date(item.start_time),
        endDate: new Date(item.end_time),
    })),
    ...data.has_ending.map(item => ({
        scheduleId: item.schedule_id,
        scheduleType: 2, // has_ending
        content: item.content,
        startDate: new Date(item.start_time),
        endDate: new Date(item.end_time),
    })),
    ...data.personal.map(item => ({
        scheduleId: item.practice_id,
        scheduleType: 3, // personal
        content: item.title,
        startDate: new Date(item.start_time),
        endDate: new Date(item.end_time),
    })),
];


const CustomCalendar: React.FC = () => {
    const [date] = useState<Date>(new Date())
    const [year, setYear] = useState<number>(date.getFullYear())
    const [month, setMonth] = useState<number>(date.getMonth() + 1)
    const [selectDate, setSelectDate] = useState<Date>(date)
    const [isOpen, setIsOpen] = useState<boolean>(false); 
    const [selectWeek, setSelectWeek] = useState<Date[]>([]); 

    console.log("선택된 날!!" + selectDate);
    console.log("열림??" + isOpen );


    // 예시 데이터
    const data = {
        common: [
            { schedule_id: 2, start_time: "2024-08-19T00:00:00.000Z", end_time: "2024-08-22T00:00:00.000Z", content: "가" },
            { schedule_id: 16, start_time: "2024-08-22T00:00:00.000Z", end_time: "2024-08-24T00:00:00.000Z", content: "나" },
            // 추가 일정 데이터...
        ],
        has_ending: [
            { schedule_id: 18, start_time: "2024-08-22T22:22:22.000Z", end_time: "2024-08-23T00:00:00.000Z", content: "다" },
            { schedule_id: 17, start_time: "2024-08-22T22:22:22.000Z", end_time: "2024-08-23T23:23:23.000Z", content: "라" },
        ],
        personal: [
            { practice_id: 1, song_id: 1, start_time: "2024-08-21T23:00:00.000Z", end_time: "2024-08-21T01:00:00.000Z", title: "푸르던" },
            { practice_id: 3, song_id: 2, start_time: "2024-08-21T14:00:00.000Z", end_time: "2024-08-21T16:00:00.000Z", title: "천시간" },
            { practice_id: 2, song_id: 2, start_time: "2024-08-21T16:00:00.000Z", end_time: "2024-08-21T18:00:00.000Z", title: "만시간" },
        ]
    };

    const schedules: CalendarMarkProps[] = transformDataToSchedules(data);

    useEffect(()=>{
       handleSelectWeek();

    },[selectDate])

    const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);
    const weeks = [];
    for (let i = 0; i < daysInMonth.length; i += 7) {
        weeks.push(daysInMonth.slice(i, i + 7));
    }

    const handleSelectWeek = () => {
        const newSelectWeek: Date[] = []; 
        let currentDate = new Date(selectDate);

        for (let i = 0; i < 7; i++) {
            newSelectWeek.push(new Date(currentDate)); 
            currentDate.setDate(currentDate.getDate() + 1); 
        }

        setSelectWeek(newSelectWeek);
        console.log(newSelectWeek); 
    };
    

    const handlePrevMonth = () => {
        if (month === 1) {
            setYear(year - 1);
            setMonth(12);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 12) {
            setYear(year + 1);
            setMonth(1);
        } else {
            setMonth(month + 1);
        }
    };

    const handleselectDate = (day: Date) =>{
        if(day == null){
            return;
        }else{
            setSelectDate(day);
            setIsOpen(true);
        }
    }

    const handleModalClose = () => setIsOpen(false);



    // 스케줄 필터링
    
    const getSchedules = (day: number | null) => {
        const todaySchedules = schedules.filter((schedule) => {
            if (day === null) return false;
            
            else if (schedule.scheduleType === 1){
                // 일정은 모두 표시
                const startDate = schedule.startDate;
                const endDate = schedule.endDate;

                const isInRange = 
                    day >= startDate.getDate() && 
                    day <= endDate.getDate() &&
                    schedule.startDate.getMonth() + 1 === month &&
                    schedule.endDate.getMonth() + 1 === month &&
                    schedule.startDate.getFullYear() === year &&
                    schedule.endDate.getFullYear() === year;

                return isInRange;
            }

            else{
                const endDate = schedule.endDate.getDate();
                return day === endDate && schedule.endDate.getMonth()+1 === month && schedule.endDate.getFullYear() === year;
            }

            
        });

        const displayedSchedules = todaySchedules.slice(0, 2); // 최대 2개의 스케줄만 표시
        const overflowCount = todaySchedules.length - 2; // 넘치는 스케줄 수 계산

        return { displayedSchedules, overflowCount };
    };


    // 렌더링
    const renderSchedules = (day: number | null) => {
        const { displayedSchedules, overflowCount } = getSchedules(day);
        const nowDate = new Date(year, month-1, day);

        return (
            <div key={day} className="text-center font-regular text-[1.7vh] h-[10.4vh] w-[12.3vw] relative" onClick={()=>handleselectDate(nowDate)}>
                {day}
                {displayedSchedules.map((schedule) => (
                    <CalendarMark key={schedule.scheduleId} {...schedule} day={day} />
                ))}
                {overflowCount > 0 && <div className="text-[#A8A8A8] font-regular text-[1vh] mt-[0.75vh]">+{overflowCount}개</div>}
            </div>
        );
    };

    // 렌더링PC
    const renderSchedulesPC = (day: number | null) => {
        const { displayedSchedules, overflowCount } = getSchedules(day);
        const nowDate = new Date(year, month-1, day);

        return (
            <div key={day} className="text-center text-[1.7vh] h-[11.13vh] w-[8vw] relative" onClick={()=>handleselectDate(nowDate)}>
                {day}
                {displayedSchedules.map((schedule) => (
                    <CalendarMark key={schedule.scheduleId} {...schedule} day={day} />
                ))}
                {overflowCount > 0 && <div className="text-[#A8A8A8] font-regular text-[1vh] mt-[0.75vh]">+{overflowCount}개</div>}
            </div>
        );
    };


    return (
        <div>
            <Mobile>
                <div>
                    <CalendarModal isOpen={isOpen} date={selectDate} onClose={handleModalClose}/>
                    
                    <div className="flex items-center justify-center h-[3vh] gap-[6.2vw]">
                        <img src={back} className="h-full w-auto" onClick={handlePrevMonth} />
                        <div className="text-[#333333] font-semibold text-[2.7vh] tracking-[-0.04em]">
                            {year}년 {month}월
                        </div>
                        <img src={next} className="h-full w-auto" onClick={handleNextMonth} />
                    </div>

                    <div className="flex gap-[3vw] mt-4 ml-[5.8vw]">
                        <SelectButton title="일정" img={calendar} bgColor="main" textColor="black" />
                        <SelectButton title="마감" img={deadline} bgColor="red" textColor="white" />
                        <SelectButton title="합주" img={train} bgColor="blue" textColor="white" />
                    </div>

                    <div className="w-[86.5vw] h-[58.7vh] mt-[2.9vh] ml-[5.8vw]">
                        <div className="grid grid-cols-7 mb-[1vh]">
                            {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                                <div key={idx} className="w-[12.3vw] text-center font-regular text-[1.7vh]">{day}</div>
                            ))}
                        </div>

                        {weeks.map((week, index) => (
                            <div key={index}>
                                <div className="h-[0.2vh] bg-lightgray mb-[1vh]"></div>
                                <div className="grid grid-cols-7">
                                    {week.map(day => renderSchedules(day))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Mobile>

            <PC>
                <div>

                    <div className="flex">

                        <div  className="w-[55.4vw] ml-[6vw]">
                            <div className="flex items-center justify-center h-[3vh] gap-[1.4vw] mt-[12.6vh]">
                                <img src={back} className="h-full w-auto" onClick={handlePrevMonth} />
                                <div className="text-[#333333] font-semibold text-[2.7vh] ">
                                    {year}년 {month}월
                                </div>
                                <img src={next} className="h-full w-auto" onClick={handleNextMonth} />
                            </div>

                            <div className="flex justify-end gap-[1.2vw] mt-[4vh] ml-[5.8vw]">
                                <SelectButton title="일정" img={calendar} bgColor="main" textColor="black" />
                                <SelectButton title="마감" img={deadline} bgColor="red" textColor="white" />
                                <SelectButton title="합주" img={train} bgColor="blue" textColor="white" />
                            </div>

                            <div className="h-[74.5vh] mt-[2.9vh]">
                                <div className="grid grid-cols-7 mb-[1vh]">
                                    {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                                        <div key={idx} className="w-[8vw] text-center font-regular text-[1.7vh]">{day}</div>
                                    ))}
                                </div>

                                {weeks.map((week, index) => (
                                    <div key={index}>
                                        <div className="h-[0.2vh] bg-lightgray mb-[1vh]"/>
                                        <div className="grid grid-cols-7">
                                            {week.map(day => renderSchedulesPC(day))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            

                        </div>

                        
                        <div className="ml-[5vw]">
                            {selectWeek.map((sw) => (
                                <CalendarList date={sw}/>
                            ))}
                            
                        </div>
                        
                        
                        

                        

                        
                    </div>

                    
                </div>
            </PC>
        </div>
    );
};

export default CustomCalendar;
