import React from "react";
//import { useNavigate } from "react-router-dom";
import logo from "../../assets/JulAllim.png"

interface NavbarProps {
    text: string; 
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
    // const navigate = useNavigate(); 

    // const handleNavClick = (point:string) =>{
    //     navigate(`/${point}`)
    // }


    return (
        <div className="w-[1728px] h-[71px] flex " style={{ position: 'absolute', top: 0 }}>
            <img src ={logo}></img>
     
        </div>
    );
    
}

export default Navbar;