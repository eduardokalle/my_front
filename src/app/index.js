import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch } from 'react-router-dom';

import {Crud , Login}  from './pages';
import * as serviceWorker from './serviceWorker';
import Layout from './Component/Layout';

import './index.css';
import 'antd/dist/antd.css';
//import App from './App';


function App() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
             <Route exact path="/" component={Crud} />
             <Route  path="/login" component={Login} />
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
