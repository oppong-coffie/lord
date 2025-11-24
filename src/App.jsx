import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="font-sans antialiased text-gray-900">
            <Navbar />
            <Hero />
            <About />
            <Stats />
            <Vision />
            <Impact />
            <Education />
            <Awards />
            <Role />
            <Gallery />
            <Publications />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;