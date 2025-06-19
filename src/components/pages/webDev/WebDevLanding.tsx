import chooselifeSS from "../../../assets/images/chooselife-ss.png"
import dateOrDisaster from "../../../assets/images/date-or-disaster.png"
import chessGame from "../../../assets/images/chess-game.png"
import twitterMock from "../../../assets/images/twitter-pic.png"



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
            liveDemo: "https://www.chooselifewellness.co/"
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
            github: "https://github.com/bibioyugbo/twitter-mass-block-feature"

        },
        {
            name: "Date or Disaster",
            description: "Dating Question Game",
            src: dateOrDisaster,
            liveDemo: "https://date-or-disaster.netlify.app/",
            github: "https://github.com/bibioyugbo/twitter-game-frontend"

        },
    ]

    return(
        <>
            <div className={"p-5"}>
                <div className={""}>
                    {/*I build real value <span>PROJECTS</span>*/}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10">
                    {webProjects.map((project, index)=>{
                        return (
                            <div key={index} className={`rounded-xl hover:scale-105 transition-transform max-w-[450px] max-h-[350px] p-4 ${lightMode?lightTheme:"bg-gray-800"}`}>
                                <img  className={" mb-3 rounded-xl w-full"} src={project.src} alt={""}/>
                                <div className={"flex justify-between items-center"}>
                                    <div>
                                        <div>{project.name}</div>
                                        <div className={"text-sm"}>{project.description}</div>
                                    </div>
                                    <div className={"flex items-center justify-center gap-3"}>
                                        {project.github && <a target="_blank" rel="noopener noreferrer" href={project.github}>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#fff" d="M2 12h2v-1H3v-1H2V9H1V8h1v1h1v1h1V9h1V8H3V7H2V4h1V2h1v1h3V2h1v2h1v3H8v1H6v1h1v3h2v-1h1v-1h1V3h-1V2H9V1H2v1H1v1H0v7h1v1h1Zm0 0"/></svg></a>}
                                        <a  target="_blank" rel="noopener noreferrer" href={project.liveDemo}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/></svg></a>
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