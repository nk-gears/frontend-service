import App from './app';
import Home from './containers/Home/index';
import UsersList from './containers/UsersList/index';
import { NotFound } from './pages';
import { getUsers } from './containers/UsersList/actions';

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
				path: '/users',
				exact: true,
				component: UsersList,
				loadData: () => [
					getUsers(),
				]
			},
			{
				component: NotFound
			}
		]
	}
];
