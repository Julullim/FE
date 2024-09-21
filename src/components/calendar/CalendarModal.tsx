import React from "react";
import { Modal } from "react-bootstrap";
import closeButton from "../../assets/siginup/close.png"
import DetailMark from "./DetailMark";
import { transformDataToSchedules } from "./CustomCalendar";
import { CalendarMarkProps } from "./CalendarMark";
import "../../styles/CalendarModal.css"

interface CalendarModalProps{
    isOpen: boolean;
    date: Date;
    onClose: () => void;

}

const CalendarModal : React.FC<CalendarModalProps> = ({isOpen, date, onClose}) => {

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
        <Modal
            show={isOpen}
            backdrop ={false}
            dialogClassName="fixed inset-0 flex items-center justify-center"
        >
            <div className="mt-[2.5vh]">

                <div className="flex ml-[10.6vw] mr-[2.7vw] justify-between">
                    <div className="mt-[1.6vh] font-bold text-[#333333] text-[2.1vh]">{date.getDate()+'일'}</div>
                    <img className="h-[3.4vh]" src={closeButton} onClick={onClose} />
                </div>

                <div className="ml-[2vw] mt-[4.1vh] h-[20vh] overflow-y-auto">
                    {schedules.map((schedule) => (
                        <DetailMark key={schedule.scheduleId} {...schedule}/>
                    ))}
                </div>
               
            </div> 

        </Modal>
    )
}

export default CalendarModal;
