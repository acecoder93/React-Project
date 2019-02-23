import React, { Component } from 'react';
import data from './components/Homepage/data/data.json';
import './App.css'
import DisplayCard from './components/Homepage/DisplayCard';
// import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      speechData: data,
      result: ''
    }
    console.log(this.state.speechData);
  }

  // Dropdown Selection
  handleSelectChange = (e) =>{
    let array = this.state.speechData.speeches
    console.log(array)

    // Matching up drop down selection to JSON data
    for(var i = 0; i < array.length; i++){
      if(array[i].id == e.target.value){
        this.setState({
          result: array[i]
        })
      }
      else(
        console.log('No value found')
      )

    }
}


  render() {


    return (
      <div>
        <div className="background">
                <div>
                <div className="titlePosition">
                  <div className="titleBox">
                      <h2>Lets breakdown the speech...</h2>
                      <p><b>Tone</b> 
                      is a key factor of communication. It tells an individual or audience what the speaker is feeling. 
                      It is dependent on:
                      <ul>
                        <li>Word Choice</li>
                        <li>Pitch</li>
                        <li>Emotion</li>
                      </ul>
                      <b>Purpose</b> of this application is to breakdown famous speeches given by various speakers to analyze the tone they utilized.
                      Each speaker has their own style, and it is important for an individual to determine how they prefer to deliver a message.
                      Focusing on speakers and the tone they convey in their speeches speaks upon their attitude and perspective. Looking back, we can
                      begin to understand the effectiveness of the speeches and the tone conveyed. The speeches will be run through IBM Watson's Tone Analyzer.
                      </p>    
                  </div> 
                </div>
                
            
                    <select onClick={(e) =>this.handleSelectChange(e)}>
                        <option value="0">Select a Speaker</option>
                        <option value="1">Barack Obama</option>
                        <option value="2">John F. Kennedy</option>
                        <option value="3">Donald Trump</option>
                    </select>
                    <p>
                      <div className="bioPicBox">
                        <img className="bioPic" alt="" src={this.state.result.image}></img>
                      </div>
                      <DisplayCard data = {this.state.result} />
                      <div>Speaker: {this.state.result.speaker}</div>
                      <div>Date: {this.state.result.date}</div>
                      <div>Purpose: {this.state.result.purpose}</div>
                      {/* <div>Speech: <br></br> {this.state.result.speech}</div> */}
                
                    </p>

                    <div className=".scrollBox">{this.state.result.speech}</div>
                </div>
                {/* <img alt="" className="imageSize" src="http://thecapitalbrand.com/wp-content/uploads/2017/11/Motivational-Speaker.jpg"></img> */}
            </div>
      </div>
    );
  }

  mapStateToProps(state){
    return {
      result: state.result,

      
    }

  }
  mapDispatchToProps(dispatch){
    return {

    }
  }



}

export default App;
