import React from 'react';
import '../css/carousel.css';

function MarketingSection() {
  return (
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img src="product1.jpg" alt="PMMA Light Guide Plate" className="bd-placeholder-img rounded-circle" width="150" height="150"/>
            <h2>PMMA Light Guide Plate</h2>
            <p>Products produced by Polymethyl methacrylate (PMMA) Particles.</p>
            <p><a className="btn btn-secondary">Contact for details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img src="product2.jpg" alt="Rubber Machinery" className="bd-placeholder-img rounded-circle" width="150" height="150"/>
            <h2>Rubber and Plastic Machinery</h2>
            <p>Manufacture Industrial moulds for rubber and plastic working machinery.</p>
            <p><a className="btn btn-secondary">Contact for details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img src="product3.jpg" alt="Acrylic Sheet" className="bd-placeholder-img rounded-circle" width="150" height="150"/>
            <h2>Acrylic Sheets</h2>
            <p>Products produced by Polymethyl methacrylate (PMMA) Particles.</p>
            <p><a className="btn btn-secondary">Contact for details &raquo;</a></p>
          </div>
        </div>
      </div>
  );
}

export default MarketingSection;
