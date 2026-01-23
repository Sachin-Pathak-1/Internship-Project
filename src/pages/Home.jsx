import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

export function Home() {
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <Footer/>   
        </>
    );
}