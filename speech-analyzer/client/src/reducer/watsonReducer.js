

function watsonReducer(state =  {watson: []}, action){
    
    switch(action.type){
        case 'change':
            return ({
                ...state,
                watson: state.watson.concat(action.payload)
            })
        default:
            return state
    }


}

export default watsonReducer