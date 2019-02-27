
function watsonAction(result){
    console.log("inside of watsonAction")
    console.log(result);
    console.log("Test done");
    return {
        type: 'change',
        payload: result
    }
}

export default watsonAction