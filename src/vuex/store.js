import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
Vue.use(Vuex)
//状态管理的变量名固定为state
const state = {
    dataA:'a',
    dataB:'b',
    dataC:'c',
    dataD:'d'
}

const mutations = {
    changeDataA(state,data){
        state.dataA += data
    },
    changeDataB(state,data){
        state.dataB += data
    },
    changeDataC(state,data){
        console.log(data)
        state.dataC += data
    }
}

const store = new Vuex.Store({
    state,
	mutations,
	actions
})

export default store