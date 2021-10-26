import axios from "axios";

const rank = {
    namespaced: true,
    state: {
        users: [],
        me: {}
    },
    getters: {
        GE_USERS: state => state.users,
        GE_ME: state => state.me,
    },
    mutations: {
        MU_SET_USERS: (state, payload) => state.users = payload,
        MU_SET_ME: (state, payload) => state.me = payload,
    },
    actions: {
        AC_GET_USERS_AND_ME: async ({ commit }) => {
            const { data } = await axios.get('http://teng.169.56.174.139.nip.io/starfitexercise/v1/rank/3');
            const { myRank, myExerAmt, rankList } = data;

            const me = {
                id: 1,
                username: "김비비비",
                exer: myExerAmt,
                rank: myRank
            }

            const users = [];

            for (var i=0; i<rankList.length; ++i) {
                const curRank = rankList[i].rank;
                const curName = rankList[i].name;
                const curExer = rankList[i].exerHist.exerAmt;

                users.push({
                    id: i,
                    username: curName,
                    rank: curRank,
                    exer: curExer,
                });
            }

            commit('MU_SET_ME', me);
            commit('MU_SET_USERS', users);
        }
    }
}

export default rank;