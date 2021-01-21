import { React, useEffect, useState } from "react";

function TextSection(props) {
	return (
		<div className="section">
			<div className="text-section">
				<h3 className="header">{props.header}</h3>
				<div className="text">
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}

export default TextSection;
