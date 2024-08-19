import React from "react";
//import { useNavigate } from "react-router-dom";
import logo from "../../assets/JulAllim.png"
import bell from "../../assets/common/navbar/p/bell.png"
import profile from "../../assets/common/navbar/p/profile.png"
import line from "../../assets/common/navbar/p/line.png"
interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    //const navigate = useNavigate(); 

    // const handleNavClick = (point:string) =>{
    //     navigate(`/${point}`)
    // }


    return (
        <div className="ml-[73px] w-[1728px] h-[71px] flex items-center" style={{ position: 'absolute', top: 0 }}>
            <img className="h-[35px]" src ={logo}></img>

            <div className="flex ml-[171px] font-pt text-[25px] text-darkgray gap-[66px] items-center">
                <div className="w-[91px] text-center">공지사항</div>
                <div className="w-[91px] text-center">캘린더</div>
                <div className="w-[91px] text-center">동방예약</div>
                <div className="w-[91px] text-center">굿즈</div>
                <div className="w-[91px] text-center">전지</div>
            </div>

            <div className="ml-[276px] flex items-center">
                <img src={bell}></img>
                <img src={line} className="ml-[7px]  h-[24px]"></img>
                <img src={profile} className="ml-[16px] w-[37px] h-[24px]"></img>
                <div className="font-pt text-[20px] text-darkgray">로그인</div>
            </div>
            
            
     
        </div>
    );
    
}

export default Navbar;