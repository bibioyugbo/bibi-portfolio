import twitterImg2 from "../../../assets/images/grey-twitter.svg";
import twitterImg from "../../../assets/images/twitter-white.png";
import gitHubImg2 from "../../../assets/images/grey-github.svg";
import gitHubImg from "../../../assets/images/gitub-icon.png";
import linkedIn2 from "../../../assets/images/grey-linkedin.svg";
import linkedIn from "../../../assets/images/linkedin-white.png";
import instaImg2 from "../../../assets/images/grey-ig.svg";
import instaImg from "../../../assets/images/instagram-white-icon.png";
import whatsappImg from "../../../assets/images/whatsapp.svg"
import whatsappImg2 from "../../../assets/images/whatsapp2.svg"
import gmailImg from "../../../assets/images/gmail.svg"
import gmailImg2 from "../../../assets/images/gmail2.svg"



interface ContactPageProps{
    lightMode?:boolean
}
export default function ContactPage({lightMode}:ContactPageProps){

    const lightTheme = "text-white bg-gray-400"

    return(
       <>
           <div className={"flex flex-col justify-center items-center"}>
               <div className={"flex flex-col items-center justify-center"}>
                   {lightMode?
                   <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="#9CA3AF" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
                   :<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
                   }
                   <div className={`${lightMode? "text-gray-400":"text-white"} text-[18px] mb-3 sm:text-2xl`}>/contact me</div>
                   <div className={"text-sm text-center max-w-[500px]"}>I’d love to hear from you! Any question or remarks? Just write me a message. Let’s create something amazing together!</div>

               </div>
               <div className={" w-full max-w-[800px] mt-5 p-5 justify-center items-center  rounded-md"}>
                   <form  className={"h-full w-full mt-10 flex gap-5 flex-col"}  name="contact" method="POST" data-netlify="true">
                       <label className={"text-xl"}>Name</label>
                       <input className={`${lightMode?"border-black":"border-white"} border-2 p-3 text-[18px] rounded-md`} type="text" name="name" required />
                       <label className={"text-xl"}>Email</label>
                       <input  className={`${lightMode?"border-black":"border-white"} border-2 p-3 text-[18px] rounded-md`}  type="email" name="email" required />
                       <label className={"text-xl"}>Message</label>
                       <textarea  className={`${lightMode?"border-black":"border-white"} border-2 p-3 h-[300px] text-[18px] rounded-md`} name="message" required></textarea>
                       <div className={"flex gap-2 justify-between items-center"}>
                           <button className={`${lightMode? lightTheme: "text-black bg-white"}  border-2 max-w-[250px] rounded-md mt-4 text-sm sm:text-2xl hover:bg-[black] hover:text-white  cursor-pointer px-4 py-2  duration-40 active:scale-95 transition-transform`} type="submit">Send</button>
                           <div className={`flex ${lightMode ? "bg-white/30 backdrop-blur" : "bg-black/30 backdrop-blur"} p-3 rounded-md justify-start gap-4 items-center`}>
                               <a  target="_blank" rel="noopener noreferrer"  href="https://x.com/bibibuilds">
                                   <img src={lightMode?twitterImg2:twitterImg} height={25} width={25} alt="" />
                               </a>
                               <a  target="_blank" rel="noopener noreferrer"  href="https://github.com/bibioyugbo">
                                   <img src={lightMode? gitHubImg2:gitHubImg} height={25} width={25} alt="" />
                               </a>
                               <a className={!lightMode? "mb-1":""} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obehioye-oyugbo-022107216/">
                                   <img src={lightMode? linkedIn2:linkedIn} height={25} width={25} alt="" />
                               </a>
                               <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/bibioxox/">
                                   <img src={lightMode?instaImg2:instaImg} height={25} width={25} className="sm:h-[25px] sm:w-[25px]" alt="" />
                               </a>
                               <a target="_blank" rel="noopener noreferrer"  href="https://wa.me/2348112931975?text=Hello%20Obehioye%2C%20I%20saw%20your%20work!
">
                                   <img src={lightMode?whatsappImg2:whatsappImg} height={27} width={27} className="" alt="" />
                               </a>
                               <a target="_blank" rel="noopener noreferrer"  href="https://mail.google.com/mail/?view=cm&fs=1&to=obehioyeoyugbo@gmail.com">
                                   <img src={lightMode?gmailImg2:gmailImg} height={25} width={25} className="" alt="" />
                               </a>
                           </div>
                       </div>
                   </form>
               </div>
           </div>

       </>
   )
}