import React from "react";
//import { useNavigate } from "react-router-dom";
import logo from "../../assets/JulAllim.png"

interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    //const navigate = useNavigate(); 

    // const handleNavClick = (point:string) =>{
    //     navigate(`/${point}`)
    // }


    return (
        <div className="w-[1728px] h-[71px] flex items-center" style={{ position: 'absolute', top: 0 }}>
            <img className="ml-[73px] h-[35px]" src ={logo}></img>
            <div className="flex ml-[170px] font-pt text-[25px] text-darkgray gap-[65px] items-center">
                <div className="w-[91px] text-center">공지사항</div>
                <div className="w-[91px] text-center">캘린더</div>
                <div className="w-[91px] text-center">동방예약</div>
                <div className="w-[91px] text-center">굿즈</div>
                <div className="w-[91px] text-center">전지</div>
            </div>
            
     
        </div>
    );
    
}

export default Navbar;