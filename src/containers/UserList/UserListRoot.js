import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FullPageScroll from '../../components/FullPageScroll';
// import { getUsers } from './actions';
import { fetchUsersIfNeeded } from './thunk';

const UserListRoot = (props) => {
	React.useEffect(() => {
		props.fetchUsersIfNeeded();
	}, []);
	return (
		<div>
			test
			{console.log('incomp users', props.users)}
			{props.users.map(u => <div>{u.first_name}</div>)}
			{/* <FullPageScroll /> */}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchUsersIfNeeded: () => dispatch(fetchUsersIfNeeded()),
});

const mapStateToProps = state => ({
	users: state.users.users,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(React.memo(UserListRoot));
