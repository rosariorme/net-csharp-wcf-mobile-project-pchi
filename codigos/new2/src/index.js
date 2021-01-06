import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import Results from './components/results';
import Details from './components/details';

const Core = (
<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path="/results" component={Results} />
			<Route path="/details/:itemId" component={Details} />
			<Redirect from="/" to="/results" />
		</Switch>
	</BrowserRouter>
</Provider>
);

ReactDOM.render(
	Core,
  document.getElementById('root')
);

reportWebVitals();
