import React from 'react';
import './Custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




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




// <Form>
//         <FormGroup row>
//           <Label for="exampleEmail" sm={2}>Email</Label>
//           <Col sm={10}>
//             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="examplePassword" sm={2}>Password</Label>
//           <Col sm={10}>
//             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleSelect" sm={2}>Select</Label>
//           <Col sm={10}>
//             <Input type="select" name="select" id="exampleSelect" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
//           <Col sm={10}>
//             <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleText" sm={2}>Text Area</Label>
//           <Col sm={10}>
//             <Input type="textarea" name="text" id="exampleText" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleFile" sm={2}>File</Label>
//           <Col sm={10}>
//             <Input type="file" name="file" id="exampleFile" />
//             <FormText color="muted">
//               This is some placeholder block-level help text for the above input.
//               It's a bit lighter and easily wraps to a new line.
//             </FormText>
//           </Col>
//         </FormGroup>


//         <FormGroup check row>
//           <Col sm={{ size: 10, offset: 2 }}>
//             <Button>Submit</Button>
//           </Col>
//         </FormGroup>
//       </Form>
    );
  }
}




export default Custom
