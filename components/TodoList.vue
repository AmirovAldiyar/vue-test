<template>
    <div class='todo-container'>
        <todo-input/>
        <div class="todo-list">
            <todo-entity v-for="todo in allTodos" v-bind:content="todo.content" v-bind:key="todo.id" v-bind:id='todo.id'/>
        </div>
  </div>
</template>

<script>
import TodoEntity from './TodoEntity.vue'
import TodoInput from './TodoInput.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: { TodoEntity, TodoInput },
    computed: {
      ...mapGetters(['allTodos'])
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
