import React from 'react';
import '../css/carousel.css';

interface FeatureProps {
    title: string;
    text: string;
    imgSrc: string;
    imgFirst?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, text, imgSrc, imgFirst = false }) => {
    return (
        <div className={`row featurette ${imgFirst ? "flex-row-reverse" : ""}`}>
            <div className="col-md-7">
                <div className="text-container"> {/* Apply text-container class here */}
                    <h2 className="featurette-heading">{title}</h2>
                    <p className="lead">{text}</p>
                </div>
            </div>
            <div className="col-md-5">
                {/* Replace SVG with an img tag */}
                <img src={imgSrc} alt={title} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
            </div>
        </div>
    );
};

export default Feature;
