import Hero from "../components/Homepage/Hero/Hero.jsx";
import About from "../components/Homepage/About/about.jsx";
import Info from "../components/Homepage/Info/info.jsx";
import Carusell from "../components/Homepage/carusell/carusell.jsx";
import Footer from "../components/SharedElements/Footer/footer.jsx";
import Devider from "../components/SharedElements/Devider/devider.jsx";
import DeviderMobile from "../components/SharedElements/DeviderMobile/deviderMobile.jsx";

export default function Home() {
    return (
        <div className="page">
            <div className="bg-layer bg-under" aria-hidden />

            <Hero />
            <DeviderMobile />
            <About />
            <Devider />
            <Info />
            <Devider />
            <Carusell />
            <Footer />
        </div>
    );
}
