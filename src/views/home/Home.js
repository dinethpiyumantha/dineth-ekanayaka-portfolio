import React from "react";
import Signature from '../../assets/signature.png';
import './style.css';

export default function Home() {
    return (
        <div className="my-photo-back">

    <div className="container pad pt-0 pb-4">
      <div className="row py-0">
        <div className="col-sm-7 h-50 py-5 px-2">
          <h2 className="text-white title">
            Hello, I'm Dineth Piyumantha, a software developer & UI designer
            currently based somewhere.
          </h2>
          <img
            src={Signature}
            className="signature mt-5"
            alt="signature"
          />
          
          <p className="name mt-4 text-light">
            Dineth Piyumantha <br />
            IT Undergraduate at SLIIT
          </p>

          <input
            type="button"
            value="Download CV"
            className="btn btn-outline-light mt-3"
          />

          <br />
          <div class="mt-3">
            
          </div>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </div>
    
  </div>
    );
}