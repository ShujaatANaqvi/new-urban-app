/* eslint-disable jsx-a11y/anchor-is-valid */
const HeaderComponent = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="px-2 py-4">
            <a href="#">
              <span className="text-logo-urban text-lg uppercase">Urban</span>
              <span className="text-logo-app text-lg uppercase opacity-75">
                App
              </span>
            </a>
          </div>

          <div className=" my-1 w-auto">
            <div className="bg-white flex items-center rounded-full shadow-xl">
              <input
                className="ml-4 px-4 rounded-l-full w-full  text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="search"
                placeholder="Search"
              />
              <div className="p-3 ">
                <i className="fas fa-search text-logo-urban px-6"></i>
              </div>
            </div>
          </div>
          <div>
            <button class="py-2 px-4 rounded-full focus:outline-none ripple-bg-logo-urban  ">
              Hover
            </button>
            <button
              class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Small
            </button>
            <button className="">sign out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
