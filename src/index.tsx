import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { EccomerceProvider } from '../../itsavirus/src/context/EcommerceContext';
// import { EccomerceProvider } from '../../itsavirus/src/context/ecommerceContext';

ReactDOM.render(
	<EccomerceProvider>
		<Router>
			<App />
		</Router>
	</EccomerceProvider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
