import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FullPageScroll from '../../components/FullPageScroll';
import { getUsers } from './actions';

const UsersListRoot = (props) => {
	React.useEffect(() => {
		props.getUsers();
	}, []);
	return (
		<div>
			{console.log('incomp users', props.users)}
			{props.users.map(u => <div>{u.first_name}</div>)}
			{/* <FullPageScroll /> */}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	getUsers: () => dispatch(getUsers()),
});

const mapStateToProps = state => ({
	users: state.users.users,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(React.memo(UsersListRoot));
