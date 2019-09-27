import React, { Component } from 'react';

class EscapeKeyOverlay extends Component {
	componentDidMount() {
		document.addEventListener(
			'keydown',
			e =>
				e.key === 'Escape' &&
				this.props.escapePressed &&
				this.props.escapePressed()
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'keydown',
			e =>
				e.key === 'Escape' &&
				this.props.escapePressed &&
				this.props.escapePressed()
		);
	}

	render() {
		const { props } = this;
		return props.noElement ? null : (
			<div
				className="escape-overlay"
				style={{
					zIndex: props.z || 999,
					background: props.bg
						? props.overrideBg
							? props.overrideBg
							: 'rgba(0, 0, 0, 0.5)'
						: 'none',
				}}
				role="presentation"
				onClick={() => props.overlayClick()}
				{...props}
			/>
		);
	}
}

export default EscapeKeyOverlay;
