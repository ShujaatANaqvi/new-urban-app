import React from "react";
import {  Images} from '../Js/ExportImages';
const MidSection = () => {
  return (
    <>
      <div>
        <div className="carousel mx-8">
          <div className="carousel-inner ">
            <input
              className="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden
              defaultChecked="checked"
            />
            <div className=" carousel-item">
              <img className=" object-cover"
                src={Images.banner1}
                alt="get service"
              />
            </div>
            <input
              className="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div className="carousel-item">
              <img
                 src={Images.banner2}
                alt=""
              />
            </div>
            <input
              className="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div className="carousel-item">
              <img
                 src={Images.banner3}
                alt=""
              />
            </div>

            <label
              htmlFor="carousel-3"
              className="carousel-control prev control-1"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control next control-1"
            >
              ›
            </label>
            <label
              htmlFor="carousel-1"
              className="carousel-control prev control-2"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-3"
              className="carousel-control next control-2"
            >
              ›
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control prev control-3"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-1"
              className="carousel-control next control-3"
            >
              ›
            </label>
            <ol className="carousel-indicators">
              <li>
                <label htmlFor="carousel-1" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-2" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-3" className="carousel-bullet">
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center  text-gray-600 my-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
        explicabo corporis est suscipit ab beatae!
      </div>
    </>
  );
};

export default MidSection;
