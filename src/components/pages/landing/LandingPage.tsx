import {AnimatePresence, motion} from 'framer-motion';
import {RouteConstant} from "../../../util/constant/RouteConstant.ts";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


export default function LandingPage() {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);


    function playClickSound() {
        const sound = document.getElementById('clickSound') as HTMLAudioElement;
        sound.currentTime = 0;  // Reset to start for repeated taps
        sound.play();
    }
    function handleStart() {
        // localStorage.setItem('soundUnlocked', 'true');
        navigate(RouteConstant.dashboard.works.path)
        playClickSound()

    }
    const items = [
        { text: "a Frontend Engineer", color: "text-pink-400", border: "border-pink-400", bg: "bg-pink-400" },
        { text: "a Backend Engineer", color: "text-blue-400", border: "border-blue-400", bg: "bg-blue-400" },
        { text: "a 3D designer", color: "text-purple-400", border: "border-purple-400", bg: "bg-purple-400" },
        { text: "a Model", color: "text-yellow-400", border: "border-yellow-400", bg: "bg-yellow-400" },
    ];



    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000); // 3 seconds per item
        return () => clearInterval(interval);
    }, []);

    return (
        <>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >

                            <div className={"start-background gap-15 "}>
                                <div className="text-white font-bold text-[16px] sm:text-3xl md:text-3xl lg:text-4xl tracking-wider flex items-center gap-4">
                                    <span>Hello! I'm Obehioye,</span>
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.5 }}
                                            className={`rounded-xl ${items[index].border} border-2 justify-center bg-white ${items[index].color} text-sm sm:text-2xl md:text-3xl lg:text-4xl p-2 flex items-center gap-2`}
                                        >
                                            <span className={`w-2 h-2 sm:w-4 sm:h-4 ${items[index].bg} rounded-full inline-block`}></span>
                                            {items[index].text}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                                <div>
                                    <button onClick={()=>handleStart()} className={"cloud-button text-blue-400 text-[30px] mt-[60px] sm:mt-0"}>start</button>
                                </div>
                            </div>
                        </motion.div>
        </>
    );
}
