
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlogStream | Discover Stories & Ideas",
  description: "A modern, fast, and SEO-optimized blog platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="">

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 font-outfit"
                >
                  BLOG
                  <span className="text-slate-900 dark:text-white">STREAM</span>
                </Link>
              </div>
              <div className="hidden sm:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  Articles
                </Link>
                <a
                  href="#"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  About
                </a>
                <ThemeToggle/>
                <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-8">
                  <button className="px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-white dark:bg-slate-900 border-slate-200 border-t dark:border-slate-800 p-12 mt-12">
          <div className="max-w-7xl flex justify-between">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <Link
                  href="/"
                  className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 font-outfit"
                >
                  BLOG
                  <span className="text-slate-900 dark:text-white">STREAM</span>
                </Link>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-widest text-xs">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>
                    <a href="#" className="hover:text-indigo-600">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-600">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-600">
                      API Reference
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-widest text-xs">
                  Stay Connected
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-indigo-600">
                  <span className="text-slate-900 dark:text-white">Linkedin</span>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-indigo-600">
                   💻 <span className="text-slate-900 dark:text-white">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
} 