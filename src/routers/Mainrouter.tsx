import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../routes/login/Login";
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
    
        path: "/calender",
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