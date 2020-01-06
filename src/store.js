import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        readingText: '\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \' +\n' +
            '                    \'do eiusmod tempor incididunt ut labore et dolore magna aliqua. \' +\n' +
            '                    \'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \' +\n' +
            '                    \'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \' +\n' +
            '                    \'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \' +\n' +
            '                    \'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \' +\n' +
            '                    \'officia deserunt mollit anim id est laborum.\'',
        settings: {
            wordsPerMinute: 200,
            chunks: 1,
            fontSize: 16,
            color: 'black',
            fontFamily: 'Arial',
        },
        news:{}
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
