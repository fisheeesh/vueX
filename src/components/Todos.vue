<template>
    <div>
        <h3 class="text-center text-primary">{{ $store.state.Todos.sayHello }}</h3>
        <div class="container">
            <div class="row">
                <AddTodo></AddTodo>
            </div>
            <div class="row">
                <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
                    <b-card bg-variant="primary" text-variant="white" class="text-center">
                        <b-card-text class="d-flex justify-content-between">
                            <span>{{ todo.title }}</span>
                            <span @click="deleteTodo(todo.id)"><b-icon icon="trash-fill" variant="danger"></b-icon></span>
                        </b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddTodo from './AddTodo'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { AddTodo },
    methods : mapActions([
        'getTodos',
        'deleteTodo'
    ]),
    computed : {
        myLocalComputed(){
            return 'sth'
        },
        ...mapGetters([
            'myTodos'
        ])
    },
    mounted() {
        // console.log(this.$store.state.Todos.sayHello)
        // console.log(this.myTodos, this.myLocalComputed)
        this.getTodos()
    }
}
</script>

<style></style>