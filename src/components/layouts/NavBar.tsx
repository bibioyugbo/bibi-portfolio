import twitterImg from "../../assets/images/twitter-white.png";
import gitHubImg from "../../assets/images/gitub-icon.png";
import linkedIn from "../../assets/images/linkedin-white.png";
import instaImg from "../../assets/images/instagram-white-icon.png";
import muteImg from "../../assets/images/mute-icon.svg";

export default function NavBar(){

    function handleMute() {
        const sound = document.getElementById('clickSound') as HTMLAudioElement;
        sound.currentTime = 0;  // Reset to start for repeated taps
        sound.pause();
    }

    return(
        <div className={"flex py-3 z-999 sticky top-0 justify-between"}>
            <div className={"flex justify-start gap-4 items-center"}>
                <a  target="_blank" rel="noopener noreferrer"  href="https://x.com/bibibuilds">
                    <img src={twitterImg} height={25} width={25} alt="" />
                </a>
                <a  target="_blank" rel="noopener noreferrer"  href="https://github.com/bibioyugbo">
                    <img src={gitHubImg} height={25} width={25} alt="" />
                </a>
                <a className={"mb-1"} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obehioye-oyugbo-022107216/">
                    <img src={linkedIn} height={25} width={25} alt="" />
                </a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/bibioxox/">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd"/></svg>*/}
                    <img src={instaImg} height={25} width={25} className="sm:h-[25px] sm:w-[25px]" alt="" />
                </a>
                <a href={"https://drive.google.com/file/d/1efRjm4Lj_vRKORMpsya3bJb_t8o8FRj0/view?usp=sharing"} target={"_blank"} download className=" bg-white text-sm text-black rounded-md cursor-pointer p-2"
                > View CV
                </a>

            </div>
            <div className={"flex justify-end"}>
                <img onClick={()=>handleMute()} className={"cursor-pointer"} src={muteImg} height={5} width={25} alt={""}/>
            </div>
        </div>

    )
}