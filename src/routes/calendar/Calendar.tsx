import {React} from "react";
import { Mobile, PC } from "../Layout";
import Navbar from "../../components/common/Navbar";
import MainTab from "../../components/common/MainTab";
import CustonCalendar from "../../components/calendar/CustomCalendar";
import background from "../../assets/background1.png"


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
                    <Navbar text='calendar'/>
                    <img src={background} className="w-full h-[27.8vh] object-cover" />
                    <div className="font-bold text-[4.5vh] flex justify-center mt-[7.1vh]">캘린더</div>
                    <CustonCalendar/>
                    

                

                </div>

            </PC>

        </div>
    )
}

export default CalendarPage;