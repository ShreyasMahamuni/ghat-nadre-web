import React from "react";
import temple from "../../assets/images/temple.jpg";
import { Link } from "react-router";

function About() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-3 ">
          <div className="side-image mb-3" data-aos="fade-right">
            <img
              src={temple}
              className=" rounded-5 overflow-hidden img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-9">
          <h2 className="mb-4 theme-text-color" data-aos="fade-left">
            घाटनांद्रे विषयी
          </h2>
          <p className="fs-5 mb-1">
            तहसील - <strong>कवठेमहांकाळ</strong>
          </p>
          <p className="fs-5 mb-1">
            जिल्हा - <strong>सांगली</strong>
          </p>
          <p className="fs-5 mb-1">
            राज्य - <strong>महाराष्ट्र</strong>
          </p>

          <p className="fs-5 mb-3   ">
            महाराष्ट्र राज्यातील सांगली जिल्ह्यातील कवठेमहांकाळ तालुक्यात
            घाटनांद्रे हे गाव आहे. हे उपजिल्हा मुख्यालय कवठेमहांकाळ (तहसीलदार
            कार्यालय) पासून 20 किमी अंतरावर आणि जिल्हा मुख्यालय सांगलीपासून 45
            किमी अंतरावर आहे. 2009 च्या आकडेवारीनुसार, घाटनांदरे ही घाटनांद्रे
            गावाची ग्रामपंचायत आहे.
          </p>
          <Link
            to={"/about"}
            className="btn btn-sm readMoreButton rounded-pill"
          >
            अधिक वाचा...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
