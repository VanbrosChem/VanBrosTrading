import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel: React.FC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="building.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="text-container">
                    <h1><strong>Van Bros Trading</strong></h1>
                    <h2><strong>The state-of-the-art chemical products.</strong></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="office.png"
                    alt="Second slide"
                />
                <Carousel.Caption className="text-container">
                    <h2 className="bold-text">FOUNDED IN 2020 IN VANCOUVER, BC.</h2>
                    <p className="bold-text">Our main services are selling chemical products, particularly Methyl methacrylate (MMA) and Poly (methyl methacrylate) (PMMA).</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="factory.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-container">
                    <h2 className="bold-text">Factories in China</h2>
                    <p className="bold-text">With our exclusive suppliers and manufacturers in China mainland, we provide our customers with competitive, reliable chemical sources.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;
