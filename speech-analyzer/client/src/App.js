import React, { Component } from 'react';
import data from './components/Homepage/data/data.json';
import './App.css'
import DisplayCard from './components/Homepage/DisplayCard';
import ChartCard from './components/Homepage/ChartCard';
import WatsonCard from './components/Homepage/WatsonCard';
import axios from 'axios';
import watsonAction from './action/watsonAction'
import { connect } from 'react-redux';





class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      speechData: data,
      result: "",
      // Need to make sure of watson array 
      watson: []
    }
  }

  // Dropdown Selection
  handleSelectChange = (e) =>{
    let array = this.state.speechData.speeches

    // Matching up drop down selection to JSON data
    for(var i = 0; i < array.length; i++){
      if(array[i].id == e.target.value){
        this.setState({
          result: array[i]
        })
        this.speechCall(array[i].speech)
      }
    }
  }


  // Backend Axios Call
  speechCall =(result)=>{
    axios.post('/custom-text-search', {
        data: result,
      }
    )
    .then(results =>{
      console.log(results.data.info);
      // store.dispatch(watsonAction(results.data))
      // console.log(results);
      // console.log(results);
      // console.log(results.data);
    
      this.props.updateWatson(results.data.info)
      
      // this.setState({
      //   watson: results.data
      // })



      // function next(watson){
      //   this.mapDispatchToProps.updateWatson(watson)
      // }

      // next(this.state.watson)

      console.log("test finished")
    })
    .catch(error =>{
      console.log(error.response)
    })
}

// }




  render() {

    return (
      <div>
        <div>
                <div>
                <div className="titlePosition">
                  <div className="titleBox">
                      <h2>Lets breakdown the speech...</h2>
                      <p>
                      <b><u>Purpose:</u></b> of this application is to breakdown famous speeches given by various speakers to analyze the tone they utilized.
                      Each speaker has their own style, and it is important for an individual to determine how they prefer to deliver a message.
                      Focusing on speakers and the tone they convey in their speeches speaks upon their attitude and perspective. Looking back, we can
                      begin to understand the effectiveness of the speeches and the tone conveyed. The speeches will be run through IBM Watson's Tone Analyzer.
                      </p>    
                  </div> 
                </div>
                
            
                    <select className="cardPosition" onClick={(e) =>this.handleSelectChange(e)}>
                        <option value="0">Select a Speaker</option>
                        <option value="1">Barack Obama</option>
                        <option value="2">John F. Kennedy</option>
                        <option value="3">Donald Trump</option>
                    </select>
                    {/* <div className="red">{breakdown}</div> */}
                    

                      <DisplayCard data = {this.state.result} />
                      <ChartCard  />
                      <WatsonCard watsonData={this.props.watson} />

                  
                </div>
            </div>
      </div>
    );
  }



}



function mapStateToProps(state){
  return {
    result: state.result,
    watson: state.watson
  }
}
function mapDispatchToProps(dispatch){
  return {
    updateWatson: (watson) => dispatch(watsonAction(watson))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

