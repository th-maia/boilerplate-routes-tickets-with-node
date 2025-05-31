
//exemple: tickets/?status=closed  remove the ?, do a array [key, value] of each query.
export function extractQueryParams(query) {
    return query.slice(1)
            .split("&")
            .reduce((queryParams, param) => {
                const [key, value] = param.split("=")
                queryParams[key] = value
                return queryParams
            }, {})
}