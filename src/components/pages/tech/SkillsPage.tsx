import htmlIcon from "../../../assets/images/html.svg";
import cssIcon from "../../../assets/images/css.svg";
import javaScriptIcon from "../../../assets/images/javascript.svg";
import reactIcon from "../../../assets/images/react.svg";
import gitIcon from "../../../assets/images/git.svg";
import awsIcon from "../../../assets/images/aws.svg";
import expressIcon from "../../../assets/images/expresss.svg";
import vueIcon from "../../../assets/images/vuejs.svg";
import tailWindIcon from "../../../assets/images/tailwind.svg";
import typeScriptIcon from "../../../assets/images/typescript.svg";
import {useEffect, useRef, useState} from "react";

interface SkillsPageProps {
    lightMode?: boolean;
}

export default function SkillsPage({ lightMode }: SkillsPageProps) {
    const [containerSize, setContainerSize] = useState(500);
    const [radius, setRadius] = useState(300);
    const lightTheme = "text-gray-400";
    const containerRef = useRef<HTMLDivElement>(null);


    const icons = [
        { name: "HTML", svg: htmlIcon },
        { name: "Express", svg: expressIcon },
        { name: "CSS", svg: cssIcon },
        { name: "JavaScript", svg: javaScriptIcon },
        { name: "", svg: reactIcon },
        { name: "Git", svg: gitIcon },
        { name: "AWS", svg: awsIcon },
        { name: "Vue", svg: vueIcon },
        { name: "Tailwind", svg: tailWindIcon },
        { name: "TypeScript", svg: typeScriptIcon },
    ];

    useEffect(() => {
        function updateSize() {
            if (containerRef.current) {
                const width = window.innerWidth;

                // Update container size from the actual DOM size
                const size = containerRef.current.offsetWidth;
                setContainerSize(size);

                // Set radius based on screen width (responsive)
                setRadius(width < 768 ? 150 : 300);
            }
        }

        updateSize(); // Run initially
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className=" w-full h-[700px] mt-5  flex justify-center relative  items-center">
            <div ref={containerRef} className="  hover:scale-105 transition-transform w-[400px] h-[400px] md:w-[500px]  md:h-[500px]">
                {/* Circle of Icons */}
                {icons.map((icon, i) => {
                    // const isMobile = window.innerWidth < 768;
                    // const containerSize = isMobile ? 5 : 500;
                    // const radius = isMobile? 150:300;

                    const angle = (360 / icons.length) * i;
                    const rad = (angle * Math.PI) / 180;
                    const center = containerSize / 2;
                    // const radius = 150;
                    // const radius = 300;

                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    return (
                        <div data-aos={'fade-in'}
                            key={i}
                            className="absolute flex flex-col items-center text-xs"
                            style={{
                                transform: `translate(${x + center - 24}px, ${y + center - 24}px)`, // 250 = center, 24 = half image size
                            }}
                        >
                            <img src={icon.svg} alt={icon.name} className="w-12 h-12" />
                            <span className={`mt-1 ${lightMode? "text-black" : "text-white"}`}>{icon.name}</span>
                        </div>
                    );
                })}

                {/* Center text */}

                <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl ${
                        lightMode ? lightTheme : "text-white"
                    }`}
                >
                    /skills
                </div>
            </div>
        </div>
    );
}
