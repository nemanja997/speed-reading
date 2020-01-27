import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { getReadSettingsFromStore } from './helpers/localStorage';

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
        settings: getReadSettingsFromStore() || {
            chunks: 1,
            fontSize: 40,
            wordsPerMinute: 200,
            fontFamily: 'Arial'
        },
        news:[]
    },
    mutations: {
        addReadingText(state, text) {
            state.readingText = text;
        },
        addSettings(state, settings) {
            state.settings = settings;
        },
        addNews(state, news){
            this.news = news;
        }
    },
    actions: {
        addNews(context){
            return axios.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=ab1649b6ce314100b84b0537ecbe9abe')
                .then((response) => {
                    console.log(response.data);
                    context.commit('addNews', response.data);
                })
                .catch((response) => {
                    console.log(response.data.error);
                });

        }
    },
    getters: {
        textSet(state){
            return state.readingText !== '';
        }
    }
})
