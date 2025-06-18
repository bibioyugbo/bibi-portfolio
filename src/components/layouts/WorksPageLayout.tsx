import Footer from "./Footer.tsx";
import {motion} from "framer-motion";
import {ReactNode} from "react";

interface WorksPageLayoutProps{
    children: ReactNode
}


export default function WorksPageLayout({...props}:WorksPageLayoutProps){
    return(
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
        >

            <div className="border-2 rounded-md border-white p-4  bg-black flex flex-col  text-white text-2xl font-mono">
                {props.children}
                <Footer/>
            </div>

        </motion.div>
    )
}