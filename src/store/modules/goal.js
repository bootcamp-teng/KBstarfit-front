const goal = {
    namespaced: true,
    state: {
        listBoxType: 0,
        d: null,
        s: null,
        k: null,
    },
    getters: {
        GE_LIST_BOX_TYPE: state => state.listBoxType,
        GE_DAY: state => state.d,
        GE_STEPS: state => state.s,
        GE_KINDS: state => state.k,
    },
    mutations: {
        MU_SET_LIST_BOX_TYPE: (state, payload) => state.listBoxType = payload,
        MU_SET_DAY: (state, payload) => state.d = payload,
        MU_SET_STEPS: (state, payload) => state.s = payload,
        MU_SET_KINDS: (state, payload) => state.k = payload,
    },
    actions: {
        AC_SET_LIST_BOX_TYPE: ({ commit }, payload) => commit('MU_SET_LIST_BOX_TYPE', payload),
        AC_SET_DAY: ({ commit }, payload) => commit('MU_SET_DAY', payload),
        AC_SET_STEPS: ({ commit }, payload) => commit('MU_SET_STEPS', payload),
        AC_SET_KINDS: ({ commit }, payload) => commit('MU_SET_KINDS', payload),

    }
}

export default goal;