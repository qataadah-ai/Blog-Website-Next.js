export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
        {message || "We couldn't load the blog posts. Please check your connection and try again."}
      </p>
    </div>
  );
}
