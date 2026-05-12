import { getPost } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ErrorMessage from '@/components/ErrorMessage';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | BlogStream`,
    description: post?.body?.substring(0, 160),
  };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  
  try {
    const post = await getPost(id);

    if (!post) {
      notFound();
    }

    return (
      <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>

          <article className="glass p-8 md:p-12 rounded-3xl animate-fade-in shadow-2xl shadow-indigo-500/10">
            <header className="mb-10">
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
                  Technology
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                  5 min read
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 border-b border-slate-200 dark:border-slate-800 pb-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg font-bold">U{post.userId}</span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-lg">Author Name Placeholder</p>
                  <p className="text-slate-500 text-sm font-medium">Published on May 11, 2024</p>
                </div>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 dark:first-letter:text-indigo-400 first-letter:mr-3 first-letter:float-left">
                {post.body}
              </p>
              
              <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-indigo-500 italic text-slate-600 dark:text-slate-400">
                "This is a placeholder for a pull quote or a highlight from the article to make the layout feel more dynamic and professional."
              </div>
              
              <p className="mt-8 text-slate-700 dark:text-slate-300 leading-relaxed text-xl">
                Additional placeholder content to simulate a longer, more substantial blog post. JSONPlaceholder only provides a short body, but in a real application, this would be a full markdown or rich text content.
              </p>
            </div>

            <footer className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind', 'Design'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </footer>
          </article>

          <div className="mt-12 text-center">
             <Link 
              href="/" 
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
            >
              Discover More Stories
            </Link>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <ErrorMessage message={error.message} />
      </div>
    );
  }
}
