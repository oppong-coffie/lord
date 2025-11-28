import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Education from './components/Education';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Role from './components/Role';
import FAQ from './components/FAQ';
import ChatWidget from './components/ChatWidget';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <ThemeProvider>
            <div className="font-sans antialiased text-gray-900">
                <Navbar />
                <Hero />
                <About />
                {/* <Role /> */}
                <Stats />
                <Vision />
                <Impact />
                <Education />
                <Awards />
                <Gallery />
                <Publications />
                <FAQ />
                <Contact />
                <Footer />
                <ChatWidget />
            </div>
        </ThemeProvider>
    );
};

export default App;