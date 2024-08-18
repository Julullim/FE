import React from "react";
import { Mobile, PC } from "../Layout";
import intro from "../../assets/background1.png"

const LoginPage: React.FC = () =>{
    return(
        <div>
            <Mobile>
                <div>
                    <img src ={intro}></img>
                </div>
            </Mobile>

            <PC>
                쿠쿠루삥뽕
            </PC>

        </div>
    )
}

export default LoginPage