import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import {ServicesSection} from "../components/ServicesSection";
import {ContactSection} from "../components/ContactSection";


export function Home() {
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ContactSection/>
            <Footer/>   
        </>
    );
}