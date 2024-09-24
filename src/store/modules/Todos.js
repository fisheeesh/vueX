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
        },
        /** 
         * ! We have to change the existing data with the updated data by looping through the existing todos array with is objects array
         */
        updateTodo(state, todo){
            state.todos.forEach(t => {
                if(t.id === todo.id) t = todo
            })
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
        },
        /**
         * ! We connect with put req to the api to the update data by id and we have to pass the updated data in the second parameter
         * ! If we dun commit mutation, the data will no change
         * ! so we have to commit the desired mutation and pass the updated data
         */
        async updateTodo(context, todo){
            let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
            context.commit('updateTodo', res.data)
        }
    }
}