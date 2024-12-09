import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="px-4 lg:px-0 md:max-w-[768px] mx-auto flex flex-col justify-center items-center mt-[70px] mb-[100px]">
      <img
        src="/images/page-not-found.svg"
        className="md:h-[300px] md:w-[360px] mb-8"
        alt="page not found"
      />
      <h1 className="text-[38px] text-center md:text-[48px] text-black-400 font-bold tracking-[0.04em] mb-6 dark:text-light-gray">
        Oops! Something went wrong...
      </h1>
      <p className="text-light-gray-400 font-[18px] mb-8 dark:text-light-gray">
        The page you are looking for was moved, removed, renamed or might never existed!
      </p>
      <Link className="rounded-full px-8 bg-primary py-4 text-white" to="/">
        Back to homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
