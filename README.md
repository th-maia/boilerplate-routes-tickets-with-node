this my boilerplate of backend with routes to support tickets using node.

it the create the file db.json in src/database with the database data.

server.js create a server on port 3000

the server.js call the middlewares
-jsonHandler "./middlewares/jsonHandler.js" ---- take the buffer transform in JSON send to request.body
-routeHandler "./middlewares/routeHancler.js" ---- find the route, put the params on request.params and request.query before call the call the controller

```
the ticket shape
 const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(), 
  }
````
  routes on routes tickets are passed to `src/routes/index.js`

  format of the routes

```
  export const tickets = [
  {
    method: 'POST',
    path: "/tickets",
    controller: create,
  },
  {
    method: 'GET',
    path: "/tickets",
    controller: index,
  },
  {
    method: 'PUT',
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: 'PATCH',
    path: "/tickets/:id/closed",
    controller: updateStatus,
  },
  {
    method: 'DELETE',
    path: "/tickets/:id",
    controller: remove,
  }
]
```