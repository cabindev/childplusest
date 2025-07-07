'use client';

export default function SkeletonLoader() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="w-48 h-10 bg-gray-200 rounded-md mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden bg-gray-100">
              <div className="p-6">
                <div className="h-7 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
                
                <div className="relative h-40 mb-4 bg-gray-200 rounded-md animate-pulse"></div>
                
                <div className="flex justify-between items-center">
                  <div className="w-20 h-5 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="w-16 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}