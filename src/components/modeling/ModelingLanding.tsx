import {useNavigate} from "react-router-dom";
import {RouteConstant} from "../../util/constant/RouteConstant.ts";



export default function ModelingLanding(){

    const navigate = useNavigate()

    return(
        <>
            <div
                className={"lagos-brand-shoot  justify-center text-white text-4xl font-normal font-mono"}>
                <p>

                </p>
                <ul className="menu p-4 flex-col gap-2 flex">
                    <li><a
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(RouteConstant.dashboard.polaroid.path);
                        }}
                    >Polaroids</a></li>
                    <li className={"cursor-pointer"}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(RouteConstant.dashboard.brands.path);
                            }}
                        >
                            Brand Shoots
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(RouteConstant.dashboard.musicVideos.path);
                            }}
                        >
                            Music Videos
                        </a>
                    </li>
                    <li><a>Film</a></li>
                </ul>
            </div>
        </>
    )
}