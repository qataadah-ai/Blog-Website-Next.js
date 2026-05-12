import SkeletonLoader from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-pulse">
          <div className="h-12 md:h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl w-1/2 mx-auto"></div>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full animate-pulse"></div>
        </div>

        <SkeletonLoader />
      </div>
    </div>
  );
}
