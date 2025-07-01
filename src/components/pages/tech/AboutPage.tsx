import Lottie from 'lottie-react';
import designAnimation from '../../animations/design.json'
import buildAnimation from '../../animations/build.json'
import nodejsAnimation from '../../animations/nodejs.json'
import collabAnimation from '../../animations/collabo.json'





interface AboutPageProps{
    lightMode?:boolean
}


export default function AboutPage({lightMode}:AboutPageProps){

    const lightTheme = "text-gray-400"
    const aboutContent = [
        {
         action: "I Design",
         animation: designAnimation,
         text:"sleek, responsive interfaces that feel effortless to use across devices and screen sizes. My goal is always clarity, accessibility, and beauty in motion."
        },
        {
            action: "I Build",
            animation: buildAnimation,
            text:"scalable, interactive web applications using React, TypeScript, and modern tooling. I care deeply about performance, maintainability, and clean architecture"
        },
        {
            action: "I Implement",
            animation: nodejsAnimation,
            text:"backend services, APIs, and cloud functions, building what’s needed to make the frontend shine. I'm always exploring ways to deepen my full-stack skills."
        },
        {
            action: "I Collaborate",
            animation: collabAnimation,
            text:"closely with designers, product managers, and other devs to bring projects to life communication and teamwork are just as important as clean code."
        },

    ]



    return(
        <div className={"flex flex-col p-5 justify-center "}>
            <div className={`${lightMode? lightTheme:"text-white"} text-[18px] mb-3 sm:text-2xl text-center`}>/about</div>
            {/*<div className={"text-[18px] text-center py-5"}>*/}
            {/*    I’m a software engineer with over 3 years of experience building for the web.*/}
            {/*    From games and business websites to full-scale e-commerce applications, I’m passionate about bringing ideas to life with clean, thoughtful interfaces and seamless user experiences.*/}
            {/*</div>*/}
            <div className={"flex flex-col gap-3"}>
                {aboutContent.map((item, i)=> {

                    const spanColor =
                        i === 0 ? 'text-[deeppink]' :
                            i === 1 ? 'text-orange-600' :
                                i === 2 ? 'text-[#FFFF33]' :
                                    'text-[#D000FF]';
                    return(
                        <div data-aos="fade-up" key={i} className={` flex flex-col items-center md:!flex-row md:items-center md:justify-center ${lightMode ? "bg-gray-400  p-3 my-4 rounded-xl  text-white" : ""} ${i===0 || i===1?"self-start" : "self-end"}  text-[17px] gap-5`}>
                            <div className={`${i===3? "h-[160px] pt-5 md:!pt-0":"h-[120px]"} md:h-[160px] w-[140px] md:w-[160px]`}>
                                <Lottie animationData={item.animation} loop autoplay/>
                            </div>
                            <div className={`text-[12px] md:text-base  md:max-w-[530px]`}><span className={` text-base md:text-[28px] ${spanColor}`}>{item.action}</span> {item.text}</div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}