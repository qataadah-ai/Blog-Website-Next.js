export default function Loading() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-32 mb-8 animate-pulse"></div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 animate-pulse">
          <div className="flex space-x-4 mb-6">
            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-20"></div>
            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-20"></div>
          </div>
          
          <div className="h-10 md:h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full mb-8"></div>
          <div className="h-10 md:h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl w-3/4 mb-10"></div>

          <div className="flex items-center space-x-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
            <div className="space-y-2">
              <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-40"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-32"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-6 bg-slate-100 dark:bg-slate-800/50 rounded w-full"></div>
            <div className="h-6 bg-slate-100 dark:bg-slate-800/50 rounded w-full"></div>
            <div className="h-6 bg-slate-100 dark:bg-slate-800/50 rounded w-5/6"></div>
            <div className="h-40 bg-slate-50 dark:bg-slate-800/30 rounded-2xl w-full mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
