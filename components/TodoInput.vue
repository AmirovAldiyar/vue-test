<template>
    <div class='todo-input'>
        <input ref="todo" type="text" v-model="content" class='todo-input-field' @keyup.enter='onSubmit' placeholder="write new todo" v-on:submit="onSubmit"/>
        <div v-on:click="onSubmit" class='button--grey submit-button'>add</div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data: function () {
        return {
            content: ""
        }
    },
    methods: {
        ...mapMutations(['addTodo']),
        onSubmit: function() {
            if(this.content !== ""){
                this.addTodo(this.content)
                this.content = ""
            }
        }
    },
    mounted() {
        this.$refs.todo.focus()
    }
}
</script>

<style>
.todo-input{
    margin-bottom: 1vh;
}
.todo-input-field{
    height: 3vh;
    font-size: large;
    outline: none;
}
.todo-input-field:focus{
    outline: none;
}
.submit-button{
    user-select: none;
}
</style>
