const setGoal = {
    namespaced: true,
    state: {
        listBoxType: 0,
        title: '',
        period: null,
        s: null,
        k: null,
    },
    getters: {
        GE_LIST_BOX_TYPE: state => state.listBoxType,
        GE_TITLE: state => state.title,
        GE_PERIOD: state => state.period,
        GE_STEPS: state => state.s,
        GE_KINDS: state => state.k,
    },
    mutations: {
        MU_SET_LIST_BOX_TYPE: (state, payload) => state.listBoxType = payload,
        MU_SET_TITLE: (state, payload) => state.title = payload,
        MU_SET_PERIOD: (state, payload) => state.period = payload,
        MU_SET_STEPS: (state, payload) => state.s = payload,
        MU_SET_KINDS: (state, payload) => state.k = payload,
    },
    actions: {
        AC_SET_LIST_BOX_TYPE: ({ commit }, payload) => commit('MU_SET_LIST_BOX_TYPE', payload),
        AC_SET_TITLE: ({ commit }, payload) => commit('MU_SET_TITLE', payload),
        AC_SET_PERIOD: ({ commit }, payload) => commit('MU_SET_PERIOD', payload),
        AC_SET_STEPS: ({ commit }, payload) => commit('MU_SET_STEPS', payload),
        AC_SET_KINDS: ({ commit }, payload) => commit('MU_SET_KINDS', payload),
    }
}

export default setGoal;