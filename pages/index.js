import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import Head from "next/head";

const App = () => {
	return (
		<>
			<Head>
				<title>Portfolio | Shivam Sharma</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<div className="relative z-0">
				<div className=" bg-cover bg-no-repeat bg-center">
					<Navbar />
					<HeroBackground />
					<Hero />
				</div>
				<About />
				<Experience />
				{/* <Tech /> */}
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</>
	);
};

export default App;
