/* @flow */

import { usersAction, userAction } from './actions';
import App from './app';
import Home from './containers/Home/index';
import { asyncHome, asyncUserInfo, NotFound } from './pages';

export default [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: asyncHome, // Add your route here
				loadData: () => [
					usersAction.fetchUsersIfNeeded()
					// Add other pre-fetched actions here
				]
			},
			{
				path: '/home',
				exact: true,
				component: Home,
			},
			{
				path: '/UserInfo/:id',
				component: asyncUserInfo,
				loadData: ({ params }) => [
					userAction.fetchUserIfNeeded(params.id)
				]
			},
			{
				component: NotFound
			}
		]
	}
];
