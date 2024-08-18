import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../routes/login/Login";

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
    
    
   
];

const router = createBrowserRouter(mainRouter);
export default router;