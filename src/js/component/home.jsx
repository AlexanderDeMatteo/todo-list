import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Notes } from "./lista.jsx";
//create your first component
const Home = () => {
	return (
		<div className="fondo">
			<h1>todos</h1>
			<div className="notas">
				<Notes />
			</div>
		</div>
	);
};

export default Home;
