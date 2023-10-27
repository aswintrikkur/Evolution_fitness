import "./App.scss";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Services } from "./pages/services/Services";
import { Contact } from "./pages/contact/Contact";
import { Error } from "./pages/error/Error";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
