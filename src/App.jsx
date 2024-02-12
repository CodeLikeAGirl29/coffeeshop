import Header from "./components/Header";
import Coffee from "./components/Coffee";
import Collection from "./components/Collection";
import "./App.css";

function App() {
	return (
		<div className="main">
			<Header />
			<Coffee />
			<Collection />
		</div>
	);
}

export default App;
