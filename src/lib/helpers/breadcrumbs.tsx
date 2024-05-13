import React from 'react';
import { Link } from 'react-router-dom';

// Function to parse the URL and extract segments
const parseURL = (url: string): string[] => {
  return url.split('/').filter(segment => segment !== '');
}

interface BreadcrumbsProps {
  url: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ url }) => {
  const segments = parseURL(url);

  return (
    <div className="breadcrumbs">
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <Link to={`/${segments.slice(0, index + 1).join('/')}`}>
            {segment}
          </Link>
          {index < segments.length - 1 && <span> {'>'} </span>}
        </React.Fragment>
      ))}
    </div>
  );
};
