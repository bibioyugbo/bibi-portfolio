import * as React from "react";

export type RouteType={
    name: string,
    path: string,
    element: React.ReactNode,
    metadata:{isProtected: boolean}
}