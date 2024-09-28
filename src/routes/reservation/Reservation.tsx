import {React, useState} from "react";
import { Mobile, PC } from "../Layout";
import Navbar from "../../components/common/Navbar";
import MainTab from "../../components/common/MainTab";
import background from "../../assets/background1.png"
import infoImg from "../../assets/reservation/info.svg"
import timeTableImg from "../../assets/reservation/timetable.svg"
import RoomReservation from "../../components/reservation/RoomReservation";
import StudyReservation from "../../components/reservation/StudyReservation";

const ReservationPage : React.FC = () =>{


    return(
        <div>

            <Mobile>
                <div>
                    <Navbar text='reservation'/>
                    <MainTab/>
                    
                    <div className="overflow-y-auto pb-[9.3vh] pt-[10.4vh]">
                        <div className="ml-[8vw] w-[23.2vw] font-semibold text-[2.7vh] text-shadow-m3-elavationLight-1">
                            동방 예약
                            <div className="h-[0.5vh] bg-[radial-gradient(50%_987.5%_at_50%_50%,_#F2DCC2_0%,_#FFFFFF_100%)] w-[100%]"></div>
                        </div>
                        <img className='h-[17.7vh] w-full object-cover mt-[0.8vh]' src={background}/>

                        <div className="flex justify-center" >
                            <div className="mt-[2.1vh] flex bg-yellow justify-center items-center w-[53vw] h-[5vh] rounded-[1vh] text-[2.1vh]">
                               곡 리스트 확인하기
                            </div>
                        </div>

                        <RoomReservation/>

                        <div className="ml-[8vw] mt-[5.2vh] font-semibold text-[2.7vh] text-shadow-m3-elavationLight-1">악기스터디 신청</div>
                        <StudyReservation/>

                        

                    </div>
                   
                </div>

            </Mobile>

            <PC>
                <div>
                    <Navbar text='reservation'/>
                    <img src={background} className="w-full h-[27.8vh] object-cover" />
                    <div className="font-bold text-[4.5vh] flex justify-center mt-[7.1vh]">동방 예약</div>

                    <div className="ml-[9.2vw] mt-[7vh] flex">
                        <img className="h-[47vh] x-auto mr-[3vw]" src={infoImg} />
                        <RoomReservation/>
                    </div>


                    <div className="font-bold text-[4.5vh] flex justify-center mt-[7.1vh]">악기스터디 신청</div>
                    <div className="ml-[9.2vw] mt-[7vh] flex">
                        <img className="h-[37.6vh] x-auto mr-[3vw]" src={timeTableImg}/>
                        <StudyReservation/>
                    </div>
                    

                </div>

            </PC>

        </div>
    )

}

export default ReservationPage;

