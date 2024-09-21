import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({children}: {children: any}) => {
    const isMobile = useMediaQuery({
      query : "(max-width:1024px)"
    });
    
    return <>{isMobile && children}</>
  }
  
  export const PC = ({children}: {children: any}z) => {
    const isPc = useMediaQuery({
      query : "(min-width:1025px)"
    });
    
    return <>{isPc && children}</>
  }