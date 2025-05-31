export function updateStatus({ request, response, database}) {
    const { id } = request.params
    const { solution } = request.body
    // put 'status:closed' and add a solution object passed on request
    database.update("tickets", id, { status: "closed", solution }) 
    return response.end()
}