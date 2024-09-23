export default {
    state : {
        todos : [
            {id : 1, title : "Todos 1"},
            {id : 2, title : "Todos 2"},
            {id : 3, title : "Todos 3"}
        ]
    },
    getters : {
        myTodos (state) {
            return state.todos
        }
    },
    mutations : {},
    actions : {}
}