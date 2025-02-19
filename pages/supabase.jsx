'use client'; // Add this if using App Router

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import "@/app/globals.css";

// Initialize Supabase client
const supabase = createClient(
  'https://iinuaxfveueammmcsdpg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbnVheGZ2ZXVlYW1tbWNzZHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MzcwNzQsImV4cCI6MjA1NTIxMzA3NH0.5AlU75ndxkm_W1AqLQnUpgk9R2kdVjPckDupDkHpVS8'
);

export default function RedditThreads() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const { data, error } = await supabase
          .from('reddit_threads')
          .select('*')
          .order('created_utc', { ascending: false });

        if (error) throw error;
        setThreads(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchThreads();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Reddit Threads</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="p-4 border-b bg-indigo-50">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                    r/{thread.subreddit_name}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>↑ {thread.score}</span>
                    <span>• {thread.upvote_ratio * 100}%</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <a 
                  href={thread.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-indigo-600"
                >
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {thread.title}
                  </h2>
                </a>
                
                {thread.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {thread.description}
                  </p>
                )}

                {/* Card Footer */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>{thread.num_comments} comments</span>
                  </div>
                  <span>
                    {new Date(thread.created_utc).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
