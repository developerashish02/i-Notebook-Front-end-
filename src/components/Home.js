import React from "react";
import Notes from "./Notes";
function Home(props) {
	return (
        <>
            {/* user notes */}
			<Notes showAlert={props.showAlert} />
		</>
	);
}

export default Home;
