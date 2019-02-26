

function watsonReducer(state, action){
    
    switch (action.type){
        case 'change':
            return {
                ...state,
                watson: action.data
            }
        default:
            return state
    }
}

export default watsonReducer