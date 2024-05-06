import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/carousel.css';
import Carousel from './Carousel';
import MarketingSection from './MarketingSection';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Carousel />
            <MarketingSection />
            <Footer />
        </div>
    );
}

export default App;
