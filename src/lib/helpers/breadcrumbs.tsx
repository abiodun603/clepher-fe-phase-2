import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const parseURL = (url: string): string[] => {
  // Replace hyphens with spaces before splitting
  const urlWithoutHyphens = url.replace(/-/g, ' ');
  return urlWithoutHyphens.split('/').filter(segment => segment.trim() !== '');
}

interface BreadcrumbsProps {
  url: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ url }) => {
  // Parse the URL and extract segments
  const segments = parseURL(url);

  // Function to check if a segment looks like an ID
  const isIDSegment = (segment: string): boolean => {
    return /^\d+$/.test(segment); // Check if the segment consists of only digits
  };

  return (
    <div className="breadcrumbs flex flex-row items-center space-x-0 md:space-x-1">
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {/* Render the segment only if it's not an ID */}
          {!isIDSegment(segment) && (
            <>
              <Link to={`#`} className='disabled text-sm md:text-lg text-n500 font-normal capitalize hover:text-n500'>
                {segment}
              </Link>
              {index < segments.length - 1 && <ChevronRight size={14} className=' text-xs text-n200' />}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};