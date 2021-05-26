import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import typing from './modules/typing'

Vue.use(Vuex)

export default {
    modules: {
        todo,
        typing
    }
}
