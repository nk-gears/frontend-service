import App from './app';
import Home from './containers/Home/index';
import UserList from './containers/UserList';
import { NotFound } from './pages';
import { getUsers } from './containers/UserList/actions';
import { fetchUsersIfNeeded } from './containers/UserList/thunk';

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
				component: UserList,
				loadData: () => [
					// getUsers(),
					fetchUsersIfNeeded(),
				]
			},
			{
				component: NotFound
			}
		]
	}
];
