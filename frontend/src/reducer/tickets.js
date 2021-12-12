import ticketsJson from './data/tickets.json';

const tickets = (state = ticketsJson, action) => {
    switch (action.type) {
        case 'fetch-all-tickets':
            return action.tickets;

        case 'create-ticket':
            const ticket = {
                id: (new Date()).getTime() + '',
                name: "New Ticket",
                description: "",
                project: "",
                submitter: "",
                assigned_developer: "",
                priority: "Low",
                status: "New",
                type: "Bug",
                created_date: (new Date()).toString()
            };
            return [
                ticket,
                ...state
            ];

        case 'delete-ticket':
            return state.filter(ticket => ticket.id !== action.ticket.id);

        case 'edit-ticket':
            // TODO: add edit tickets 
            return state;
        default:
            return state;
    }
}

export default tickets;