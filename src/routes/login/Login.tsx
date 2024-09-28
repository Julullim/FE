import React, { useEffect, useState } from "react"
import { Mobile, PC } from "../Layout"
import "../login/Login.css"
import intro from "../../assets/background1.png"
import introLogoM from "../../assets/Login/M/introLogo.png"
import kakaoLoginM from "../../assets/Login/M/kakaoLogin.png"
import introLogoP from "../../assets/Login/P/introLogo.png"
import kakaoLoginP from "../../assets/Login/P/kakaoLogin.png"





const LoginPage: React.FC = () => {
    const [isAnimatedM, setIsAnimatedM] = useState<boolean>(false);
    const [isAnimatedP, setIsAnimatedP] = useState<boolean>(false);
    const KAKAO_URL = import.meta.env.VITE_KAKAO_URL

    
   

    // 애니메이션 효과
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimatedM(true);
        }, 3000);

        const timerP = setTimeout(() => {
            setIsAnimatedP(true);
        }, 3000);
        return () => {clearTimeout(timer); clearTimeout(timerP)};

    }, []);  


    return (
        <div>
            <Mobile>
                <div>
                    <div 
                        className={`relative w-[100vw] h-[100vh] bg-cover bg-no-repeat animate-roll`}
                        style={{ backgroundImage: `url(${intro})` }}
                    >
                        <div className={`overlay ${isAnimatedM ? 'overlay-darken' : ''}`}>
                            
                            {isAnimatedM? 
                                <div>
                                    <img className="ml-[10vw] mt-[7.5vh] w-[87.4vw] h-auto max-h-full" src={introLogoM} />
                                </div>
                            :
                            ''}
                           
                        </div>

                        {isAnimatedM? 
                            
                            <div className="flex justify-center items-end absolute bottom-[7.6vh] left-0 right-0" >
                                <a href={KAKAO_URL}>
                                    <img className='w-auto h-[7.9vh]' src={kakaoLoginM} alt="카카오 로그인"/>
                                </a>
                            </div>
                          
                        
                        :
                        ''}
                       
                    </div>
                </div>
            </Mobile>

            <PC>
                <div className="h-full">
                    

                    <div
                        className={'bg-cover bg-center h-screen'}
                        style={{ backgroundImage: `url(${intro})`,}}
                    >

                        <div className={`overlayP ${isAnimatedP ? 'overlayP-darken' : ''}`}>

                            {isAnimatedP? 
                            
                            <div className="relative" >
                                <div>
                                    <img className="ml-[8.9vw] mt-[16vh] w-auto max-h-full h-[21.9vh]" src={introLogoP} />
                                </div>

                            </div>
                        
                            
                            :
                            ''}
                          
                           
                        </div>

                        {isAnimatedP? 
                            
                            <div className="flex justify-center items-end absolute bottom-[14vh] left-0 right-0" >
                                <a href={KAKAO_URL}>
                                    <img className=' w-auto h-[7.3vh]' src={kakaoLoginP} />
                                </a>     
                            </div>
                          
                        
                        :
                        ''}
                       

                    </div>
                </div>
            </PC>
        </div>
    );
};

export default LoginPage;
