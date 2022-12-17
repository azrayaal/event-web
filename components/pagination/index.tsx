import React from 'react';

export default function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  // export default function Pagination(props) {
  //   const { totalPost, postPerpage } = props;

  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" text-center justify-center items-center sm:pt-24 pt-0 sm:pb-16 pb-6">
      <div aria-label="Page navigation">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              onClick={() => setCurrentPage(currentPage - 1)}
              href="#"
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pages.map((page, index) => {
            return (
              <li>
                <a
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {page}
                </a>
              </li>
            );
          })}
          <li>
            <a
              onClick={() => setCurrentPage(currentPage + 1)}
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </div>

      {/* {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>
            {page}
          </button>
        );
      })} */}
    </div>
  );
}
