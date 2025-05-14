import chooselifeSS from "../../assets/images/chooselife-ss.png"
import gitHub from "../../assets/images/gitub-icon.png"



export default function WebDevLanding(){

    const webProjects = [
        {
            name: "Chooselife",
            description: "Wellness solutions provider",
            src: chooselifeSS,
            liveDemo: "https://www.chooselifewellness.co/"
        },
        {
            name: "Chooselife",
            description: "Wellness solutions provider",
            src: chooselifeSS,
            liveDemo: "https://www.google.com/"
        }
    ]

    return(
        <>
            <div className="border-2 rounded-md border-white p-4  bg-black flex flex-col  h-screen text-white text-2xl font-mono">
                    <div className={"mb-4"}>
                        I build real value <span>PROJECTS</span>
                    </div>
                    <div className={"flex gap-2 flex-col md:flex-row md:gap-10"}>
                        {webProjects.map((project, index)=>{
                            return (
                                <div key={index} className={"rounded-xl hover:scale-105 transition-transform max-w-[450px] max-h-[350px] p-4 bg-gray-800"}>
                                    <img  className={" rounded-xl w-full"} src={project.src} alt={""}/>
                                    <div>
                                        <div>
                                            <div>{project.name}</div>
                                            <div className={"text-sm"}>{project.description}</div>
                                        </div>
                                        <div>
                                            <img src={gitHub} alt={""}/>
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