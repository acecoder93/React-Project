import React from 'react';
import './About.css';
import data from './data/data.json'

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            speeches: data
        }

        console.log(this.state.speeches)
    }






    render() {
      
        return (
            <div>
                <img className="imageSize" src="http://thecapitalbrand.com/wp-content/uploads/2017/11/Motivational-Speaker.jpg"></img>
            </div>
            
        );
    }
}




export default About
