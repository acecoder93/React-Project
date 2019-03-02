
function watsonAction(result){
    console.log(result);
    return {
        type: 'change',
        payload: result
    }
}

export default watsonAction