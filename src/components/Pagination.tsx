import React, { FunctionComponent } from "react";

const Pagination: FunctionComponent<{
  photos_per_page: number;
  total_photos: number;
  current_page: number;
  paginate: Function;
}> = ({ photos_per_page, total_photos, current_page, paginate }) => {
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium"> {current_page} </span>
          of
          <span className="font-medium"> {total_photos} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginate("prev");
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              paginate("next");
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
