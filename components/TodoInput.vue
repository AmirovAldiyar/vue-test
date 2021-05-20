<template>
    <div class='todo-input'>
        <input type="text" v-model="content" class='todo-input-field' placeholder="write new todo" v-on:submit="onSubmit"/>
        <div v-on:click="onSubmit" class='button--grey submit-button'>add</div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            content: ""
        }
    },
    methods: {
        onSubmit: function() {
            if(this.content !== ""){
                this.addTodo(this.content)
                this.content = ""
            }
        }
    },
    props: {
        addTodo: {type: Function},
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
