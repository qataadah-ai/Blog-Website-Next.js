import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="h-full p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-[transform,shadow,border-color] duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/50 group-hover:ring-1 group-hover:ring-indigo-500/20">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
              Post #{post.id}
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
            {post.body.substring(0, 100)}...
          </p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                U
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                User {post.userId}
              </span>
            </div>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
