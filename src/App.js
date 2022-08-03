import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import Services from './Services';

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Services />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
