import Header from "./components/Header";
import Coffee from "./components/Coffee";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="main">
			<Header />
			<Coffee />
			<Collection />
			<Footer />
		</div>
	);
}

export default App;
