import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        readingText: '',
        settings: {
            wordsPerMinute: 200,
            chunks: 1,
            fontSize: 16,
            color: 'black',
            fontFamily: 'Arial',
        }
    },
    mutations: {
        addReadingText(state, text) {
            state.text = text;
        },
        addSettings(state, settings) {
            state.settings = settings;
        }
    },
    actions: {},
    getters: {
        textSet(state){
            return state.readingText !== '';
        }
    }
})
