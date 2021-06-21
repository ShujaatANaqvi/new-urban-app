/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const HeaderComponent = ({ children, onClick }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <>
      <div className='container mx-auto'>
        <div className="grid grid-cols-3">
          <div className="px-2 py-4">

            <a href="#">
              <span className='text-logo-urban text-lg uppercase'>Urban</span><span className='text-logo-app text-lg uppercase opacity-75'>App</span>
            </a>
          </div>

          <div className=" my-1 w-auto">
            <div className="bg-white flex items-center rounded-full shadow-xl">
              <input className="ml-4 px-4 rounded-l-full w-full  text-gray-700 leading-tight focus:outline-none" id="search" type="search" placeholder="Search" />
              <div className="p-3">
                <i className="fas fa-search text-logo-urban px-6"></i>
              </div>
            </div>
          </div>

          <div className="w-5">
          <button
            className="ripple-button"
            onClick={e => {
              const rect = e.target.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              onClick && onClick(e);
            }}
          >
            {isRippling ? (
              <span
                className="ripple"
                style={{
                  left: coords.x,
                  top: coords.y
                }}
              />
            ) : (
              ''
            )}
            <span className="content">{children}</span>asdasd
          </button>
          <div>
          </div>

          </div>

        </div>

      </div>



    </>
  );
}

export default HeaderComponent;
