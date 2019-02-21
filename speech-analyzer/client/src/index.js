// From Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import famousReducer from './reducer/famousReducer'



// // Need to import and insert reducers
const store = createStore(famousReducer, + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = 
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path ="/" component={App} />
                    {/* <Route path ="/famous" component={Famous} /> */}
                    {/* <Route path ="/custom" component={Custom} /> */}
                </Switch>
            </BaseLayout>
        </BrowserRouter>
     </Provider>


ReactDOM.render(app, document.getElementById('root'));

