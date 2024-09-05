import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../routes/login/Login";
import MainPage from "../routes/main/Main";

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

        path: "/main",
        element:(
            <MainPage/>
        )
        
    },
    
   
];

const router = createBrowserRouter(mainRouter);
export default router;