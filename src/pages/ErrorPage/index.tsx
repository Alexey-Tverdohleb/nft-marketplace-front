import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ErrorIcon } from 'assets/icons/404.svg';

function ErrorPage() {
  return (
    <div className="mt-12 mb-12 px-4 xl:px-0 container flex flex-col justify-center items-center">
      <ErrorIcon className="w-[360px] h-[300px] mb-8" />
      <h1 className="text-[48px] text-black-400 leading-[58.8px] font-extrabold mb-6 dark:text-white">Oops! Something went wrong...</h1>
      <p className="text-light-gray-400 mb-8">The page you are looking for was moved, removed, renamed or might never existed!</p>

      <Link to="/" className="px-8 py-3.5 bg-primary text-white rounded-full dark:bg-primary-900 dark:text-white dark:hover:bg-primary dark:hover:text-white">
        Back to homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
