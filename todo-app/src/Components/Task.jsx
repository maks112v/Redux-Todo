import React from "react";
import { MDBListGroupItem, MDBBadge, MDBIcon } from "mdbreact";

export default ({ task, toggleTask }) => {
	return (
		<MDBListGroupItem
      onClick={() => toggleTask(task.id)}
      className="d-flex justify-content-between align-items-center"
			hover
			// color={
			// 	task.completed === true
			// 		? "success"
			// 		: task.type === 3
			// 		? "danger"
			// 		: task.type === 2
			// 		? "warning"
			// 		: null
			// }
		>
      {task.name}
      {task.completed === true
					? <MDBBadge pill color="success"><MDBIcon icon="check" /></MDBBadge>
					: task.type === 3
					? <MDBBadge pill color="danger"><MDBIcon icon="exclamation" /></MDBBadge>
					: task.type === 2
					? <MDBBadge pill color="warning"><MDBIcon icon="exclamation-triangle" /></MDBBadge>
					: null
      }
		</MDBListGroupItem>
	);
};
