import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../routes/login/Login";
import SignupPage from "../routes/signup/Signup";
import MainPage from "../routes/main/Main";
import SetlistPage from "../routes/setlists/setlist";

export const mainRouter = [

    {
    
        path: "/",
        element: <Navigate to="/login" replace />,
        
       
    },
    

    {
    
        path: "/login",
        element:(
           <LoginPage/>
        )
       
    },

    {
    
        path: "/signup",
        element:(
           <SignupPage/>
        )
       
    },

    /* 컴포넌트 추후 수정하기 */

    {
    
        path: "/main",
        element:(
           <MainPage/>
        )
       
    },

    
    {
    
        path: "/notice",
        element:(
           <LoginPage/>
        )
       
    },

    
    {
    
        path: "/calendar",
        element:(
           <LoginPage/>
        )
       
    },

    
    {
    
        path: "/reservation",
        element:(
           <LoginPage/>
        )
       
    },

    
    {
    
        path: "/goods",
        element:(
           <LoginPage/>
        )
       
    },

    
    {
    
        path: "/setlist",
        element:(
           <SetlistPage/>
        )
       
    },
    
    
   
];

const router = createBrowserRouter(mainRouter);
export default router;