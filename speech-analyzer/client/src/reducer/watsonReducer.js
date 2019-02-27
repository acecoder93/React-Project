

function watsonReducer(state =  {watson: 0}, action){
    switch(action.type){
        case 'change':
            return (state = {
                ...state,
                watson: action.payload
            })
        default:
            return state
    }


}

export default watsonReducer