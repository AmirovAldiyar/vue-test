<template>
    <div class='typing-content'>
        <div v-if='!loading'>
            <span class='green-part'>{{content.slice(0, mistake)}}</span><span class='red-part'>{{content.slice(mistake, inputLength)}}</span>{{content.slice(inputLength)}}
        </div>
        <square-spinner v-else class='typing-loading' color='#34353a'></square-spinner>
    </div>
</template>

<script>
import { SquareSpinner } from 'vue-spinners'
export default {
    components: {SquareSpinner},
    data: function () {
        return {}
    },
    props: ['content', 'mistake', 'inputLength', 'loading']
}
</script>

<style>
.typing-loading{
    margin: 0 auto;
}
.typing-content{
    display: flex;
    font-family: monospace, monospace;
    font-size: 2.5vh;
    padding: 2vh 2vw;
    background-color: #c4c8db;
    color: #34353a;
    border-radius: 1vh;
    height: 25vh;
    width: 50vw;
    text-align: left;
    align-items: center;
    white-space: pre-wrap;
}
.green-part{
    color: #0e9a00;
    white-space: pre-wrap;
}
.red-part{
    color: #920100;
    white-space: pre-wrap;
}
.hidden{
    visibility: hidden;
}
</style>
