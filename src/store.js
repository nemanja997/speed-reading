import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text:'',
    settings:{
        wordsPerMinute:200
    }
  },
  mutations: {
    addText(state,text){
      state.text = text;
    },
    addSettings(state,settings){
        state.settings = settings;
    }
  },
  actions: {

  }
})
