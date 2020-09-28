import React from "react"

import Navigation from "./components/navigation";
import Content from "./components/content";
import Footer from "./components/footer"
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {

	const page = (
		<div>
			<Navigation />
			<Content />
			<Footer />
		</div>
	)
	
	return page;
}

export default App;
