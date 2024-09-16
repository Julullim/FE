import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/siginup/JulAllimM.png"
import bell from "../../assets/common/Notification.png"

const MainTab: React.FC = () =>{
    const navigate = useNavigate();

    return(
        <div className="w-[100vw] h-[10.4vh] flex items-center">
            <img className='w-[38.3vw] h-auto ml-[8vw]' src={logo} onClick={() => navigate('/main')}></img>
            <img className='w-auto h-[5vh] absolute right-[6vw]' src={bell}/>
        </div>
    )
}

export default MainTab