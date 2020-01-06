import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        readingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
            'do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
            'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
            'officia deserunt mollit anim id est laborum.',
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
            state.readingText = text;
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
