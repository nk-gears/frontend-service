import * as React from 'react';

export default class ErrorBoundary extends React.Component {
	// eslint-disable-next-line react/static-property-placement
	static defaultProps = {
		children: null
	};

	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error,
			errorInfo
		});
		// You can also log error messages to an error reporting service here
	}

	render() {
		const { errorInfo, error } = this.state;
		const { children } = this.props;
		if (errorInfo) {
			// Error path
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{error && error.toString()}
						<br />
						{errorInfo.componentStack}
					</details>
				</div>
			);
		}
		// Normally, just render children
		return children || null;
	}
}
