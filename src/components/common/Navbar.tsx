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
            <div className="font-pt font-[25px]">공지사항</div>
            <div>캘린더</div>
            <div>동방예약</div>
            <div>굿즈</div>
            <div>전지</div>
     
        </div>
    );
    
}

export default Navbar;