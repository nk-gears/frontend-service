import App from './app';
import Home from './containers/Home/index';
import HomeAlt from './containers/HomeAlt/index';
import { NotFound } from './pages';

export default [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home,
			},
			{
				path: '/home',
				exact: true,
				component: HomeAlt,
			},
			{
				component: NotFound
			}
		]
	}
];
