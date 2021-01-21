import { React, useEffect, useState } from "react";

function DateListSection(props) {
	return (
		<div className="section">
			<div className="date-list-section">
				<h3 className="header">{props.header}</h3>
				<div className="items">
					{props.list.map((item, index) => {
						return (
							<div key={index} className="group">
								<div className="vertical-group">
									<div className="title-group">
										<h4 className="title">{item.title}</h4>
										<h4 className="subtitle">{item.subtitle}</h4>
									</div>

									<ul className="notes-list">
										{item.notes.map((note, noteIndex) => {
											return <li key={noteIndex}>{note}</li>;
										})}
									</ul>
								</div>
								<div className="date-group">
									<h4 className="start-date">{item.startDate.toLocaleString("sv-SE", { month: "long", year: "numeric" })} - </h4>
									<h4 className="end-date">{item.endDate.toLocaleString("sv-SE", { month: "long", year: "numeric" })}</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default DateListSection;
