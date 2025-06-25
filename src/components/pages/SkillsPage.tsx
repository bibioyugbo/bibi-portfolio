import htmlIcon from "../../assets/images/html.svg";
import cssIcon from "../../assets/images/css.svg";
import javaScriptIcon from "../../assets/images/javascript.svg";
import reactIcon from "../../assets/images/react.svg";
import gitIcon from "../../assets/images/git.svg";
import vueIcon from "../../assets/images/vuejs.svg";
import tailWindIcon from "../../assets/images/tailwind.svg";
import typeScriptIcon from "../../assets/images/typescript.svg";

interface SkillsPageProps {
    lightMode?: boolean;
}

export default function SkillsPage({ lightMode }: SkillsPageProps) {
    const lightTheme = "text-black";

    const icons = [
        { name: "HTML", svg: htmlIcon },
        { name: "CSS", svg: cssIcon },
        { name: "JavaScript", svg: javaScriptIcon },
        { name: "React", svg: reactIcon },
        { name: "Git", svg: gitIcon },
        { name: "Vue", svg: vueIcon },
        { name: "Tailwind", svg: tailWindIcon },
        { name: "TypeScript", svg: typeScriptIcon },
    ];

    return (
        <div className="w-full h-[700px] flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
                {/* Circle of Icons */}
                {icons.map((icon, i) => {
                    const angle = (360 / icons.length) * i;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 300;

                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    return (
                        <div data-aos={'fade-in'}
                            key={i}
                            className="absolute hover:scale-105 origin-center transition-transform flex flex-col items-center text-xs"
                            style={{
                                transform: `translate(${x + 250 - 24}px, ${y + 250 - 24}px)`, // 250 = center, 24 = half image size
                            }}
                        >
                            <img src={icon.svg} alt={icon.name} className="w-12 h-12" />
                            <span className={`mt-1 ${lightMode? lightTheme : "text-white"}`}>{icon.name}</span>
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
