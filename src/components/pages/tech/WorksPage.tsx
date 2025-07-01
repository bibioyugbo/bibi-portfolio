import {motion} from "framer-motion";
import folderImg from "../../../assets/images/white-folder.svg";
import greyFolderImg from "../../../assets/images/grey-folder.svg";
import Typical from "react-typical";
import {useRef, useState} from "react";
import WebDevLanding from "./WebDevLanding.tsx";
import AboutPage from "./AboutPage.tsx";
import SkillsPage from "./SkillsPage.tsx";
import ContactPage from "./ContactPage.tsx";
import arrowMute from "../../../assets/images/spiral-arrow-removebg-preview.png";
import arrowMute2 from "../../../assets/images/white-arrow-up-removebg-preview.png";



interface WorkPageProps {
    lightMode?:boolean
}

const lightTheme = "text-white bg-gray-400"


export default function WorksPage({lightMode}:WorkPageProps){

    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isWorksClicked, setisWorksClicked] = useState(false);

    function handleMute() {
        const sound = document.getElementById('clickSound') as HTMLAudioElement;
        sound.currentTime = 0;  // Reset to start for repeated taps
        sound.pause();
    }
    function handleWorks(){
        setisWorksClicked(true)
    }
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const webDevRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null)


    const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <>
                <div id={"works-section"} className={"relative  flex flex-col min-h-screen items-center justify-center"}>
                    <audio id={"clickSound"} autoPlay loop >
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
                                    { label: "About", sectionRef: aboutRef },
                                    { label: "Skills", sectionRef: skillsRef},
                                    { label: "Web Development", sectionRef: webDevRef },
                                    { label: "Contact Me", sectionRef: contactRef },
                                ].map(({ label, sectionRef }, i) => {
                                    const translateClass = i === 0 || i === 3 ? "translate-y-[48px]" : "translate-y-[15px]";

                                    return (
                                        <button
                                            key={label}
                                            onClick={() => scrollToSection(sectionRef)}
                                            className={`flex w-[100px] flex-col items-center ${translateClass} hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out`}
                                        >
                                            <p className="text-[10px] md:text-[12px] whitespace-nowrap">{label}</p>
                                            <img
                                                src={lightMode?greyFolderImg:folderImg}
                                                alt=""
                                                className="w-[90px] h-[90px] flex-shrink-0 object-contain"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    }
                    <div className="flex text-sm sm:text-2xl">
                        <Typical
                            steps={['WELCOME TO BIBI\'S WORLD',
                                1000, (() => {
                                    setIsButtonVisible(true)
                                    handleMute()
                                }) as unknown as string,
                                500,
                            ]}
                            // loop={Infinity}
                            wrapper="p"
                            className={"no-cursor"}
                        />

                        <span className={`custom-cursor leading-none ml-1 ${lightMode? "text-gray-400":""}`}>█</span>
                    </div>
                    {isButtonVisible && (
                        <>
                            <div
                                className={`${
                                    isWorksClicked ? "hidden" : "flex flex-col items-center"
                                } relative z-10
                                  ${lightMode ? "-translate-x-30 translate-y-30" : "translate-x-0 translate-y-50"}
                              `}
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16">
                                    <img
                                        src={lightMode ? arrowMute : arrowMute2}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div
                                    className={`max-w-[200px] text-xs sm:text-sm text-center border rounded-md p-2 sm:p-3
      ${
                                        lightMode
                                            ? "bg-white/30 border-black text-black"
                                            : "bg-black border-white text-white"
                                    }`}
                                >
                                    Click here
                                </div>
                            </div>
                            <button onClick={()=>handleWorks()}
                                    className={`${lightMode? lightTheme: "text-black bg-white"}  border-2  rounded-md mt-4 text-sm sm:text-3xl md:4xl hover:bg-[black] hover:text-white  cursor-pointer px-4 py-2  duration-40 active:scale-95 transition-transform`}
                            > WORKS
                            </button>
                        </>

                    )}
                </div>
                <div className={`my-4 border-2 ${lightMode?" border-3 border-gray-400":"border-white" } `}/>

                <div className={"md:min-h-screen  w-full"} ref={aboutRef}>
                    <AboutPage lightMode={lightMode}/>
                </div>
                <div className={`my-4 border-2 ${lightMode?" border-3 border-gray-400":"border-white" } `}/>
                <div className={"md:min-h-screen  w-full "} ref={skillsRef}>
                    <SkillsPage lightMode={lightMode} />
                </div>
                <div className={`my-4 border-2 ${lightMode?" border-3 border-gray-400":"border-white" } `}/>
                 <div className={"min-h-screen  w-full "} ref={webDevRef}>
                    <WebDevLanding lightMode={lightMode} />
                </div>
                <div className={`my-4 border-2 ${lightMode?" border-3 border-gray-400":"border-white" } `}/>
                <div className={"min-h-screen"} ref={contactRef}>
                    <ContactPage lightMode={lightMode}/>
                </div>




                {/*<div ref={modelRef}>*/}
                {/*    <ModelingLanding/>*/}
                {/*</div>*/}



        </>
    )
}