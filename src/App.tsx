import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import './styles/app.scss';
import EcommerceView from './components/Ecommerce/EcommerceView/EcommerceView';
import EcommerceDetail from './components/Ecommerce/EcommerceDetail/EcommerceDetail';

const ViewComponent = () => {
	return <EcommerceView />;
};

const App: React.FC = ({}) => {
	const mainRoutes = {
		path: '/',
		element: <EcommerceView />,
		children: [{ path: 'detail', element: <Navigate to="/view/detail" /> }],
	};

	const accountRoutes = {
		path: '/view/detail',
		element: <EcommerceDetail />,
		children: [],
	};

	const routing = useRoutes([mainRoutes, accountRoutes]);

	return <>{routing}</>;
};

export default App;
