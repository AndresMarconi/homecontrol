const initialState = {
    title: ''
}

const pageConfigReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_TITLE":
            return { ...state, title: action.title }

        default:
            return state
    }
}

export default pageConfigReducer
