<template>
    <div class='typing-container'>
        <typing-text :content='currentContent' :mistake='mistake' :inputLength='inputText.length + savedText.length' :loading='loading'/>
        <typing-input v-on:onChange='onChange' :new-input='inputText'/>
    </div>
</template>

<script>
import TypingText from '~/components/TypingText'
import TypingInput from '~/components/TypingInput'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: { TypingInput, TypingText },
    computed:{
        ...mapGetters(['inputText','savedText', 'currentContent', 'loading', 'mistake'])
    },
    methods: {
        ...mapActions(['onChange', 'fetchContent'])
    },
    mounted: function () {
        this.fetchContent()
    }
}
</script>

<style>
.typing-container{
    display: flex;
    flex-direction: column;
}
</style>
