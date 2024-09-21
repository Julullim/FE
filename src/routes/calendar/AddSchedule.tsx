import { React, useState } from "react";
import { Mobile, PC } from "../Layout";
import TabBar from "../../components/common/TabBar";
import titleicon from "../../assets/calendar/title.svg";
import calendar from "../../assets/calendar/calendar.svg";
import { Form } from "react-bootstrap";
import { formatTime } from "../../components/calendar/DetailMark";
import "../../styles/CustomSwitch.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-bootstrap-time-picker"
import 'react-datepicker/dist/react-datepicker.css';



const AddSchedulePage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [isSchedule, setIsSchedule] = useState<boolean>(false); // 일정인지 마감인지 선택
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSchedule(e.target.checked); 
    };

    return (
        <div>
            <Mobile>

                <div>
                    <TabBar text='일정 추가' />

                    <div className="ml-[7.2vw]">
                        <div className="flex items-center gap-[1.6vw]">
                            <img src={titleicon} className="w-auto h-[3.2vh]" />
                            <Form.Control
                                className="w-[77vw] h-[4.7vh] border-lightgray shadow-inner-shadow-200"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="일정 입력"
                            />
                        </div>

                        <div className="flex mt-[3.7vh] items-start gap-[1.6vw]">
                            <img src={calendar} className="w-auto h-[3.2vh]" />

                            <div className="w-[77vw] h-[12.5vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh]">
                                <div className="flex gap-[4.9vw] ml-[3vw] mt-[1.6vh] text-darkgray text-[1.6vh]">
                                    <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className="w-[40vw] border-b border-darkgray"/>
                                    
                                   
                                </div>

                                <div className="flex gap-[4.9vw] mt-[1.6vh] ml-[3vw] text-darkgray text-[1.6vh]">
                                    <DatePicker 
                                    selected={endDate} 
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className="w-[40vw] border-b border-darkgray"/>
                                    {isSchedule? '':  <div className="border-b border-darkgray w-[23.2vw]">{formatTime(endDate)}</div>}
                                </div>

                                <div className="flex ml-[3vw] mt-[1.6vh] items-center text-darkgray text-[1.6vh]">
                                    <div>하루 종일</div>
                                    <Form.Check
                                        type="switch"
                                        className="custom-switch"
                                        checked={isSchedule} 
                                        onChange={handleSwitchChange} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                  
                </div>
                
                <div className="flex justify-center">
                    <div className="mt-[3.7vh] flex bg-yellow justify-center items-center w-[53vw] h-[5vh] rounded-[1vh] text-[2.1vh]">
                        추가하기
                    </div>
                </div>
               

            </Mobile>

            <PC>
                <div></div>
            </PC>
        </div>
    );
};

export default AddSchedulePage;
