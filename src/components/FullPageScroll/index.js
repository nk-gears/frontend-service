import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import { fetchFilteredUsers } from '../../containers/UserList/thunk';

class FullPageScroll extends React.PureComponent {

	constructor(props) {
		super(props);
		this.onLeave = this.onLeave.bind(this);
		// this.afterLoad = this.afterLoad.bind(this);
	}
	onLeave(origin, destination, direction) {
		console.log('onLeave', { origin, destination, direction });
		if (origin.index === this.props.total - 2) {
			console.log('object', origin.index, this.props.total);
			this.props.fetchMoreData();
		}
		// arguments are mapped in order of fullpage.js callback arguments do something
		// with the event
	}
	// afterLoad(origin, destination, direction) {
	// 	console.log("After load: " + destination.index, origin, destination, direction);
	// }
	render() {
		const { props, onLeave } = this;
		return (
			<ReactFullpage
				scrollingSpeed={1000}
				onLeave={onLeave}
				// afterLoad={afterLoad}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							{props.data.map(x => <div className="section">
								{x.first_name} {x.last_name}
							</div>)}
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		)
	}
}

export default FullPageScroll;
