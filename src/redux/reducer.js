export  default function reducer(state = 0, action) {
    console.log(state,action)
    switch (action.type) {
        case "@@redux/INIT":
            return state;
        default:
            return state;
    }
}