"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraWrapper({children}:{
    children: React.ReactNode
}){
    return(
        <html>
            <head></head>
            <body>
                <ChakraProvider>
                {children}
                </ChakraProvider>
                
            </body>
        </html>
    )
}