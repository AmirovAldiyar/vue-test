<template>
    <input class='typing-input' v-model="textInput" placeholder='start typing!'/>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
    props: ['newInput', 'updateText'],
    computed: {
        textInput: {
            get: function() {
                return this.newInput
            },
            set: function(value) {
                this.$emit('updateText', value)
            }
        }
    }
}
</script>

<style>
.typing-input{
    display: flex;
    font-size: 2vh;
    padding: 2vh 2vw;
    background-color: #c4c8db;
    color: #34353a;
    margin-top: 0.5vh;
    border-radius: 1vh;
    height: 4vh;
    width: 50vw;
    text-align: left;
    align-items: center;
    border: none;
    outline-style: none;
}
.typing-input:focus{
    outline: none;
}
.typing-input::placeholder{
    color: #333435;
    opacity: 70%;
}
.green-part{
    color: #0e9a00;
}
</style>
