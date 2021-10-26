// import axios from "axios";

const rank = {
    namespaced: true,
    state: {
        users: [
            {
                id: 1,
                username: "user1",
                exer: "100000"
            },
            {
                id: 2,
                username: "user2",
                exer: "90000"
            },
            {
                id: 3,
                username: "user3",
                exer: "80000"
            },
            {
                id: 4,
                username: "user4",
                exer: "70000"
            },
            {
                id: 5,
                username: "user5",
                exer: "60000"
            },
            {
                id: 6,
                username: "user6",
                exer: "50000"
            },
            {
                id: 7,
                username: "user7",
                exer: "40000"
            },
            {
                id: 8,
                username: "user8",
                exer: "30000"
            }
        ],
        me: {
            id: 1,
            username: "마안재",
            exer: "999999999999"
        }
    },
    getters: {
        GE_USERS: state => state.users,
        GE_ME: state => state.me,
    }
}

export default rank;