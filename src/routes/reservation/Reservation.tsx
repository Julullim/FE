import React from "react";
import { Mobile, PC } from "../Layout";
import Navbar from "../../components/common/Navbar";
import MainTab from "../../components/common/MainTab";



const ReservationPage : React.FC = () =>{

    return(
        <div>

            <Mobile>
                <div>
                    <Navbar text='reservation'/>
                    <MainTab/>
                    <div className="ml-[8vw] w-[23.2vw] font-bold text-[2.7vh]">
                        동방 예약
                        <div className="h-[0.5vh] bg-[radial-gradient(50%_987.5%_at_50%_50%,_#F2DCC2_0%,_#FFFFFF_100%)] w-[100%]"></div>
                    </div>

                </div>

            </Mobile>

            <PC>
                <div>

                </div>

            </PC>

        </div>
    )

}

export default ReservationPage;

