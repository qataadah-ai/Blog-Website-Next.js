import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/api";
import Link from "next/link";
export const metadata = {
  title: "BlogStream | Discover Stories & Ideas",
  description:
    "Explore the latest blog posts on technology, design, and life. A clean, fast, and modern blog experience built with Next.js.",
  openGraph: {
    title: "BlogStream | Discover Stories & Ideas",
    description:
      "Explore the latest blog posts on technology, design, and life.",
    type: "website",
  },
};

export default async function Home() {
  try {
    const allPosts = await getPosts();
    const posts = [];
    const users = new Set();

    for (const post of allPosts) {
      const userId = post.userId;

      if (!users.has(userId)) {
        posts.push(post);
        users.add(userId);
      }

      if (posts.length === 10) break;
    }
    console.log("Fetched posts:", posts);
    return (
      <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-outfit">
              Inspiring{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Stories
              </span>{" "}
              & Ideas
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Dive into our curated collection of articles, tutorials, and
              insights from the world of technology and beyond.
            </p>
          </header>

          {posts.length > 0 && (
            <div
              className="mb-16 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-indigo-600 text-white p-8 md:p-12 shadow-2xl shadow-indigo-500/20 group">
               
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                      Featured Article
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight font-outfit">
                      {posts[0].title}
                    </h2>
                    <p className="text-indigo-100 mb-8 text-lg ">
                      {posts[0].body}
                    </p>
                    <Link
                      href={`/blog/${posts[0].id}`}
                      className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
                    >
                      Read Featured Story
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-full h-64 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                      <svg
                        className="w-32 h-32 text-white/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                        <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

         <BlogList initialPosts={posts}/>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4"></div>
    );
  }
}
