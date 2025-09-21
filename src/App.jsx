import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SkillsSection from "./Components/SkillsSection";
import WorkSection from './Components/WorkSection';
import EducationSection from "./Components/EducationSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function App() {
	console.log("Krishna Vamsi");
	const disableRightClick = (e) => {
        e.preventDefault();
    };

	return (
		<div
			/*className='max-w-[1280px] mx-auto'*/ onContextMenu={disableRightClick}
		>
			<div className="sticky top-0 z-50">
				<Navbar />
			</div>
			<HeroSection />
			<hr />
			<SkillsSection />
			<hr />
			<WorkSection /> 
			<hr />
			<EducationSection />
			<hr />
			<ContactSection />
			<hr />
			<Footer />
		</div>
	);
}

export default App;
