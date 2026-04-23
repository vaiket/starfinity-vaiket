'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';
import blogs from '@/data/blogs.json';
import { ChevronLeft, Building2, MapPin, DollarSign, FileText, CheckCircle, Zap, Clock, User, Tag, ArrowRight, Calendar } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import { getDeadlineText } from '@/lib/deadlineUtils';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [blog, setBlog] = useState<any>(null);
  const [deadlineText, setDeadlineText] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const foundBlog = blogs.find((b) => b.id === parseInt(id));
    if (!foundBlog) {
      notFound();
    }
    setBlog(foundBlog);
    setDeadlineText(getDeadlineText(foundBlog.deadline, foundBlog.deadlineDate));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Unique Header with Glass Effect */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className={`${bricolage.className} font-medium`}>Back to Opportunities</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className={`${bricolage.className} px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-semibold border border-blue-200`}>
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Unique Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <span className={`${bricolage.className} px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest`}>
              Grant Opportunity
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          </div>
          <h1 className={`${bricolage.className} text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center`}>{blog.title}</h1>
          <div className="flex items-center justify-center gap-6 text-slate-600">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-2">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className={`${sourceSerif.className} font-medium`}>{blog.organization}</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-2">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className={`${sourceSerif.className} font-medium`}>{blog.location}</span>
            </div>
          </div>
        </div>

        {/* Unique Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Funding Amount Card - Unique Design */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0e4d] via-[#1a3a5c] to-[#2d5a7b] p-8 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4a8c7c]/30 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#6bb8a8]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${bricolage.className} text-emerald-300 font-semibold uppercase tracking-widest text-sm`}>Funding Available</span>
                </div>
                <p className={`${bricolage.className} text-4xl font-bold mb-2`}>{blog.amount}</p>
                <p className={`${sourceSerif.className} text-white/80`}>{deadlineText} left</p>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-white flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-2xl font-bold text-slate-900`}>Overview</h3>
              </div>
              <p className={`${sourceSerif.className} text-slate-700 leading-relaxed text-lg`}>{blog.description}</p>
            </div>

            {/* Who Qualifies Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-white flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-2xl font-bold text-slate-900`}>Who Qualifies</h3>
              </div>
              <div className="space-y-4">
                {blog.whoQualifies.map((qualification: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                    <span className={`${sourceSerif.className} text-slate-700 leading-relaxed flex-1`}>{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Deadline Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-lg font-bold text-slate-900`}>Deadline</h3>
              </div>
              <p className={`${bricolage.className} text-2xl font-bold text-amber-600`}>{deadlineText}</p>
            </div>

            {/* Author Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-white flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-lg font-bold text-slate-900`}>Author</h3>
              </div>
              <p className={`${sourceSerif.className} text-slate-700 font-medium`}>{blog.author}</p>
            </div>

            {/* Tags Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-white flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-lg font-bold text-slate-900`}>Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => {
                  const tagColors = [
                    'bg-blue-100 text-blue-700 hover:bg-blue-200',
                    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
                    'bg-blue-100 text-blue-700 hover:bg-blue-200',
                    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
                  ];
                  const colorClass = tagColors[index % tagColors.length];
                  return (
                    <span
                      key={index}
                      className={`${bricolage.className} inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${colorClass} transition-colors cursor-default`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Real World Value Card */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-violet-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-white flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className={`${bricolage.className} text-lg font-bold text-slate-900`}>Real-World Value</h3>
              </div>
              <p className={`${sourceSerif.className} text-slate-700 leading-relaxed`}>{blog.realWorldValue}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB--Pvd16lPRehZ30ntwPRO5vfk4yxIdMODWEgV-tSEBk7YQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className={`${bricolage.className} group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95`}
          >
            <span className="flex items-center gap-3">
              <FileText className="w-5 h-5" />
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <Link
            href="/blogs"
            className="group inline-flex items-center justify-center px-10 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Browse All
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
