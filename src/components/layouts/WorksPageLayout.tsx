import Footer from "./Footer.tsx";
import {motion} from "framer-motion";
import React, {ReactNode, useState} from "react";
import NavBar from "./NavBar.tsx";

interface WorksPageLayoutProps{
    children: ReactNode
}


export default function WorksPageLayout({...props}:WorksPageLayoutProps){
    const [lightMode, setLightMode ] = useState(false)


    const toggleTheme = () => {
        setLightMode(prev => !prev);
    };
    const lightTheme = "bg-white text-black"


    return(
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
        >

            <div className={`rounded-md  p-4 ${lightMode? lightTheme: "bg-black text-white border-white border-2 "}  flex flex-col w-full    text-2xl font-mono`}>
                <NavBar lightMode={lightMode} setLightMode={()=>toggleTheme()}/>
                {React.cloneElement(props.children as React.ReactElement, { lightMode })}
                {/*{props.children}*/}
                <Footer/>
            </div>

        </motion.div>
    )
}