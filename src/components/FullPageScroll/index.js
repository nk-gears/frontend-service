import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const FullPageScroll = (props) => (
	<ReactFullpage
		scrollingSpeed={1000} /* Options here */

		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<p>Section 1 (welcome to fullpage.js)</p>
						<button onClick={() => fullpageApi.moveSectionDown()}>
							Click me to move down
						</button>
					</div>
					<div className="section">
						<p>Section 2</p>
					</div>
					<div className="section">
						<p>Section 3</p>
					</div>
					<div className="section">
						<p>Section 4</p>
					</div>
					<div className="section">
						<p>Section 5</p>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
)

export default FullPageScroll;
