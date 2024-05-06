import React from 'react';
import '../css/carousel.css';

function MarketingSection() {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"/>
          </svg>
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        {/* Additional columns */}
      </div>
    </div>
  );
}
