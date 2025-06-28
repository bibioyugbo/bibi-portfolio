import twitterImg from "../../assets/images/twitter-white.png";
import gitHubImg from "../../assets/images/gitub-icon.png";
import linkedIn from "../../assets/images/linkedin-white.png";
import instaImg from "../../assets/images/instagram-white-icon.png";
import twitterImg2 from "../../assets/images/grey-twitter.svg";
import gitHubImg2 from "../../assets/images/grey-github.svg";
import linkedIn2 from "../../assets/images/grey-linkedin.svg";
import instaImg2 from "../../assets/images/grey-ig.svg";
import muteImg from "../../assets/images/mute-icon.svg";
import muteImg2 from "../../assets/images/mute-grey.svg";


interface NavBarProps {
    lightMode?: boolean;
    setLightMode: ()=>void;
}

export default function NavBar({...props}:NavBarProps){


    function handleMute() {
        const sound = document.getElementById('clickSound') as HTMLAudioElement;
        sound.currentTime = 0;  // Reset to start for repeated taps
        sound.pause();
    }

    // useEffect(() => {
    //     document.body.classList.toggle("dark-mode", !lightMode);
    //     document.body.classList.toggle("light-mode", lightMode);
    // }, [lightMode]);

    return(
        <div className={"flex py-3 z-999 sticky top-0 justify-between"}>
            <div className={`flex ${props.lightMode ? "bg-white/30 backdrop-blur" : "bg-black/30 backdrop-blur"} p-3 rounded-md justify-start gap-4 items-center`}>
                <a  target="_blank" rel="noopener noreferrer"  href="https://x.com/bibibuilds">
                    <img src={props.lightMode?twitterImg2:twitterImg} height={25} width={25} alt="" />
                </a>
                <a  target="_blank" rel="noopener noreferrer"  href="https://github.com/bibioyugbo">
                    <img src={props.lightMode? gitHubImg2:gitHubImg} height={25} width={25} alt="" />
                </a>
                <a className={!props.lightMode? "mb-1":""} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obehioye-oyugbo-022107216/">
                    <img src={props.lightMode? linkedIn2:linkedIn} height={25} width={25} alt="" />
                </a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/bibioxox/">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd"/></svg>*/}
                    <img src={props.lightMode?instaImg2:instaImg} height={25} width={25} className="sm:h-[25px] sm:w-[25px]" alt="" />
                </a>
                <a href={"https://drive.google.com/file/d/1efRjm4Lj_vRKORMpsya3bJb_t8o8FRj0/view?usp=sharing"} target={"_blank"}  className={`${props.lightMode?"bg-gray-300 text-black":"bg-white text-black"} text-sm  rounded-md cursor-pointer p-2`}
                > View CV
                </a>

            </div>
            <div className={`flex ${props.lightMode ? "bg-white/30 backdrop-blur" : "bg-black/30 backdrop-blur"} p-3 rounded-md items-center gap-4 justify-end`}>
                <img onClick={()=>handleMute()} className={"cursor-pointer"} src={props.lightMode?muteImg2:muteImg} height={5} width={25} alt={""}/>
                <button onClick={()=>props.setLightMode()} className={`p-1 rounded-xl active:scale-105 ${props.lightMode?"bg-gray-300":"bg-gray-800" }`}>
                    {props.lightMode? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115q.18.115.37.217l.264.135l.26.12l.303.122l.244.086a6.6 6.6 0 0 0 1.103.26l.317.04l.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.6 7.6 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9" clip-rule="evenodd"/></svg>
                        :           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 4.5V3m0 18v-1.5m9-7.5h-1.5m-15 0H3m14.303-5.303l1.061-1.061M5.636 18.364l1.06-1.06m11.668 1.06l-1.06-1.06M6.696 6.696l-1.06-1.06M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z"/></svg>
                    }
                </button>

            </div>
        </div>

    )
}