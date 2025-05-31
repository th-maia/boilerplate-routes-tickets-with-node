
// create a regex that is passed to routes index to url with named params(use ? =) like http://localhost:3000/tickets?status=closed
export function parseRoutepath(path) {
    const routeParametersRegex= /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)
    
    return pathRegex
}