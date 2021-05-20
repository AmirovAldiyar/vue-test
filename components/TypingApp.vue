<template>
    <div class='typing-container'>
        <typing-text :content='currentContent' :mistake='mistake' :inputLength='inputText.length + savedText.length' :loading='loading'/>
        <typing-input v-on:updateText='updateText' :new-input='inputText'/>
    </div>
</template>

<script>
import TypingText from '~/components/TypingText'
import TypingInput from '~/components/TypingInput'
import axios from 'axios'
export default {
    components: { TypingInput, TypingText },
    data: function () {
        return {
            savedText: "",
            inputText: "",
            currentContent: "",
            mistake: 0,
            loading: false
        }
    },
    methods: {
        updateText: function (newText) {
            this.inputText = newText
            this.mistake = this.findMistake(this.savedText + this.inputText)
            if(this.mistake === this.savedText.length + this.inputText.length && this.inputText[this.inputText.length-1] === " "){
                this.savedText += this.inputText
                this.inputText = ""
                if(this.mistake === this.currentContent.length+1){
                    this.savedText = ""
                    this.mistake = 0
                    this.loading = true
                    axios.get("https://typing-backend.vercel.app/v1/randomtext").then(response => {this.currentContent = response.data; this.loading = false})

                }
            }
        },
        findMistake: function (Text) {
            let res = Text.length
            for(let i = 0; i < Math.min(Text.length, this.currentContent.length); i ++){
                if(Text[i] !== this.currentContent[i]){
                    res = i
                    break
                }
            }
            return res
        }
    },
    mounted: function () {
        this.loading = true
        axios.get("https://typing-backend.vercel.app/v1/randomtext").then(response => {this.currentContent = response.data; this.loading = false})

    }
}
</script>

<style>
.typing-container{
    display: flex;
    flex-direction: column;
}
</style>
