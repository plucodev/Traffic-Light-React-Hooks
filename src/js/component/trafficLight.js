import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function TrafficLight() {
	const [clicked, setClicked] = useState("red");
	let newRedLightClass = "";
	let newYellowLightClass = "";
	let newGreenLightClass = "";

	if (clicked === "red") {
		newRedLightClass = "light-glow";
	} else if (clicked === "yellow") {
		newYellowLightClass = "light-glow";
	} else if (clicked === "green") {
		newGreenLightClass = "light-glow";
	}
	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-2 col-md-6 traffic-light-container mt-5 justify-content-center ">
					<div
						className={
							"traffic-light-red mb-1 col-12" +
							" " +
							newRedLightClass
						}
						onClick={() => setClicked("red")}
					/>
					<div
						className={
							"traffic-light-yellow mb-1" +
							" " +
							newYellowLightClass
						}
						onClick={() => setClicked("yellow")}
					/>
					<div
						className={
							"traffic-light-green" + " " + newGreenLightClass
						}
						onClick={() => setClicked("green")}
					/>
				</div>
			</div>
		</div>
	);
}
