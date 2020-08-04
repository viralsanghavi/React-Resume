export const initialState = {
    color: {
        dark: {
            color: "white",
            backgroundColor: "black"
        },
        light: {
            color: "black",
            backgroundColor: "white"
        }
    },
    selected: 'light'
}


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'CHANGE':
            return {
                selected: action.selected
            }
        default:
            return state
    }
}
export default reducer
//