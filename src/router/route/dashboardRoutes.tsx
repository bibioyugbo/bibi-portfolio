import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import {type RouteType} from "../../util/type/route.ts";
import LandingPageView from "../../views/LandingPageView.tsx";
import WorksPageView from "../../views/WorksPageView.tsx";
import BrandPageView from "../../views/BrandPageView.tsx";
import MusicVideosPageView from "../../views/MusicVideosPageView.tsx";
import PolaroidsView from "../../views/PolaroidsView.tsx";





export const dashboardRoutes: RouteType[] = [
    {
        path: RouteConstant.dashboard.home.path,
        name: RouteConstant.dashboard.home.name,
        element: <LandingPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.dashboard.works.path,
        name: RouteConstant.dashboard.works.name,
        element: <WorksPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.dashboard.brands.path,
        name: RouteConstant.dashboard.brands.name,
        element: <BrandPageView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.dashboard.polaroid.path,
        name: RouteConstant.dashboard.polaroid.name,
        element: <PolaroidsView/>,
        metadata:{isProtected:false}
    },
    {
        path: RouteConstant.dashboard.musicVideos.path,
        name: RouteConstant.dashboard.musicVideos.name,
        element: <MusicVideosPageView/>,
        metadata:{isProtected:false}
    },

]