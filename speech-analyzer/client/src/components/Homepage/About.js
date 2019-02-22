import React from 'react';
import './About.css';


class About extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            result: ''
        }

        }


    handleSelectChange = (event) =>{
        this.setState({
            result: event.target.value
        })
    }

    selectedSpeaker(state){
        if (this.state.result )

        // for (var i = 1; i < speakerData.length; i++){}


        
    }
  

    render() {
        return (
            <div>
                <div>
                    <select onClick={this.handleSelectChange}>
                        <option value="1">Barack Obama</option>
                        <option value="2">John F. Kennedy</option>
                        <option value="3">Donald Trump</option>
                    </select>
                    {/* <div>{this.props.speechData}</div> */}
                </div>
                {/* <img alt="" className="imageSize" src="http://thecapitalbrand.com/wp-content/uploads/2017/11/Motivational-Speaker.jpg"></img> */}
            </div>
            
        );
    }
}




export default About
