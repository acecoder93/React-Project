import React, { Component } from 'react';
import Title from './components/Homepage/Title';
import About from './components/Homepage/About';
import data from './components/Homepage/data/data.json';
import './App.css'
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
  
    // var newData = data.map((d)=>{
    //   return (
    //     <div>
    //       <div>{d.speaker}</div>
    //       <div>{d.location}</div>
    //       <div>{d.date}</div>
    //       <div><img alt="" src={d.image}></img></div>
    //     </div>
    //   )
    // })

    // console.log(newData)

    return (
      <div className="background">
        <Title />
        <About key={newData.id} speechData={data} />

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
