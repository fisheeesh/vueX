import axios from "axios"

export default {
    state : {
        todos : []
    },
    getters : {
        myTodos(state){
            return state.todos
        }
    },
    mutations : {
        setTodos(state, todos){
            state.todos = todos
        },
        setTodo(state, newTodo){
            state.todos.unshift(newTodo)
        },
        removeTodo(state, removeId){
            state.todos = state.todos.filter(todo => todo.id !== removeId)
        }
    },
    actions : {
        async getTodos({commit}){
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            let todos = response.data
        
            commit('setTodos', todos)
        },
        async addTodo(context, newTodo){
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            context.commit('setTodo', res.data)
        },
        async deleteTodo(context, removeId){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${{removeId}}`)
            context.commit('removeTodo', removeId)
        },
        async filterTodo(context, limit){
            let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            console.log(res.data)

            context.commit('setTodos', res.data)
        }
    }
}