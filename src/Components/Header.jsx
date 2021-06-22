/* eslint-disable jsx-a11y/anchor-is-valid */
const HeaderComponent = () => {
  return (
    <>
      <div className="container mx-auto mt-3 mb-5">
        <div className="grid grid-cols-3">
          <div className="px-2 py-4">
            <a href="#">
              <span className="text-logo-urban text-xl uppercase">Urban</span>
              <span className="text-logo-app text-xl uppercase opacity-75">
                App
              </span>
            </a>
          </div>

          <div className=" my-2 w-auto ">
            <div className="bg-white flex items-center rounded-full shadow-xl">
              <input
                className="ml-4 px-4 rounded-l-full w-full  text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="search"
                placeholder="Search"
              />
              <div className="px-4 py-2 ">
                <i className="bg-gray-100 rounded-3xl w-6 h-8 flex justify-center items-center fas fa-search text-logo-urban hover:bg-white px-6"></i>
              </div>
            </div>
          </div>
          <div className="ml-28 mt-3">
            <div className="inline-block mr-5 ">
              <button
                type="button"
                className="focus:outline-none text-yellow-300 text-sm py-1.5 px-5 rounded-full border-4 border-yellow-300 hover:bg-yellow-50"
              >
                Post add
              </button>
            </div>
            <div className="inline-block mr-2 ">
              <button
                type="button"
                className="focus:outline-none text-white bg-green-500 text-sm py-1.5 px-5 rounded-full border-4 border-green-500 hover:bg-green-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
