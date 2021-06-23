import React from "react";

export default function test() {
  return (
    <>
      <div>
        <div className="title text-xl font-medium">Round</div>
        <div className="w-full py-3">
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-full border border-blue-600 hover:bg-blue-50"
            >
              Primary
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-full border border-gray-600 hover:bg-gray-50"
            >
              Secondary
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-full border border-green-600 hover:bg-green-50"
            >
              Success
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-full border border-red-600 hover:bg-red-50"
            >
              Danger
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-full border border-yellow-600 hover:bg-yellow-50"
            >
              Warning
            </button>
          </div>
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none text-gray-800 text-sm py-2.5 px-5 rounded-full border border-gray-800 hover:bg-gray-200"
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
