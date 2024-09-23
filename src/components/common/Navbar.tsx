import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/JulAllim.png";
import bell from "../../assets/common/navbar/p/bell.png";
import myPage from "../../assets/common/navbar/p/profile.png";
import line from "../../assets/common/navbar/p/line.png";
import { Mobile, PC } from "../../routes/Layout";
import notice from "../../assets/common/navbar/m/Notice.png"
import noticeClick from "../../assets/common/navbar/m/notice_Click.png"
import calendar from "../../assets/common/navbar/m/Calendar.png"
import calendarClick from "../../assets/common/navbar/m/calendar_Click.png"
import reservation from "../../assets/common/navbar/m/Reservation.png"
import reservationClick from "../../assets/common/navbar/m/reservation_Click.png"
import goods from "../../assets/common/navbar/m/Goods.png"
import goodsClick from "../../assets/common/navbar/m/goods_Click.png"
import profile from "../../assets/common/navbar/m/Profile.png"
import profileClick from "../../assets/common/navbar/m/proflie_Click.png"


interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    const navigate = useNavigate(); 

    const handleNavClick = (point:string) =>{
        navigate(`/${point}`)
    }

    return (
        <div>

            <Mobile>
                <div className="w-[100vw] h-[9.1vh] flex justify-center items-center absolute bottom-0">
                    <img className="w-[10.9vw] h-[7vh]" src={`${text === 'notice'? noticeClick: notice}`}  onClick={() => handleNavClick('notice')}/>
                    <img className="w-[10.9vw] h-[7vh] ml-[8.6vw]" src={`${text === 'calendar'? calendarClick: calendar}`}  onClick={() => handleNavClick('calendar')}/>
                    <img className="w-[10.9vw] h-[7vh] ml-[8.6vw]" src={`${text === 'reservation'? reservationClick: reservation}`}  onClick={() => handleNavClick('reservation')}/>
                    <img className="w-[10.9vw] h-[7vh] ml-[8.6vw]" src={`${text === 'goods'? goodsClick: goods}`}  onClick={() => handleNavClick('goods')}/>
                    <img className="w-[10.9vw] h-[7vh] ml-[8.6vw]" src={`${text === 'profile'? profileClick: profile}`}  onClick={() => handleNavClick('profile')}/>
                </div>

            </Mobile>


            <PC>
                <div className="w-[100vw] h-[6.4vh] flex items-center bg-white" style={{ position: 'absolute', top: 0 }}>
                    <img className="ml-[4.2vw] h-[3.1vh]" src={logo} alt="Logo" onClick={() => handleNavClick('main')}/>

                    <div className="flex ml-[9.9vw] font-pt text-[2.2vh] text-darkgray gap-[3.8vw] items-center">
                        <div className={`w-[5.3vw] text-center ${text === 'notice' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('notice')}>공지사항</div>
                        <div className={`w-[5.3vw] text-center ${text === 'calendar' ? 'text-shadow-black-blur-5 font-bold' : ''}` } onClick={() => handleNavClick('calendar')}>캘린더</div>
                        <div className={`w-[5.3vw] text-center ${text === 'reservation' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('reservation')}>동방예약</div>
                        <div className={`w-[5.3vw] text-center ${text === 'goods' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('goods')}>굿즈</div>
                        <div className={`w-[5.3vw] text-center ${text === 'setlist' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('setlist')}>전지</div>
                    </div>

                    <div className="ml-auto mr-[6.4vw] flex items-center">
                        <img src={bell} className="h-[2.1vh]" alt="Bell" />
                        <img src={line} className="ml-[0.4vw] h-[2.1vh]" alt="Line"/>
                        <img src={myPage} className="ml-[0.9vw] h-[2.1vh]" alt="Profile" />
                        <div className="font-pt text-[1.8vh] text-darkgray">로그인</div>
                    </div>
                </div>

            </PC>

        </div>

       
        
    );
}

export default Navbar;
