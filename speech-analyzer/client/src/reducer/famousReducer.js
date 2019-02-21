import data from '../components/Homepage/data/data.json'


function famousReducer(state, action){
    if (state === undefined){
        return{
            data: data
        }
    }
}

export default famousReducer