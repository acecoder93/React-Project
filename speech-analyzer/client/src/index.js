// // From Libraries
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';


// // From components
// import App from './App';
// import BaseLayout from './components/BaseLayout';

// // Need to import and insert reducers
// // const store = createStore(reducer)

// const app = 
//     // <Provider store={store}>
//     <Provider >
//         <BrowserRouter>
//             <BaseLayout>
//                 <Switch>
//                     <App />
//                     {/* <Route exact path ="/" component = {App} />
//                     <Route path = "/famous" component = {Y} />
//                     <Route path = "/custom" component = {Z} /> */}
//                 </Switch>
//             </BaseLayout>
//         </BrowserRouter>
//     </Provider>

// // From Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';


const app = 
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path ="/" component={App} />
                {/* <Route path ="/famous" component={Famous} /> */}
                {/* <Route path ="/custom" component={Custom} /> */}
            </Switch>
        </BaseLayout>
    </BrowserRouter>


ReactDOM.render(app, document.getElementById('root'));

