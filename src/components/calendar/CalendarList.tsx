import React from "react";
import { transformDataToSchedules } from "./CustomCalendar";
import { CalendarMarkProps } from "./CalendarMark";
import DetailMark from "./DetailMark";

const CalendarList : React.FC<{date: Date}> =({date})=>{

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
    
    return(

        <div className="w-[30vw] h-[34vh] border-b-8 border-textgray shadow-black-blur-5 border-opacity-30">

            <div className="ml-[2.25vw] pt-[3.6vh]">
                <div className=" font-bold text-[#333333] text-[2.1vh]">{date.getDate()+'일'}</div>
                
                <div className="mt-[2.4vh]  h-[21.2vh] overflow-y-auto">
                    {schedules.map((schedule) => (
                        <DetailMark key={schedule.scheduleId} {...schedule}/>
                    ))}
                </div>
                
            </div>
            
       
        </div> 
    )


}

export default CalendarList;