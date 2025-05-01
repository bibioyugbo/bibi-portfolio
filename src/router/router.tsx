import { Route, Routes} from "react-router-dom";
import {dashboardRoutes} from "./route/dashboardRoutes.tsx";
import { AnimatePresence } from 'framer-motion';

// import {useSelector} from "react-redux";

export const Router = () => {
    const routes = [...dashboardRoutes]
    const publicRoute  =  routes.filter(it => !it.metadata.isProtected)
    const privateRoute  =  routes.filter(it => it.metadata.isProtected)
    console.log(publicRoute)
    console.log(privateRoute)
    return(
        <AnimatePresence mode="wait">
            <Routes>
                {(publicRoute).map(route => <Route key={route.path} path={route.path} element={route.element} />)}
            </Routes>
        </AnimatePresence>
    )
}