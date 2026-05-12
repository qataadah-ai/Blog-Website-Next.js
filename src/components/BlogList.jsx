"use client"
import { useState,useMemo } from "react"
import SearchBar from "./SearchBar"
import BlogCard from "./BlogCard"

function BlogList({initialPosts}) {
  const [searchQuery , setSearchQuery] =useState('')

const filteredPosts = useMemo(()=>{
return initialPosts.filter((post)=> post.title.toLowerCase().includes(searchQuery.toLowerCase()))
},[searchQuery,initialPosts])

  return (
    <div className="animate-fade-in">
      <SearchBar value={searchQuery} onChange={setSearchQuery}/>
   {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="mb-4 text-slate-400">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No blogs found</h3>
          <p className="text-slate-500">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList
