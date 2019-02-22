import React, { Component } from 'react';
import data from './components/Homepage/data/data.json';
import './App.css'
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


    for(var i = 0; i < array.length; i++){
      if(array[i].id == e.target.value){
        this.setState({
          result: array[i]
        })
      }
      else(
        console.log('no')
      )

    }

    // this.setState({
    //     result: e.target.value
    // })
}

// Render components by selection
// speechSelector = (result)=>{
//   result = this.state.result


// }

  render() {
    let data = this.state.speechData.speeches
    console.log(data)

    var newData = data.map((d)=>{
      return (
        <div>
          <div>{d.speaker}</div>
          <div>{d.location}</div>
          <div>{d.date}</div>
          <div><img alt="" src={d.image}></img></div>
        </div>
      )
    })

    // console.log(newData)

    return (
      <div>
        <div className="background">
                <div>
                <div className="titlePosition">
                <div className="titleBox">
                    <h2>Speech Analyzer</h2>
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
                      <div>Speaker: {this.state.result.speaker}</div>
                      <div>Date: {this.state.result.date}</div>
                      <div>Purpose: {this.state.result.purpose}</div>
                      {/* <div>Speech: <br></br> {this.state.result.speech}</div> */}
                
                    </p>

                    {/* <div>{this.props.speechData}</div> */}
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
