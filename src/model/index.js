export const initialState = {
    count: 0
}


export const types = {
    INCREMENT: 'counter/INCREMENT',
    DECREMENT: 'counter/DECREMENT',
}


export const actions = {
    increment: (amount) => {
        return {
            type: types.INCREMENT,
            payload: amount
        }
    },
    decrement: () => {
        return {
            type: types.DECREMENT
        }
    },
}


export const reducer = function (state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}


export default reducer