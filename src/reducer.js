export default function(state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case 'removeTodo':
            return state.filter(item => {
                return item.id !== action.payload
            })
        case 'toggleTodo':
            return state.map(item => {
                if(item.id === action.payload) {
                    item.completed = !item.completed
                }
                return item
            })
        default:
            return state
    }
}