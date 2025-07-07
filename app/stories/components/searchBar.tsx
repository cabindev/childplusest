// app/stories/components/SearchBar.tsx
export default function SearchBar({ 
    value, 
    onChange 
  }: { 
    value: string; 
    onChange: (value: string) => void; 
  }) {
    return (
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหานิทาน..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 border-kids-blue focus:border-kids-purple focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
      </div>
    );
  }