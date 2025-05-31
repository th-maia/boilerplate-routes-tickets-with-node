import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHancler.js";


// overview of the program:
// middleware jsonHandler to buffer -> middleware routeHander -> look the routes and go to the controller -> database
const server = http.createServer( async (request, response) => {
    await jsonHandler(request, response) // take the buffer transform in JSON send to request.body
    routeHandler(request, response)
});

// Define the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
