export default {
    actions: {
    },
    mutations: {
        addTodo(state, todo){
            state.todos.unshift({id: (state.todos[0] || {id: -1}).id+1, content: todo})
        },
        delTodo(state, id){
            state.todos = state.todos.filter(t => t.id !== id)
        }
    },
    state() {
        return {
            todos: []
        }
    },
    getters: {
        allTodos(state) {
            return state.todos
        }
    }
}
