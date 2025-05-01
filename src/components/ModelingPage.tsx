import {useNavigate} from "react-router-dom";
import {RouteConstant} from "../util/constant/RouteConstant.ts";



export default function ModelingPage(){

    const navigate = useNavigate()
    return(
        <>
            <div
                className={"lagos-brand-shoot  justify-center text-white text-4xl font-normal font-mono"}>
                <p>

                </p>
                <ul className="menu p-4 flex-col gap-2 flex">
                    <li><a href="#!">Polaroids</a></li>
                    <li className={"cursor-pointer"}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(RouteConstant.landing.brands.path);
                            }}
                        >
                            Brand Shoots
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(RouteConstant.landing.musicVideos.path);
                            }}
                        >
                            Music Videos
                        </a>
                    </li>
                    <li><a href="#!">Film</a></li>
                </ul>
            </div>
        </>
    )
}