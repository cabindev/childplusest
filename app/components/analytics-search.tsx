// app/components/analytics-search.tsx - Search component with tracking
'use client';

import { useState } from 'react';
import { trackSearch } from '../lib/google-analytics';

interface AnalyticsSearchProps {
  onSearch: (term: string) => void;
  results?: any[];
  placeholder?: string;
  className?: string;
}

export default function AnalyticsSearch({ 
  onSearch, 
  results = [], 
  placeholder = "ค้นหา...",
  className = ""
}: AnalyticsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
    
    if (term.length >= 2) { // Track searches with 2+ characters
      trackSearch(term, results.length);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 focus:outline-none"
      />
      <svg
        className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
