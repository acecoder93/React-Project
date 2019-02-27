

function watsonReducer(state, action){
    console.log(state)
    if(state == undefined || state.length == 0){
        console.log('watson reducer');
        return{
            watson: []
        }
    }
    switch(action.type){
        case 'change':
            return ({
                ...state,
                watson: state.watson.push(action.payload)
                // watson: state.watson.concat(action.payload)
            })
        default:
            return state
    }
}

export default watsonReducer