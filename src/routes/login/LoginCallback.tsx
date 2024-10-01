import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../libs/apis/user";
import { checkUser } from "../../libs/apis/user";
import useUserLoginStore from "../../store/useUserLogin";
import { BeatLoader } from "react-spinners";


const LoginCallback: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addToken} = useUserLoginStore();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const params = new URLSearchParams(location.search);
                const code = params.get("code");
                console.log(location)
                if (code) {
                    console.log("Code:", code);
                    const data = await kakaoLogin(code);
                    console.log(data);

                    addToken(data.result.accessToken); 
                    
                    if(data.result.newUser){
                        navigate("/signup")
                    }else{
                        navigate("/main")
                    }

                    // if (data.result) {
                    //     const check = await checkUser(data.result);
                    //     addToken(data.result)
                    //     console.log(check);

                    //     if (check.isSuccess && check.result.name != 0) {
                    //         navigate("/main");
                    //     } else {
                    //         navigate("/signup");
                    //     }
                    // }
                } else {
                    console.error("No code parameter found in URL");
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [location.search, navigate]);

    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <h2 className="font-pt text-textgray">잠시만 기다려주세요</h2>
            <BeatLoader color="#F2DCC2"/>
        </div>
    );
    
};

export default LoginCallback;
