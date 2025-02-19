"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // for GitHub Flavored Markdown support

import { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ChevronUp,
  MessageCircle,
  ChevronDown,
  ExternalLink,
  ArrowUpDown,
} from "lucide-react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inter = Inter({ subsets: ["latin"] });

function ThreadStatusDropdown({ initialChecked, onStatusChange }) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleStatusChange = (value) => {
    const newStatus = value === "checked";

    // Update local state
    setIsChecked(newStatus);

    // Log the change for backend connection
    console.log(
      `Thread status changed to: ${newStatus ? "Checked" : "Unchecked"}`
    );

    // Optional callback for parent component
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  return (
    <Select
      value={isChecked ? "checked" : "unchecked"}
      onValueChange={handleStatusChange}
    >
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Select Status">
          {isChecked ? (
            <Badge variant="success">Checked</Badge>
          ) : (
            <Badge variant="destructive">Unchecked</Badge>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="checked">
          <Badge variant="success">Checked</Badge>
        </SelectItem>
        <SelectItem value="unchecked">
          <Badge variant="destructive">Unchecked</Badge>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function RedditThreadsTable() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedThreadId, setExpandedThreadId] = useState(null);
  const [sorting, setSorting] = useState({
    column: null,
    direction: null,
  });

  useEffect(() => {
    async function fetchThreads() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/reddit-threads-profile`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setThreads(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchThreads();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading Reddit Threads...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Fetching Threads
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const toggleExpand = (threadId) => {
    setExpandedThreadId((prevId) => (prevId === threadId ? null : threadId));
  };

  const handleStatusChange = (threadId, newStatus) => {
    // This is the method you'll use to update in your backend or state management
    console.log(`Updating thread ${threadId} to status: ${newStatus}`);
    // console.log(newStatus)
    // const checkedStatus = newStatus === 'Checked' ? true : false;
    // console.log(checkedStatus)

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/update-thread-status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thread_id: threadId,
        checked: newStatus,
      }),
    });
  };

  const handleSort = (column) => {
    setSorting((prev) => {
      // If already sorting this column, toggle direction
      if (prev.column === column) {
        return prev.direction === "asc"
          ? { column, direction: "desc" }
          : { column: null, direction: null };
      }
      // First time sorting this column
      return { column, direction: "asc" };
    });
  };

  // Sort directly without useMemo
  const sortedThreads = sorting.column
    ? [...threads].sort((a, b) => {
        if (sorting.direction === "asc") {
          return a[sorting.column].localeCompare(b[sorting.column]);
        }
        return b[sorting.column].localeCompare(a[sorting.column]);
      })
    : threads;

  return (
    <div className={`${inter.className} min-h-screen bg-gray-50 p-8`}>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 bg-primary text-white">
          <h1 className="text-3xl font-bold">Reddit Threads</h1>
        </div>

        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead
                onClick={() => handleSort("subreddit")}
                className="cursor-pointer"
              >
                <div className="flex items-center">
                  Subreddit
                  {sorting.column === "subreddit" &&
                    (sorting.direction === "asc" ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    ))}
                  {sorting.column !== "subreddit" && (
                    <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </TableHead>
              <TableHead className="w-[300px]">Title</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center">Upvote Ratio</TableHead>
              <TableHead className="text-center">Comments</TableHead>
              <TableHead className="text-right">Created Date</TableHead>
              <TableHead className="text-right">Profile</TableHead>
              <TableHead className="text-right">Checked</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedThreads.map((thread) => (
              <>
                <TableRow
                  key={thread.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell>
                    <Badge variant="secondary">r/{thread.subreddit}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="w-[500px] flex items-center justify-between">
                      <div className="flex-grow">
                        <div className="font-medium line-clamp-2">
                          {thread.title}
                        </div>
                        {thread.description && (
                          <p className="text-sm text-gray-500 line-clamp-1 whitespace-pre-wrap">
                            {thread.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => window.open(thread.url, "_blank")}
                          className="hover:bg-gray-100 rounded-full p-1"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-500" />
                        </button>
                        <button
                          onClick={() => toggleExpand(thread.id)}
                          className="hover:bg-gray-100 rounded-full p-1"
                        >
                          {expandedThreadId === thread.id ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </button>
                      </div>
                    </div>
                  </TableCell>
                  {/* Rest of the table cells remain the same */}
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <ChevronUp className="w-4 h-4 mr-1 text-green-500" />
                      {thread.score}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        thread.upvote_ratio > 0.7
                          ? "success"
                          : thread.upvote_ratio > 0.5
                          ? "warning"
                          : "destructive"
                      }
                    >
                      {(thread.upvote_ratio * 100).toFixed(0)}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-gray-500" />
                      {thread.num_comments}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {new Date(thread.created_utc).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="space-x-1">
                    {Object.entries(thread.profile)
                      .filter(
                        ([key, value]) => value !== "no" && key !== "others"
                      )
                      .map(([key, value]) => (
                        <Badge
                          key={key}
                          variant="secondary"
                          className="capitalize"
                        >
                          {key}
                        </Badge>
                      ))}
                    {thread.profile.others && (
                      <Badge variant="outline" className="text-gray-600">
                        {thread.profile.others}
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell className="text-right">
                    <ThreadStatusDropdown
                      initialChecked={thread.checked}
                      onStatusChange={(newStatus) =>
                        handleStatusChange(thread.id, newStatus)
                      }
                    />
                    {/* {thread.checked ? (
                      <Badge variant="success">Checked</Badge>
                    ) : (
                      <Badge variant="destructive">Unchecked</Badge>
                    )} */}
                  </TableCell>
                </TableRow>
                {expandedThreadId === thread.id && (
                  <TableRow>
                    <TableCell colSpan={8}>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-sm">
                            <h3 className="font-semibold mb-2">
                              Full Description
                            </h3>
                            {/* <p className="whitespace-pre-wrap"> */}
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {thread.description ||
                                  "No additional description available."}
                              </ReactMarkdown>
                            {/* </p> */}
                          </div>
                        </CardContent>
                      </Card>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>

        {threads.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No threads found
          </div>
        )}
      </div>
    </div>
  );
}
