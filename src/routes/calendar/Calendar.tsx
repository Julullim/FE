import React from "react";
import { Mobile, PC } from "../Layout";
import Navbar from "../../components/common/Navbar";
import MainTab from "../../components/common/MainTab";
import CustonCalendar from "../../components/calendar/CustomCalendar";


const CalendarPage: React.FC=()=>{
    return(
        <div>
            <Mobile>
                <div>
                    <MainTab/>
                    <Navbar text='calendar'/>
                    <CustonCalendar/>
              

                </div>

            </Mobile>

            <PC>
                <div>
                    캘린더 페이지임당
                </div>

            </PC>

        </div>
    )
}

export default CalendarPage;