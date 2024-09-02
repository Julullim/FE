import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/JulAllim.png";
import bell from "../../assets/common/navbar/p/bell.png";
import profile from "../../assets/common/navbar/p/profile.png";
import line from "../../assets/common/navbar/p/line.png";

interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    const navigate = useNavigate(); 

    const handleNavClick = (point:string) =>{
        navigate(`/${point}`)
    }

    return (
        <div className="w-[100vw] h-[6.4vh] flex items-center bg-white" style={{ position: 'absolute', top: 0 }}>
            <img className="ml-[4.2vw] h-[3.1vh]" src={logo} alt="Logo" onClick={() => handleNavClick('main')}/>

            <div className="flex ml-[9.9vw] font-pt text-[2.2vh] text-darkgray gap-[3.8vw] items-center">
                <div className={`w-[5.3vw] text-center ${text === 'notice' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('notice')}>공지사항</div>
                <div className={`w-[5.3vw] text-center ${text === 'calender' ? 'text-shadow-black-blur-5 font-bold' : ''}` } onClick={() => handleNavClick('calender')}>캘린더</div>
                <div className={`w-[5.3vw] text-center ${text === 'reservation' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('reservation')}>동방예약</div>
                <div className={`w-[5.3vw] text-center ${text === 'goods' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('goods')}>굿즈</div>
                <div className={`w-[5.3vw] text-center ${text === 'setlist' ? 'text-shadow-black-blur-5 font-bold' : ''}`} onClick={() => handleNavClick('setlist')}>전지</div>
            </div>

            <div className="ml-auto mr-[6.4vw] flex items-center">
                <img src={bell} className="h-[2.1vh]" alt="Bell" />
                <img src={line} className="ml-[0.4vw] h-[2.1vh]" alt="Line"/>
                <img src={profile} className="ml-[0.9vw] h-[2.1vh]" alt="Profile" />
                <div className="font-pt text-[1.8vh] text-darkgray">로그인</div>
            </div>
        </div>
    );
}

export default Navbar;
