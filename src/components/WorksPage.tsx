import {motion} from "framer-motion";
import folderImg from "../assets/images/white-folder.svg";
import Typical from "react-typical";
import {useRef, useState} from "react";
import WorksPageLayout from "./layouts/WorksPageLayout.tsx";
import WebDevLanding from "./webDev/WebDevLanding.tsx";
import NavBar from "./layouts/NavBar.tsx";

export default function WorksPage(){

    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isWorksClicked, setisWorksClicked] = useState(false);

    function handleWorks(){
        setisWorksClicked(true)
    }

    const modelRef = useRef<HTMLDivElement | null>(null);
    const webDevRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<HTMLDivElement | null>(null);


    const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <>
            <WorksPageLayout>
                <NavBar/>
                <div className={" flex flex-col min-h-screen items-center justify-center"}>
                    <audio id={"clickSound"} autoPlay loop  >
                        <source src="/typing-audio.mp3" type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                    <audio>
                        <source src={"/click-sound.ogg"} type={"audio/ogg"}/>
                    </audio>
                    { isWorksClicked &&
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex justify-center md:gap-9 items-end mb-14">
                                {[
                                    { label: "About", sectionRef: webDevRef },
                                    { label: "3D Animation", sectionRef: animationRef },
                                    { label: "Web Development", sectionRef: webDevRef },
                                    { label: "Modeling", sectionRef: modelRef },
                                ].map(({ label, sectionRef }, i) => {
                                    const translateClass = i === 0 || i === 3 ? "translate-y-[45px]" : "translate-y-[22px]";

                                    return (
                                        <button
                                            key={label}
                                            onClick={() => scrollToSection(sectionRef)}
                                            className={`flex w-[100px] flex-col items-center ${translateClass} hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out`}
                                        >
                                            <p className="text-[10px] md:text-[12px] whitespace-nowrap">{label}</p>
                                            <img
                                                src={folderImg}
                                                alt=""
                                                className="w-[90px] h-[90px] flex-shrink-0 object-contain"
                                            />
                                        </button>
                                    );
                                })}
                            </div>

                            {/*<div className="flex justify-center items-end gap-9 mb-14">*/}
                            {/*    <div onClick={()=>scrollToSection(webDevRef)}  className="flex flex-col items-center translate-y-[45px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">*/}
                            {/*        <p className="text-[10px] text-nowrap md:text-[12px]">About</p>*/}
                            {/*        <img src={folderImg} height={90} width={90} alt="" />*/}
                            {/*    </div>*/}
                            {/*    <div onClick={()=>scrollToSection(animationRef)}   className="flex flex-col items-center translate-y-[22px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">*/}
                            {/*        <p className="text-[10px] text-nowrap md:text-[12px]">3D Animation</p>*/}
                            {/*        <img src={folderImg} height={90} width={90} alt="" />*/}
                            {/*    </div>*/}
                            {/*    <div onClick={()=>scrollToSection(webDevRef)}  className="flex w-[90px] h-[90px] flex-col items-center translate-y-[22px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">*/}
                            {/*        <p className="text-[10px] text-nowrap md:text-[12px]">Web Development</p>*/}
                            {/*        <img className={"w-[90px] h-[90px]"} src={folderImg} height={90} width={90} alt="" />*/}
                            {/*    </div>*/}
                            {/*    <div onClick={()=>scrollToSection(modelRef)}  className="flex flex-col items-center translate-y-[45px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">*/}
                            {/*        <p className="text-[10px] text-nowrap md:text-[12px]">Modeling</p>*/}
                            {/*        <img src={folderImg} height={90} width={90} alt="" />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </motion.div>
                    }
                    <div className="flex text-sm sm:text-2xl">
                        <Typical
                            steps={['WELCOME TO BIBI\'S WORLD',
                                1000, (() => setIsButtonVisible(true)) as unknown as string,
                                500,
                            ]}
                            // loop={Infinity}
                            wrapper="p"
                            className={"no-cursor"}
                        />
                        <span className="custom-cursor  leading-none ml-1">█</span>
                    </div>
                    {isButtonVisible && (
                        <button onClick={()=>handleWorks()}
                            // style={{ cursor: `url(${hoveredCursor}), auto` }}

                                className=" bg-white border-2 text-black rounded-md mt-4 text-sm sm:text-3xl md:4xl hover:bg-[black] hover:text-white  cursor-pointer px-4 py-2  duration-40 active:scale-95 transition-transform "
                        > WORKS
                        </button>
                    )}
                </div>
                <div className={"my-4 border-2 border-white "}/>

                <div className={"min-h-screen  w-full "} ref={webDevRef}>
                    <WebDevLanding/>
                </div>
                {/*<div ref={modelRef}>*/}
                {/*    <ModelingLanding/>*/}
                {/*</div>*/}
            </WorksPageLayout>


        </>
    )
}