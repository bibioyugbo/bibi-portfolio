import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import {type RouteType} from "../../util/type/route.ts";
import LandingPageView from "../../views/LandingPageView.tsx";
import WorksPageView from "../../views/WorksPageView.tsx";
import BrandPageView from "../../views/BrandPageView.tsx";
import MusicVideosPageView from "../../views/MusicVideosPageView.tsx";





export const dashboardRoutes: RouteType[] = [
    {
        path: RouteConstant.landing.home.path,
        name: RouteConstant.landing.home.name,
        element: <LandingPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.landing.works.path,
        name: RouteConstant.landing.works.name,
        element: <WorksPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.landing.brands.path,
        name: RouteConstant.landing.brands.name,
        element: <BrandPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.landing.musicVideos.path,
        name: RouteConstant.landing.musicVideos.name,
        element: <MusicVideosPageView/>,
        metadata:{isProtected:false}
    },

]