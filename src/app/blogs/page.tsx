'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import blogs from '@/data/blogs.json';
import Slider from './components/Slider';
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import { getDeadlineText, calculateDaysRemaining } from '@/lib/deadlineUtils';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const BLOGS_PER_PAGE = 12;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBlogs, setActiveBlogs] = useState<any[]>([]);
  const [expiredBlogs, setExpiredBlogs] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const active: any[] = [];
    const expired: any[] = [];

    blogs.forEach((blog: any) => {
      if (blog.deadlineDate) {
        const { isExpired, daysRemaining } = calculateDaysRemaining(blog.deadlineDate);
        if (isExpired) {
          expired.push({ ...blog, daysRemaining });
        } else {
          active.push({ ...blog, daysRemaining });
        }
      } else {
        // Grants without deadlineDate are always active (Rolling / Always Open)
        // Give them a large daysRemaining value so they appear after time-limited grants
        active.push({ ...blog, daysRemaining: 9999 });
      }
    });

    // Sort active grants by deadline (nearest deadline first)
    active.sort((a, b) => a.daysRemaining - b.daysRemaining);

    // Sort expired grants by deadline (most recently expired first)
    expired.sort((a, b) => b.daysRemaining - a.daysRemaining);

    setActiveBlogs(active);
    setExpiredBlogs(expired);
  }, []);

  // Combine active and expired blogs (expired at the end)
  const allBlogs = useMemo(() => [...activeBlogs, ...expiredBlogs], [activeBlogs, expiredBlogs]);

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return allBlogs;
    
    return allBlogs.filter((blog: any) => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [allBlogs, searchQuery]);

  const TOTAL_PAGES = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't render until client-side calculations are complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-gradient-to-br from-[#0a0e4d] via-[#1a3a5c] to-[#2d5a7b] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4a8c7c]/30 to-transparent rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#0a0e4d]/30 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#6bb8a8]/20 to-transparent rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
            <h1 className={`${bricolage.className} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2`}>
              Grants & Funding
            </h1>
            <p className={`${sourceSerif.className} text-base text-white/90 max-w-3xl leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10`}>
              Discover grants and funding opportunities for your startup. Explore practical articles focused on trust, faster response systems, and automation workflows that help businesses convert more enquiries.
            </p>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className={`${sourceSerif.className} text-gray-600`}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0a0e4d] via-[#1a3a5c] to-[#2d5a7b] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4a8c7c]/30 to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#0a0e4d]/30 to-transparent rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#6bb8a8]/20 to-transparent rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md mb-8 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></div>
            <span className={`${bricolage.className} text-white text-sm font-bold tracking-widest uppercase`}>Funding Opportunities</span>
          </div>
          <h1 className={`${bricolage.className} text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">Business Growth</span>
            <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">& Automation Blog</span>
          </h1>
          <p className={`${sourceSerif.className} text-base text-white/90 max-w-3xl leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10`}>
            Discover grants and funding opportunities for your startup. Explore practical articles focused on trust, faster response systems, and automation workflows that help businesses convert more enquiries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search grants..."
              value={searchQuery}
              onChange={handleSearch}
              className={`${bricolage.className} w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-md`}
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-3 flex items-center justify-between">
              <p className={`${sourceSerif.className} text-sm text-gray-600`}>
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'grant' : 'grants'} found
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className={`${bricolage.className} text-sm text-blue-600 hover:text-blue-700 font-medium`}
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`${bricolage.className} text-2xl font-bold text-gray-900 mb-2`}>No grants found</h3>
            <p className={`${sourceSerif.className} text-gray-600 mb-6`}>Try adjusting your search query</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className={`${bricolage.className} px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors`}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Show header for expired grants on last page */}
            {currentPage === TOTAL_PAGES && expiredBlogs.length > 0 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h3 className={`${bricolage.className} text-2xl font-bold text-red-700 mb-2`}>
                    Expired Opportunities
                  </h3>
                  <p className={`${sourceSerif.className} text-red-600`}>
                    These grants have reached their deadline and are no longer accepting applications.
                  </p>
                </div>
              </div>
            )}
            {currentBlogs.map((blog, index) => {
            const cardGradients = [
              'from-[#2F327A] to-[#1e7547]',
              'from-[#1e7547] to-[#2F327A]',
              'from-[#3D3F8F] to-[#1e7547]',
            ];
            const gradientClass = cardGradients[index % cardGradients.length];
            
            // Check if grant is expired
            const isExpired = blog.deadlineDate ? calculateDaysRemaining(blog.deadlineDate).isExpired : false;
            
            return (
              <div
                key={blog.id}
                id={`blog-${blog.id}`}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border flex flex-col h-full ${isExpired ? 'border-red-200 hover:border-red-400 opacity-75' : 'border-gray-200 hover:border-blue-300'}`}
              >
                {/* Top Section - Colored Gradient */}
                <div className={`bg-gradient-to-r ${gradientClass} p-6 relative overflow-hidden h-32 flex flex-col justify-center`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`${bricolage.className} inline-block text-xs font-semibold text-white/90 uppercase tracking-wider`}>
                        {blog.category}
                      </span>
                      {isExpired && (
                        <span className={`${bricolage.className} inline-block px-2 py-0.5 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded`}>
                          Expired
                        </span>
                      )}
                    </div>
                    <h3 className={`${bricolage.className} text-lg font-bold text-white line-clamp-2 leading-tight`}>
                      {blog.title}
                    </h3>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                </div>

                {/* Bottom Section - White Background */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Description */}
                  <p className={`${sourceSerif.className} text-gray-600 mb-3 line-clamp-2 leading-relaxed text-sm`}>
                    {blog.excerpt}
                    <span className="text-blue-600">...</span>
                  </p>

                  {/* Amount */}
                  <div className="mb-3">
                    <span className={`${bricolage.className} text-sm font-semibold text-gray-800`}>{blog.amount}</span>
                  </div>

                  {/* Closing Date */}
                  <div className={`${sourceSerif.className} text-xs text-gray-500 mb-3`}>
                    <span>Closing: {getDeadlineText(blog.deadline, blog.deadlineDate)}</span>
                  </div>

                  {/* Location */}
                  <div className={`${sourceSerif.className} text-xs text-gray-500 mb-3`}>
                    <span>Location: {blog.location}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags?.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className={`${bricolage.className} px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium`}>
                        {tag}
                      </span>
                    ))}
                    {blog.tags?.length > 3 && (
                      <span className={`${bricolage.className} px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium`}>
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1"></div>

                  {/* View More Link */}
                  <Link
                    href={`/blogs/${blog.id}`}
                    className={`${bricolage.className} inline-flex items-center px-2 py-1.5 bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition-colors group/link rounded-lg ml-auto`}
                  >
                    View More
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        )}

        {/* Pagination */}
        <div className="bg-gradient-to-r from-[#0a0e4d] via-[#1a3a5c] to-[#2d5a7b] rounded-2xl shadow-xl p-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm sm:text-base"
            >
              Previous
            </button>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  currentPage === page
                    ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
              disabled={currentPage === TOTAL_PAGES}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Slider Above Footer */}
      <Slider />
    </div>
  );
}
