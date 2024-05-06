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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Carousel />
            <MarketingSection />
            <Footer />
        </div>
    );
}

export default App;
