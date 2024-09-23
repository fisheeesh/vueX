import axios from "axios"

export default {
    state : {
        todos : [
            {id :1, title : 'Title 1'},
            {id :2, title : 'Title 2'},
            {id :3, title : 'Title 3'}
        ]
    },
    getters : {
        myTodos(state){
            return state.todos
        }
    },
    mutations : {
        setTodos(state, todos){
            state.todos = todos
        }
    },
    actions : {
        async getTodos({commit}){
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            let todos = response.data
        
            commit('setTodos', todos)
        }
    }
}