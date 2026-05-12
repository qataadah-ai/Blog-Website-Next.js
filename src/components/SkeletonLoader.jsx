export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 animate-pulse">
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-24 mb-6"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-full mb-3"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-3/4 mb-6"></div>
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full"></div>
            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full"></div>
            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-2/3"></div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-16"></div>
            </div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
