import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.jpg";
import { ArrowForwardCircle, BedOutline, TvOutline, WifiOutline } from "react-ionicons";

const Featured = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center py-16 gap-10">
			<div className="flex flex-col items-center gap-2">
				<span className="text-[28px] font-semibold text-[#416477]">Featured Listings</span>
				<p className="font-light text-[15px] text-gray-600 text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum repellat illum
					officiis in maiores.
				</p>
			</div>
			<div className="w-full flex md:flex-row flex-col items-start gap-4 md:h-[650px] h-[900px]">
				<div
					className="md:w-1/2 w-full h-full rounded-xl bg-cover bg-center relative flex flex-col items-center justify-end py-5"
					style={{ backgroundImage: `url(${four})` }}
				>
					<ArrowForwardCircle
						cssClasses={"absolute top-5 right-5 rotate-[-40deg] cursor-pointer"}
						color="#333"
						width={"35px"}
						height={"35px"}
					/>
					<div className="w-[95%] bg-[#1d1d1d] rounded-xl flex xl:flex-row flex-col md:items-center items-start justify-between px-5 py-3 md:gap-0 gap-8 shadow-lg">
						<div className="flex flex-col gap-1 justify-center">
							<span className="text-white font-semibold text-[25px]">Luxury Villa</span>
							<span className="text-gray-200 text-[15px]">Code 036</span>
						</div>
						<div className="flex items-center justify-center gap-5">
							<div className="flex flex-col gap-1 items-center">
								<BedOutline
									color="#bdbdbd"
									width="30px"
									height="30px"
								/>
								<span className="text-[14px] font-medium text-[#bdbdbd]">2 Bedrooms</span>
							</div>
							<div className="flex flex-col gap-1 items-center">
								<TvOutline
									color="#bdbdbd"
									width="30px"
									height="30px"
								/>
								<span className="text-[14px] font-medium text-[#bdbdbd]">
									Fully Furnished
								</span>
							</div>
							<div className="flex flex-col gap-1 items-center">
								<WifiOutline
									color="#bdbdbd"
									width="30px"
									height="30px"
								/>
								<span className="text-[14px] font-medium text-[#bdbdbd]">Free Wifi</span>
							</div>
						</div>
						<div className="flex flex-col gap-1 justify-center">
							<span className="text-white font-semibold text-[25px]">$13,500,000</span>
							<span className="text-gray-200 text-[15px]">Vancouver,BC</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
					<div
						className="w-full h-1/2 rounded-xl bg-cover bg-center relative"
						style={{ backgroundImage: `url(${two})` }}
					>
						<ArrowForwardCircle
							cssClasses={"absolute top-5 right-5 rotate-[-40deg] cursor-pointer"}
							color="#333"
							width={"35px"}
							height={"35px"}
						/>
					</div>
					<div className="flex w-full items-center gap-4 h-1/2">
						<div
							className="w-full h-full rounded-xl bg-cover bg-center relative"
							style={{ backgroundImage: `url(${one})` }}
						>
							<ArrowForwardCircle
								cssClasses={"absolute top-5 right-5 rotate-[-40deg] cursor-pointer"}
								color="#333"
								width={"35px"}
								height={"35px"}
							/>
						</div>
						<div
							className="w-full h-full rounded-xl bg-cover bg-center relative"
							style={{ backgroundImage: `url(${three})` }}
						>
							<ArrowForwardCircle
								cssClasses={"absolute top-5 right-5 rotate-[-40deg] cursor-pointer"}
								color="#333"
								width={"35px"}
								height={"35px"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
