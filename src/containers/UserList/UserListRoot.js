import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FullPageScroll from '../../components/FullPageScroll';
// import { getUsers } from './actions';
import { fetchUsersIfNeeded, fetchFilteredUsers } from './thunk';

const UserListRoot = (props) => {
	React.useEffect(() => {
		props.fetchUsersIfNeeded();
	}, []);
	return (
		<div>
			{console.log('incomp users', props.users)}
			{/* {props.users.map(u => <div>{u.first_name}</div>)} */}
			<FullPageScroll
				data={props.users}
				total={props.users.length}
				dispatch={props.dispatch}
				fetchMoreData={props.fetchFilteredUsers}
			/>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch,
	fetchUsersIfNeeded: () => dispatch(fetchUsersIfNeeded()),
	fetchFilteredUsers: () => dispatch(fetchFilteredUsers()),
});

const mapStateToProps = state => ({
	users: state.users.users,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(React.memo(UserListRoot));
