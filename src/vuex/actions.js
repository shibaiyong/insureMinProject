
const actions = {
    changeDataA({ commit },data) {
        commit('changeDataA',data)
    },
    changeDataB({ commit },data){
        commit('changeDataB',data)
    },
    changeDataC({ commit }, data){
        console.log(data)
        commit('changeDataC', data)
    }
}

export default actions