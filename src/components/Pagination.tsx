import React, { FunctionComponent } from "react";

const Pagination: FunctionComponent<{
  total_photos: number;
  current_page: number;
  paginate: Function;
}> = ({ total_photos, current_page, paginate }) => {
  return (
    <div className="px-5 py-2 mx-auto lg:py-10 lg:px-20">
      <div>
        <nav
          className="flex justify-between items-center rounded-md"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginate("prev");
            }}
            className="px-3 py-2 rounded-full border border-gray-300 bg-white text-md font-medium text-gray-500 hover:bg-gray-200"
          >
            <span>&larr;</span>
          </button>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium"> {current_page} </span>
            of
            <span className="font-medium"> {total_photos} </span>
            results
          </p>
          <button
            onClick={() => {
              paginate("next");
            }}
            className="px-3 py-2 rounded-full border border-gray-300 bg-white text-md font-medium text-gray-500 hover:bg-gray-200"
          >
            <span>&rarr;</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
