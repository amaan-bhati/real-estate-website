import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Latest from "./components/Latest";
import SearchBar from "./components/Search";
import Trusted from "./components/Trusted";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<SearchBar />
			<Featured />
			<Trusted />
			<Latest />
			<Banner />
			<Footer />
		</div>
	);
};

export default App;
