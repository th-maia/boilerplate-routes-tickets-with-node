import { Database } from "../database/database.js"
import { routes } from "../routes/index.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"

const database = new Database()

export function routeHandler(request, response) {
	//find in routes keys method and regex in route.path of a route that combine with the request
	const route = routes.find((route) => {
		return route.method === request.method && route.path.test(request.url) 
	})

	if(route){
		//take the params from the request using the regex in route.path.
		const routeParams = request.url.match(route.path)
		
		const { query, ...params } = routeParams.groups
		//this add keys to request.params to stay easy to get theses params & query.
		request.params = params
		request.query = query ? extractQueryParams(query) : {}

		//call the controller to do what the route need do do.
		return route.controller({ request, response, database })
	}

	return response.writeHead(404).end("route not found")
}

