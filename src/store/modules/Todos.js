import axios from "axios"

export default {
    state : {
        todos : []
    },
    getters : {
        myTodos (state) {
            return state.todos
        }
    },
    mutations : {
        setTodos(state, todos){
            state.todos = todos
        }
    },
    actions : {
        async getTodos({commit}) {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            let todos = response.data

            commit('setTodos', todos)
        }
    }
}