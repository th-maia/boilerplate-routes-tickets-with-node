export function index({ request, response, database }) {
    const { status } = request.query
 
    const filters = status ? { status } : null

    // show on database the key tickets with the status
    const tickets = database.select("tickets", filters)
    
    return response.end(JSON.stringify(tickets))
}