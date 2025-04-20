import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shorten from "./Components/Shorten/Shorten";
import NotFount from "./Components/Not Found/NotFound";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shorten/:shortCode" element={<Shorten />} />
				<Route path="/404" element={<NotFount />} />
			</Routes>
		</Router>
	);
};

export default App;
