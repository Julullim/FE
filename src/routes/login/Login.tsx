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

    // 카카오로그인
    const handleKakaoLogin = () => {
        
        const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY; 
        const REDIRECT_URI = encodeURIComponent('http://localhost:5173/login/callback/kakao');
        
        console.log(KAKAO_KEY)
        console.log(REDIRECT_URI)       
      
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}`;
      
        window.location.href = kakaoAuthUrl; 
    };

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
                            
                            <div className="flex justify-center items-end absolute bottom-[7.6vh] left-0 right-0" onClick={handleKakaoLogin}>
                                <img className=' w-auto h-[7.9vh]' src={kakaoLoginM} />
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
                            
                            <div className="flex justify-center items-end absolute bottom-[14vh] left-0 right-0" onClick={handleKakaoLogin}>
                                <img className=' w-auto h-[7.3vh]' src={kakaoLoginP} />
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
