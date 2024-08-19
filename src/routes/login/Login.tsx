import React, { useEffect, useState } from "react";
import { Mobile, PC } from "../Layout";
import Navbar from "../../components/common/Navbar";
import "../login/Login.css";
import intro from "../../assets/background1.png";
import introLogo from "../../assets/Login/introLogo.png";
import kakaoLogin from "../../assets/Login/kakaoLogin.png"

const LoginPage: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Mobile>
                <div>
                    <div 
                        className={`relative w-[430px] h-[932px] bg-cover bg-no-repeat animate-roll`}
                        style={{ backgroundImage: `url(${intro})` }}
                    >
                        <div className={`overlay ${isAnimated ? 'overlay-darken' : ''}`}>
                            
                            {isAnimated? 
                                <div className="flex flex-col items-center">
                                    <img className="ml-[43px] mt-[70px]" src={introLogo} />
                                    <img className="mt-[523px]" src={kakaoLogin} />
                                </div>
                            :
                            ''}
                           
                        </div>
                    </div>
                </div>
            </Mobile>

            <PC>
                <div>
                    <Navbar text={"home"}/>
                </div>
            </PC>
        </div>
    );
};

export default LoginPage;
