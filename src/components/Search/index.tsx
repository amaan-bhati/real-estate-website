import { SearchOutline } from "react-ionicons";

const SearchBar = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center py-16 gap-10 bg-[#1d1d1d]">
			<div className="flex flex-col items-center gap-2">
				<span className="text-[28px] font-semibold text-[#fff]">Search Our Listings</span>
				<p className="font-light text-[15px] text-gray-200 text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum repellat illum
					officiis in maiores.
				</p>
			</div>
			<div className="flex items-center md:flex-row flex-col w-full px-3 py-2 border border-gray-300 rounded-lg bg-white">
				<SearchOutline
					color={"#333"}
					cssClasses={"hidden md:block"}
				/>
				<div className="flex flex-col w-full items-start justify-center gap-1 md:border-0 border-l ml-8 md:ml-0 border-gray-300 md:pr-0 pr-10">
					<span className="text-[#333] w-fit font-semibold text-[14px] px-3 ml-3">
						Property Location
					</span>
					<select className="outline-none bg-transparent text-[#333] p-0 px-3 w-full ml-2">
						<option value="All">All Locations</option>
						<option value="This week">Canada</option>
						<option value="This Month">America</option>
						<option value="This Season">Germany</option>
					</select>
				</div>
				<div className="flex flex-col w-full items-start justify-center gap-1 border-l border-gray-300 ml-8 md:mt-0 mt-8 md:pr-0 pr-8">
					<span className="text-[#333] font-semibold text-[14px] px-3 ml-3">
						Date of Listing
					</span>
					<select className="outline-none bg-transparent text-[#333] p-0 px-5 w-full">
						<option value="All">All Dates</option>
						<option value="This week">This Week</option>
						<option value="This Month">This Month</option>
						<option value="This Season">This Season</option>
					</select>
				</div>
				<div className="flex flex-col w-full items-start justify-center gap-1 border-l border-gray-300 ml-8 md:mt-0 mt-8 md:pr-0 pr-8">
					<span className="text-[#333] font-semibold text-[14px] px-3 ml-3">
						Property Type
					</span>
					<select className="outline-none bg-transparent text-[#333] p-0 px-5 w-full">
						<option value="All">All Property Types</option>
						<option value="Apartment">Apartment</option>
						<option value="House">House</option>
						<option value="Villa">Villa</option>
					</select>
				</div>

				<button className="text-white bg-[#333] px-5 py-2 rounded-lg ml-0 md:ml-5 shadow-xl md:mt-0 mt-8 md:w-fit w-full">
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
