import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RcbiGsDMmCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        );
    }
}




export default Video
