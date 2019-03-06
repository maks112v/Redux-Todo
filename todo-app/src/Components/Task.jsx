import React from "react";
import { MDBListGroupItem } from "mdbreact";

export default ({ task, toggleTask }) => {
	return (
		<MDBListGroupItem
			onClick={() => toggleTask(task.id)}
			hover
			color={
				task.completed === true
					? "success"
					: task.type === 3
					? "danger"
					: task.type === 2
					? "warning"
					: null
			}
		>
			{task.name}
		</MDBListGroupItem>
	);
};
