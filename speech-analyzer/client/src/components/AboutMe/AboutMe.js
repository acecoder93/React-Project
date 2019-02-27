import React from 'react';
import './AboutMe.css'

class About extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <div className="backgroundShadow">
                <h3 className="fontStyle">About Watson</h3>
                <br></br>
                <p className="fontStyle">
                    <ul>
                    <li><b>Anger</b> - Anger is evoked due to injustice, conflict, humiliation, negligence, or betrayal. If anger is active, the individual attacks the target, verbally or physically. If anger is passive, the person silently sulks and feels tension and hostility. </li>
                    <br></br>
                    <li><b>Fear</b> - Fear is a response to impending danger. It is a survival mechanism that is triggered as a reaction to some negative stimulus. Fear can be a mild caution or an extreme phobia. </li>
                    <br></br>
                    <li><b>Joy</b> - Joy (or happiness) has shades of enjoyment, satisfaction, and pleasure. Joy brings a sense of well-being, inner peace, love, safety, and contentment.</li>
                    <br></br>
                    <li><b>Sadness</b> - Sadness indicates a feeling of loss and disadvantage. When a person is quiet, less energetic, and withdrawn, it can be inferred that they feel sadness. </li>
                    <br></br>
                    <li><b>Analytical</b> - An analytical tone indicates a person's reasoning and analytical attitude about things. An analytical person might be perceived as intellectual, rational, systematic, emotionless, or impersonal.</li>
                    <br></br>
                    <li><b>Confident</b> - A confident tone indicates a person's degree of certainty. A confident person might be perceived as assured, collected, hopeful, or egotistical.  </li>
                    <br></br>
                    <li><b>Tentative</b> - A tentative tone indicates a person's degree of inhibition. A tentative person might be perceived as questionable, doubtful, or debatable.</li>
                    </ul>
                    <p>
                    People show various tones, such as joy, sadness, anger, and agreeableness, in daily communications. Such tones can impact the effectiveness of communication in different contexts. Tone Analyzer leverages cognitive linguistic analysis to identify a variety of tones at both the sentence and document level. This insight can then used to refine and improve communications. It detects three types of tones, including emotion (anger, disgust, fear, joy and sadness), social propensities (openness, conscientiousness, extroversion, agreeableness, and emotional range), and language styles (analytical, confident and tentative) from text.
                    </p>
                    
                </p>
            </div>
            
        );
    }
}




export default About
