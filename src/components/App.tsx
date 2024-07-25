import React from 'react';
import '../css/App.css';
import '../css/carousel.css';
import Carousel from './Carousel';
import MarketingSection from './MarketingSection';
import Footer from './Footer';
import Feature from "./Feature";
import Navbar from "./NavBar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Carousel />
            <hr />
            <MarketingSection />
            <hr />
            <Feature
                id="Feature1"
                title="Methyl methacrylate (MMA)"
                text="Methyl methacrylate (MMA) is colorless liquid, the methyl ester of methacrylic acid (MAA), is a monomer produced on a large scale for the production of polymethyl methacrylate (PMMA)."
                imgSrc="poster1.jpg"
                imgFirst={true}
            />
            <Feature
                id="Feature2"
                title="Polymethyl Methacrylate (PMMA)"
                text="Polymethyl methacrylate (PMMA), also known as acrylic, acrylic glass, perspex, or plexiglasss a transparent thermoplastic often used in sheet form as a lightweight or shatter-resistant alternative to glass. It can also be used as a casting resin, in inks and coatings, and for many other purposes."
                imgSrc="poster2.jpg"
                imgFirst={false}
            />
            <hr />
            <Footer />
        </div>
    );
}

export default App;
