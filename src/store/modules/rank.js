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
        AC_GET_USERS_AND_ME: async ({ commit, rootState }) => {
            const userId = rootState.authStore.user.id;
            const { data } = await axios.get('http://teng.169.56.174.139.nip.io/starfitexercise/v1/rank/' + userId);
            const { myRank, myExerAmt, rankList, myName } = data;

            console.log(data);

            const me = {
                id: userId,
                username: myName,
                exer: myExerAmt,
                rank: myRank
            }

            const users = [];

            for (var i=0; i<rankList.length; ++i) {
                const curRank = rankList[i].rank;
                const curName = rankList[i].name;
                const curExer = rankList[i].exerHist.exerAmt;
                const characterId = rankList[i].characterId;

                users.push({
                    id: i + 1,
                    username: curName,
                    rank: curRank,
                    exer: curExer,
                    characterId: characterId
                });
            }

            commit('MU_SET_ME', me);
            commit('MU_SET_USERS', users);
        }
    }
}

export default rank;