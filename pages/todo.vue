<template>
    <div class="container">
        <div class='back-button'>
            <NuxtLink
            to="/"
            rel="noopener noreferrer"
            class="button--grey"
            > Back
            </NuxtLink>
        </div>
        <todo-list/>
    </div>
</template>

<script>
import TestComp from "../components/TestComp.vue"
import TodoList from "../components/TodoList.vue"
export default {
    components: { TestComp },}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.back-button {
    position: absolute;
    top: 2vh;
    left: 2vw;
}
</style>
