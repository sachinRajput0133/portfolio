import React from "react";
import "./WorkExpertise.css";
const WorkExpertise = () => {
  return (
    <div className="container-fluid my-6 expert_sec" id="about_id">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="main_title">
            <h1>Work Expertise</h1>
            <p className="text-center">
              Obviously i am a Graphic Designer,<br /> Experience with all the stages
              of the design cycle with every project
            </p>
          </div>
          <div className="row expert_body_sec">
            <div className="common_div col-md-7 col-11 about_text d-flex justofy-content-center align-self-center align-items-start flex-column">
              <div className="w-100 procress_sec">
                <h2 className="expert_h1">Photoshop</h2>
                <div className="progress">
                  <div
                    className="progress-bar pb_1"
                    role="progressbar"
                   
                  />
                </div>
              </div>
              <div className="w-100 procress_sec">
                <h2 className="expert_h2">Illustrator</h2>
                <div className="progress">
                  <div
                    className="progress-bar pb_2"
                    role="progressbar"
                    
                  />
                </div>
              </div>
              <div className="w-100 procress_sec">
                <h2 className="expert_h3">Branding</h2>
                <div className="progress">
                  <div
                    className="progress-bar pb_3"
                    role="progressbar"
                   
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-11 left_img right_container">
                

              <img className="img-fluid" src="3.jpg" alt="" />
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExpertise;
