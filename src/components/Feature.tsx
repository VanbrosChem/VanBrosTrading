import React from 'react';
import '../css/carousel.css';

interface FeatureProps {
    id: string;
    title: string;
    text: string;
    imgSrc: string;
    imgFirst?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ id, title, text, imgSrc, imgFirst = false }) => {
    return (
        <div id={id} className={`row featurette ${imgFirst ? "flex-row-reverse" : ""}`}>
            <div className="col-md-7">
                <div className="text-container">
                    <h2 className="featurette-heading">{title}</h2>
                    <p className="lead">{text}</p>
                </div>
            </div>
            <div className="col-md-5">
                <img src={imgSrc} alt={title} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
            </div>
        </div>
    );
};

export default Feature;
