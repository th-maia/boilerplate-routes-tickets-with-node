import { parseRoutepath } from "../utils/parseRoutePath.js";
import { tickets } from "./tickets.js";


//organizing importing all routes to this file
export let routes = [...tickets].map((route) => ({
    ...route,
    path: parseRoutepath(route.path), //transform the path of the route in a regex that can be compared with the request.path.
}))
