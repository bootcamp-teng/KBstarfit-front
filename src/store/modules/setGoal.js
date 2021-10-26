// import axios from "axios";

import axios from "axios";

const setGoal = {
    namespaced: true,
    state: {
        listBoxType: 0,
        goals: [],
        title: '',
        period: null,
        goalId: null,
        type: null,
        typeList: [],
        steps: null,
        stepList: [],
        point: 0,
        selectAllYn: 'N',
        unit: null,
        success: true,
        errorMsg: '',
        curI: null,
    },
    getters: {
        GE_LIST_BOX_TYPE: state => state.listBoxType,
        GE_TITLE: state => state.title,
        GE_PERIOD: state => state.period,
        GE_STEPS: state => state.steps,
        GE_TYPE: state => state.type,
        GE_GOALS: state => state.goals,
        GE_TYPE_LIST: state => state.typeList,
        GE_STEP_LIST: state => state.stepList,
        GE_GOAL_ID: state => state.goalId,
        GE_POINT: state => state.point,
        GE_SELECT_ALL_YN: state => state.selectAllYn,
        GE_UNIT: state => state.unit,
        GE_SUCCESS: state => state.success,
        GE_ERROR_MSG: state => state.errorMsg,
        GE_CUR_I: state => state.curI,
    },
    mutations: {
        MU_SET_LIST_BOX_TYPE: (state, payload) => state.listBoxType = payload,
        MU_SET_TITLE: (state, payload) => state.title = payload,
        MU_SET_PERIOD: (state, payload) => state.period = payload,
        MU_SET_STEPS: (state, payload) => state.steps = payload,
        MU_SET_TYPE: (state, payload) => state.type = payload,
        MU_GET_GOALS: (state, payload) => state.goals = payload,
        MU_SET_TYPE_LIST: (state, payload) => state.typeList = payload,
        MU_SET_STEP_LIST: (state, payload) => state.stepList = payload,
        MU_SET_GOAL_ID: (state, payload) => state.goalId = payload,
        MU_SET_POINT: (state, payload) => state.point = payload,
        MU_SET_SELECT_ALL_YN: (state, payload) => state.selectAllYn = payload,
        MU_SET_UNIT: (state, payload) => state.unit = payload,
        MU_SET_SUCCESS: (state, payload) => state.success = payload,
        MU_SET_ERROR_MSG: (state, payload) => state.errorMsg = payload,
        MU_SET_CUR_I: (state, payload) => state.curI = payload,
    },
    actions: {
        AC_SET_LIST_BOX_TYPE: ({ commit }, payload) => commit('MU_SET_LIST_BOX_TYPE', payload),
        AC_SET_TITLE: ({ commit }, payload) => commit('MU_SET_TITLE', payload),
        AC_SET_PERIOD: ({ commit }, payload) => commit('MU_SET_PERIOD', payload),
        AC_SET_STEPS: ({ commit }, payload) => commit('MU_SET_STEPS', payload),
        AC_SET_TYPE: ({ commit }, payload) => commit('MU_SET_TYPE', payload),
        AC_GET_GOALS:  async ({ commit }) => {
            const { data } = await axios.get('http://teng.169.56.174.139.nip.io/starfitgoal/v1/goals');
            commit('MU_GET_GOALS', data);
        },
        AC_SET_TYPE_LIST: ({ state, commit }) => {
            let typeList = [];
            state.goals.forEach(({ exerType }) => {
                typeList.push(exerType);
            });
            commit('MU_SET_TYPE_LIST', typeList)
        },
        AC_SET_STEP_LIST: ({ state, commit }) => {
            let stepList = [];
            const min = state.goals[state.curI - 1]['minExerAmt'];
            const max = state.goals[state.curI - 1]['maxExerAmt'];
            const std = state.goals[state.curI - 1]['stdExerAmt'];
            for (var i=min; i<=max; i=i+std) stepList.push(i);
            commit('MU_SET_UNIT', state.goals[state.curI - 1]['exerUnit']);

            commit('MU_SET_STEP_LIST', stepList);
        },
        AC_SET_GOAL_ID: ({ commit }, payload) => commit('MU_SET_GOAL_ID', payload),
        AC_SET_POINT: ({ state, commit }, payload) => {
            const point = (parseInt(payload) / parseInt(state.goals[state.curI - 1]['stdExerAmt'])) * parseInt(state.goals[state.curI - 1]['stdPoint']);
            commit('MU_SET_POINT', point);
        },
        AC_SUBMIT_GOAL: async ({ state, commit }) => {
            const params = {
                "benefitCode": "1",
                "goalId": state.goalId,
                "period": state.period,
                "title": state.title,
                "userId": "15",
                "dayExerAmt": state.steps
            }
            
            const res = await axios.post('http://teng.169.56.174.139.nip.io/starfitgoal/v1/usergoal', params);

            if (res.status === 200) commit('MU_SET_SUCCESS', true);
            if (res.status === 201) {
                commit('MU_SET_SUCCESS', false);
                if (res.data.error === "Created") commit('MU_SET_ERROR_MSG', '이미 목표를 진행중인 사용자입니다.');
            }

            commit('MU_SET_TITLE', '');
            commit('MU_SET_PERIOD', null);
            commit('MU_SET_TYPE', null);
            commit('MU_SET_STEPS', null);
            commit('MU_SET_POINT', 0);
            commit('MU_SET_TYPE_LIST', []);
            commit('MU_SET_STEP_LIST', []);
            commit('MU_SET_LIST_BOX_TYPE', 0);
        },
        AC_SET_SELEC_ALL_YN: ({ commit }, payload) => commit('MU_SET_SELECT_ALL_YN', payload),
        AC_SET_CUR_I: ({ commit }, payload) => commit('MU_SET_CUR_I', payload),
    }
}

export default setGoal;