import React from "react";
import arrow from "../../assets/common/Arrow.png"
import bell from "../../assets/common/Notification.png"
import { useNavigate } from "react-router-dom";

const TabBar: React.FC<{ text: string }> = ({ text }) => {
    const navigate = useNavigate();

    return (
        <div className="w-[100vw] h-[10.4vh] flex items-center">
            <img 
                className='w-auto h-[3.8vh] ml-[2.5vw]' 
                src={arrow} 
                onClick={() => navigate(-1)} 
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="font-semibold text-[2.7vh]">{text}</div>
                <div className="h-[0.5vh] bg-[radial-gradient(50%_987.5%_at_50%_50%,_#F2DCC2_0%,_#FFFFFF_100%)] mx-auto w-[100%]"></div>
            </div>
            <img 
                className='w-auto h-[5vh] absolute right-[6vw]' 
                src={bell} 
            />
        </div>
    );
    
    
    
    
    
}

export default TabBar;
