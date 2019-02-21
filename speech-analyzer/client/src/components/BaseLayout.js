import React from 'react';
import Nav from './Homepage/Nav';
import Footer from './Homepage/Footer'
import './Homepage/Footer.css'


class BaseLayout extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <div>
                <Nav/> <br />
                {this.props.children} <br />

                <Footer />
                
                
            </div>
            
        );
    }
}



export default BaseLayout
