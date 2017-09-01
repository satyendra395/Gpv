import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Home from './components/common/HomePage';
import * as job from './actions/job';
import configureStore from './store/configureStore';


const store = configureStore();

store.dispatch(job.jobListing());
console.log('store',job.jobListing());
const app = document.getElementById('app');
ReactDom.render(
<Provider store={store}>
<Home/></Provider>, app)




