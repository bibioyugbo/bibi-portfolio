// import {useSelector} from "react-redux";
// import {AuthState} from "../../store/modules/auth.ts";
import {Route} from "react-router-dom";
import {RouteType} from "../type/route.ts";
// import {StringUtil} from "../StringUtil.ts";

export type RouterType = {
    routes:RouteType[],
    defaultPath: string
}
export const PrivateRoute = (props:RouterType) => {
    // const authState = useSelector<any>((state)=> state.auth) as AuthState
    console.log(props)
    return (
        <Route>
            <Route path={'/'} element={<p>Hello World</p>} />
            {/*{(props.routes).map(route => <Route path={route.path} element={route.element} />)}*/}
            {/*{StringUtil.isSuccess(authState.userInfo.responseCode) && (props.routes).map(route => <Route path={route.path} element={route.element} />)}*/}
            {/*{!StringUtil.isSuccess(authState.userInfo.responseCode) && (props.routes).map(route => <Route path={props.defaultPath} element={route.element} />)}*/}
        </Route>
    )
}