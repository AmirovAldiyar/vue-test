<template>
  <div class="container-todo-entity" v-bind:class="{done: isDone}" v-on:click="onClick">{{content}}</div>
</template>

<script>
export default {
    data: function () {
        return {
            isDone: false
        }
    },
    methods: {
        onClick: async function () {
            this.isDone = !this.isDone
            await setTimeout(() => {
                this.delTodo(this.id)
            }, 500)
        }
    },
    props: ['content', 'delTodo', 'id']
}
</script>

<style>
.container-todo-entity{
    font-size: 3vh;
    width: 90%;
    border-radius: 0.5vh;
    height: 5vh;
    text-align: center;
    color: rgb(46, 46, 46);
    margin-top: 1vh;
    margin-bottom: 1vh;
    box-shadow:  0 0 0 1px black;
    font-weight: lighter;
}
.done{
    text-decoration: line-through;
}
</style>
