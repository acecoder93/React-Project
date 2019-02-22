import React, { Component } from 'react';
import Title from './components/Homepage/Title';
import About from './components/Homepage/About';
import data from './components/Homepage/data/data.json';
// import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      speechData: data
    }
    console.log(this.state.speechData);
  }


  render() {
    let data = this.state.speechData.speeches
    console.log(data)
  
    var newData = data.map((d)=>{
      return (
        <div>
        <li>{d.speaker}</li>
        <li>{d.location}</li>
        <li>{d.date}</li>
        <li><img alt="" src={d.image}></img></li>
        {/* <li>{d.purpose}</li>
        <li>{d.speech}</li> */}
        </div>
      )
    })

    console.log(newData)

    return (
      <div>
        <Title />
        <About key={newData.id} speechData={newData} />

      </div>
    );
  }

  mapStateToProps(state){
    return {
      data: state
      
    }

  }
  mapDispatchToProps(dispatch){
    return {}
  }



}

export default App;
