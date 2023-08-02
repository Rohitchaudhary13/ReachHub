import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (
    <nav className="text-gray-600 py-4 text-sm">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>

        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLastSegment = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLastSegment ? (
                <>
                  <Link to={url} className="text-blue-600 hover:text-blue-800">
                    {segment}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span>{segment}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
