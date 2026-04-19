import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SkillsSection from "./Components/SkillsSection";
import WorkSection from './Components/WorkSection';
import EducationSection from "./Components/EducationSection";
import PersonalAboutSection from './Components/PersonalAboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ScrollProgress from "./Components/ScrollProgress";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate initial loading
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	const disableRightClick = (e) => {
		e.preventDefault();
	};

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50">
				<div className="text-center">
					<div className="relative">
						<div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-12 h-12 border-4 border-white/50 border-b-white rounded-full animate-spin"></div>
						</div>
					</div>
					<p className="text-white text-2xl font-bold mb-2 animate-pulse">Loading Portfolio</p>
					<p className="text-white/80 text-sm">Krishna Chelluboina</p>
				</div>
			</div>
		);
	}

	return (
		<div 
			className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
			onContextMenu={disableRightClick}
		>
			<ScrollProgress />
			<Navbar />
			
			<main>
				<HeroSection />
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-12"></div>
				
				<SkillsSection />
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-12"></div>
				
				<WorkSection /> 
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-12"></div>
				
				<ProjectsSection />
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-12"></div>
				
				<EducationSection />
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-12"></div>
				
				<PersonalAboutSection />
				
				<div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-12"></div>
				
				<ContactSection />
			</main>
			
			<Footer />
		</div>
	);
}

export default App;
