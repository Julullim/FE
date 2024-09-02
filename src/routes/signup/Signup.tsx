import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from "../Layout"
import { setUserInfo } from "../../libs/apis/user";
import {Offcanvas} from "react-bootstrap";
import Navbar from "../../components/common/Navbar";
import LogoM from "../../assets/siginup/JulAllimM.png"
import sessionVocal from "../../assets/siginup/sessionvocal.png"
import intro from "../../assets/background1.png"
import introLogoP from "../../assets/Login/P/introLogo.png"
import SignupForm from "../../components/signup/SignupForm";





const SignupPage: React.FC = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(true); //offcanvas 열고닫기(PC)
    

    const signup = async (sId: string, name: string, cNum: number, token: string) => {
        try {
            const response = await setUserInfo(sId, name, cNum, token);
            console.log("토큰임당",token)
            console.log("Signup successful:", response);
            navigate("/main")
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };


    
    return(
        <div>

             <Mobile>
                <div className="relative h-[90.4vh] w-[100vw]">
                    <div className="ml-[10vw] mt-[9.6vh]">
                        <img src={LogoM} className="w-auto h-[5.5vh]" alt="로고" />
                        <div className="ml-[0.7vw] mt-[1.8vh] font-pt font-regular">
                            먼저 로그인 하기 위한 <br />
                            이름과 학번, 기수를 입력해주세요
                        </div>
                    </div>

                    <SignupForm onSignup={signup} />
                </div>
            </Mobile>

            <PC>

            <div className="bg-cover bg-center bg-fixed h-[100vh] relative" style={{ backgroundImage: `url(${intro})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Navbar text='login' />

                <div className="relative">
                    <div className="absolute ml-[8.9vw] mt-[16vh]">
                        <img className="w-auto max-h-full h-[21.9vh]" src={introLogoP} />
                    </div>
                </div>


                <Offcanvas show={show} backdrop="static" placement="end" style={{ width: '76vw' }}>
                    <div className="flex justify-between ">
                        <div className="font-regular text-darkgray text-[2.3vw] mt-[25.6vh] ml-[7.1vw] text-shadow-black-blur-5">먼저 로그인 하기 위한 <br/> 이름과 학번, 기수를 입력해주세요</div>
                        <div className="mt-[24vh] mr-[9.3vw]">
                           <SignupForm onSignup={signup}/>

                        </div>
                    </div>
                </Offcanvas>
        
            
            </div>

            </PC>

        </div>

    )

}

export default SignupPage;