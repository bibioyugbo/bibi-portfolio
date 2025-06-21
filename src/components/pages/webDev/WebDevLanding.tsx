import chooselifeSS from "../../../assets/images/chooselife-ss.png"
import dateOrDisaster from "../../../assets/images/date-or-disaster.png"
import chessGame from "../../../assets/images/chess-game.png"
import twitterMock from "../../../assets/images/twitter-pic.png"
import todoApp from "../../../assets/images/todo-app.png"
import netflixClone from "../../../assets/images/netflix.png"






interface WebDevLandingProps{
    lightMode?:boolean
}

export default function WebDevLanding({lightMode}:WebDevLandingProps){

    const lightTheme = "text-black bg-gray-400"

    const webProjects = [
        {
            name: "Chooselife",
            description: "Wellness solutions provider",
            src: chooselifeSS,
            liveDemo: "https://www.chooselifewellness.co/",
            stackUsed: ["React","Tailwind"]
        },

        {
            name: "Chess Multiplayer Game",
            description: "A two player chess game",
            src: chessGame,
            liveDemo: "https://date-or-disaster.netlify.app/",
            github: "https://github.com/bibioyugbo/MultiplayerChessGame"

        },
        {
            name: "Twitter What-Ifs",
            description: "Twitter If It has additional features",
            src: twitterMock,
            liveDemo: "https://date-or-disaster.netlify.app/",
            github: "https://github.com/bibioyugbo/twitter-mass-block-feature",
            stackUsed: ["React","HTML","CSS"]
        },
        {
            name: "To-do Application",
            description: "Application to add, edit and delete list of tasks",
            src: todoApp,
            liveDemo: "https://todo-app-jcr3.onrender.com",
            github: "https://github.com/bibioyugbo/todo-app",
            stackUsed: ["Ejs","Node.js","CSS","Javascript"]
        },
        {
            name: "Date or Disaster",
            description: "Dating Question Game",
            src: dateOrDisaster,
            liveDemo: "https://date-or-disaster.netlify.app/",
            github: "https://twitter-additional-features.netlify.app/",
            stackUsed: ["React","Tailwind", "Node.js"]
        },
        {
            name: "Netflix Clone",
            description: "Clone of netflix landing page",
            src: netflixClone,
            liveDemo: "https://todo-app-jcr3.onrender.com",
            github: "https://github.com/bibioyugbo/netflix_clone2",
            stackUsed: ["Vue","HTML","CSS"]
        },
    ]

    return(
        <>
            <div className={"p-5"}>
                <div className={`${lightMode? "text-gray-400":"text-white"} text-center`}>
                    /projects
                </div>
                <div className="grid grid-cols-1 mt-4 mb-2 md:grid-cols-3 gap-2 md:gap-10">
                    {webProjects.map((project, index)=>{
                        return (
                            <div key={index} className={`rounded-xl  max-w-[450px]  p-4 ${lightMode?lightTheme:"bg-gray-800"}`}>
                                <img  className={" mb-3 rounded-xl w-full"} src={project.src} alt={""}/>
                                <div className={"flex justify-between items-center"}>
                                    <div>
                                        <div>{project.name}</div>
                                        <div className={"text-sm"}>{project.description}</div>

                                        <div className={"flex gap-2"}>
                                            {project.stackUsed? project.stackUsed.map((item, index)=>{
                                                return(

                                                    <div key={index} className={` ${lightMode?"bg-white":"bg-gray-400" }  mt-2 text-sm rounded-md w-fit p-1`}>{item}</div>
                                                )
                                            }):""}
                                        </div>

                                    </div>
                                    <div className={"flex items-center justify-center gap-3"}>
                                        {project.github && <a target="_blank" className={"hover:scale-110 transition-transform"} rel="noopener noreferrer" href={project.github}>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#fff" d="M2 12h2v-1H3v-1H2V9H1V8h1v1h1v1h1V9h1V8H3V7H2V4h1V2h1v1h3V2h1v2h1v3H8v1H6v1h1v3h2v-1h1v-1h1V3h-1V2H9V1H2v1H1v1H0v7h1v1h1Zm0 0"/></svg></a>}
                                        <a className={"hover:scale-110 transition-transform"}  target="_blank" rel="noopener noreferrer" href={project.liveDemo}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/></svg></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </>
    )
}