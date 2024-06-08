import { ChevronDown, LogoFacebook, LogoInstagram, LogoTwitter } from "react-ionicons";
import bg from "../../assets/images/bg.jpg";

const Header = () => {
	const navItems = [
		{ path: "/", title: "Home" },
		{ path: "/properties", title: "Properties" },
		{ path: "/agencies", title: "Agencies" },
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
	];
	return (
		<div
			className="w-full h-screen relative bg-cover bg-center"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
				<span className="text-[#fff7ee] font-semibold text-[30px]">R.Estates</span>
				<div className="lg:flex hidden items-center gap-5">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-[#fff7ee] no-underline font-medium"
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="flex items-center gap-5">
					<LogoFacebook
						color="#fff7ee"
						cssClasses={"cursor-pointer"}
					/>
					<LogoTwitter
						color="#fff7ee"
						cssClasses={"cursor-pointer"}
					/>
					<LogoInstagram
						color="#fff7ee"
						cssClasses={"cursor-pointer"}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2 items-start xl:mt-64 mt-24 xl:ml-[150px] ml-5">
				<span className="text-[#fff7ee] lg:text-[70px] md:text-[40px] text-[35px] font-semibold z-50 text-left md:max-w-[900px] max-w-full md:leading-[70px]">
					Your Trusted Real Estate Agency Group
				</span>
			</div>
			<div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center gap-5">
				<ChevronDown
					color="#fff7ee"
					width={"30px"}
					height={"30px"}
					cssClasses={"animate-bounce"}
				/>
			</div>
		</div>
	);
};

export default Header;
