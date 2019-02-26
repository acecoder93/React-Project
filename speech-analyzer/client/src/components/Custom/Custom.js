import React from 'react';
import './Custom.css'
class Custom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            purpose: "",
            speech: ""
        }

    }

    
        handleChange(e) {
            this.setState(
                {name: this.refs.name.value,
                purpose: this.refs.purpose.value,
                speech: this.refs.speech.value

                });
        }


    handleSubmit(e){
        
        if(this.refs.name.value === ""){
            alert("Name is required");
        }
        else if(this.refs.purpose.value === ""){
            alert("Purpose is required");
        }
        else if(this.refs.speech.value === ""){
            alert("Speech / Text is required")
        }

        e.preventDefault()

    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label className="text">Name: </label> <input  type = "text" ref="name" value = {this.state.name} onChange={this.handleChange.bind(this)}  /><br></br>
                    <label className="text">Purpose of Speech: </label> <input type = "text" ref="purpose"value = {this.state.purpose} onChange={this.handleChange.bind(this)}  /><br></br>
                    <label className="text">Speech / Text:</label> <input type = "text" ref="speech" value = {this.state.speech} onChange={this.handleChange.bind(this)} /><br></br>
                    <input type = "submit" value = "submit"></input>
                </form>

                
            </div>

            
        );
    }
}




export default Custom
