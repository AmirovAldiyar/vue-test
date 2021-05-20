<template>
    <div class='todo-container'>
        <todo-input :addTodo="addTodo"/>
        <div class="todo-list">
            <todo-entity v-for="todo in todos" v-bind:content="todo.content" v-bind:key="todo.id" v-bind:delTodo="delTodo" v-bind:id='todo.id'/>
        </div>
  </div>
</template>

<script>
import TodoEntity from './TodoEntity.vue'
import TodoInput from './TodoInput.vue'
export default {
  components: { TodoEntity, TodoInput },
    data: function() {
        return {
            todos: [
                {id: 1, content: "First todo"},
                {id: 2, content: "Second todo"},
                {id: 3, content: "Third todo"},
            ]
        }
    },
    methods: {
        addTodo: function (newTodo) {
            this.todos = [...this.todos, {id: this.todos.length+1, content: newTodo}]
        },
        delTodo: function (id) {
            this.todos = this.todos.filter(t => t.id !== id)
        }
    }
}
</script>

<style>
.todo-container{
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
}
.todo-list{
    display: flex;
    flex-direction: column;
    width: 30vw;
    border-radius: 20px;
    align-items: center;
}
</style>
