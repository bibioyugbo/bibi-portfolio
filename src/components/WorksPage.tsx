import muteImg from "../assets/images/white-mute.png";
import backImg from "../assets/images/back-icon.png";
import {motion} from "framer-motion";
import folderImg from "../assets/images/white-folder.svg";
import Typical from "react-typical";
import instaImg from "../assets/images/instagram-white-icon.png";
import twitterImg from "../assets/images/twitter-white.png";
import gitHubImg from "../assets/images/gitub-icon.png";
import linkedIn from "../assets/images/linkedin-white.png";
import {useRef, useState} from "react";
import {RouteConstant} from "../util/constant/RouteConstant.ts";
import {useNavigate} from "react-router-dom";
import ModelingPage from "./ModelingPage.tsx";

export default function WorksPage(){

    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isWorksClicked, setisWorksClicked] = useState(false);
    const navigate = useNavigate()
    function handleMute() {
        const sound = document.getElementById('clickSound') as HTMLAudioElement;
        sound.currentTime = 0;  // Reset to start for repeated taps
        sound.pause();
    }
    function handleWorks(){
        setisWorksClicked(true)
    }
    function handleBack() {
       navigate(RouteConstant.landing.home.path)
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
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
            >

                <div className="border-2 rounded-md border-white p-4  bg-black flex flex-col  h-screen text-white text-2xl font-mono">

                    <div className={"flex justify-between"}>
                        <div className={"flex justify-start gap-4 items-center"}>
                            <a target="_blank" rel="noopener noreferrer"  href="https://example.com">
                                <img src={instaImg} className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" alt="" />
                            </a>
                            <a  target="_blank" rel="noopener noreferrer"  href="https://x.com/bibibuilds">
                                <img src={twitterImg} height={25} width={25} alt="" />
                            </a>
                            <a  target="_blank" rel="noopener noreferrer"  href="https://github.com/bibioyugbo">
                                <img src={gitHubImg} height={25} width={25} alt="" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obehioye-oyugbo-022107216/">
                                <img src={linkedIn} height={25} width={25} alt="" />
                            </a>
                        </div>
                        <div className={"flex justify-end"}>
                            <img onClick={()=>handleMute()} className={"cursor-pointer"} src={muteImg} height={10} width={25} alt={""}/>
                            <img onClick={()=>handleBack()} className={"cursor-pointer"} src={backImg} height={30} width={30} alt={""}/>
                        </div>
                    </div>


                    <div className={" flex flex-col h-full  items-center justify-center"}>
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
                                <div className="flex justify-center items-end gap-9 mb-14">
                                    <div onClick={()=>scrollToSection(animationRef)}   className="flex flex-col items-center translate-y-[25px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">
                                        <p className="text-[12px]">3D Animation</p>
                                        <img src={folderImg} height={90} width={90} alt="" />
                                    </div>

                                    <div onClick={()=>scrollToSection(modelRef)}  className="flex flex-col items-center translate-y-[10px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">
                                        <p className="text-[12px]">Modeling</p>
                                        <img src={folderImg} height={90} width={90} alt="" />
                                    </div>

                                    <div onClick={()=>scrollToSection(webDevRef)}  className="flex flex-col items-center translate-y-[30px] hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out cursor-pointer">
                                        <p className="text-[12px]">Web Development</p>
                                        <img src={folderImg} height={90} width={90} alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        }
                        {/*    <div>*/}
                        {/*        <p className={"text-[12px]"}>3D Animation</p>*/}
                        {/*        <img src={folderImg}  height={90} width={90}  alt={""}/>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className={"text-[12px]"} >Film</p>*/}
                        {/*        <img src={folderImg}  height={90} width={90}  alt={""}/>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className={"text-[12px]"}>Web Development</p>*/}
                        {/*        <img src={folderImg}  height={90} width={90}  alt={""}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


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
                    <footer style={{position:"sticky"}} className={"text-sm text-center"}>
                        © 2025 OBEHIOYE OYUGBO
                    </footer>


                </div>
            </motion.div>
            <div ref={modelRef}>
                <ModelingPage/>
            </div>

        </>
    )
}