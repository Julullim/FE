import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../routes/login/Login";
import SignupPage from "../routes/signup/Signup";
import LoginCallback from "../routes/login/LoginCallback";
import CalendarPage from "../routes/calendar/Calendar";

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
    
        path: "/login/callback/kakao",
        element:(
           <LoginCallback/>
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
           <LoginPage/>
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
           <CalendarPage/>
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
           <LoginPage/>
        )
       
    },
    
    
   
];

const router = createBrowserRouter(mainRouter);
export default router;