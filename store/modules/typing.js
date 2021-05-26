import axios from 'axios'

const findMistake = (text, currentContent) => {
    let res = text.length
    for(let i = 0; i < Math.min(text.length, currentContent.length); i ++){
        if(text[i] !== currentContent[i]){
            res = i
            break
        }
    }
    return res
}

const isEnd = (savedText, inputText, mistake, currentContent) => {
    return mistake === savedText.length + inputText.length && inputText[inputText.length-1] === " "
}

export default {
    actions: {
        onChange({commit, state, dispatch}, newInput) {
            commit('setInput', newInput)

            const newMistake = findMistake(state.savedText + state.inputText, state.currentContent)
            commit('setMistake', newMistake)

            if( isEnd(state.savedText, state.inputText, state.mistake, state.currentContent) ){
                commit('setSavedText', state.savedText + state.inputText)
                commit('setInput', "")
                if(state.mistake === state.currentContent.length+1) {
                    commit('setSavedText', '')
                    commit('setMistake', 0)
                    dispatch('fetchContent')
                }
            }
        },
        fetchContent({ commit }){
            commit('setLoading', true)
            axios.get("https://typing-backend.vercel.app/v1/randomtext").then(response => {
                commit('setCurrentContent', response.data)
                commit('setLoading', false)
            })
        }
    },
    mutations: {
        setInput(state, newInput){
            state.inputText = newInput
        },
        setMistake(state, newMistake){
            state.mistake = newMistake
        },
        setSavedText(state, newSavedText){
            state.savedText = newSavedText
        },
        setLoading(state, newLoading){
            state.loading = newLoading
        },
        setCurrentContent(state, newCurrentContent){
            state.currentContent = newCurrentContent
        }
    },
    state() {
        return {
            savedText: "",
            inputText: "",
            currentContent: "",
            mistake: 0,
            loading: false
        }
    },
    getters: {
        savedText(state){
            return state.savedText
        },
        inputText(state){
            return state.inputText
        },
        currentContent(state){
            return state.currentContent
        },
        mistake(state){
            return state.mistake
        },
        loading(state){
            return state.loading
        },
    }
}
