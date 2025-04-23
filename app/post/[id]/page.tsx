import { Bookmark, MoreHorizontal, Share } from "lucide-react";

export default function PostDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header is in layout.tsx */}

      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
        <article className="space-y-6">
          <h1 className="text-4xl font-bold">Post Headline with Tags</h1>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Author Name</span>
              <button className="text-sm px-3 py-1 border rounded-full hover:bg-gray-100">
                Follow
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Jan 04 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <hr className="my-6" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M11 13h6"></path>
                <path d="M11 9h10"></path>
                <path d="M3 17h10"></path>
                <path d="M3 13h4"></path>
                <path d="M3 9h4"></path>
              </svg>
              <span>25</span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>3</span>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <button>
                <Share className="w-5 h-5 text-gray-500" />
              </button>
              <button>
                <Bookmark className="w-5 h-5 text-gray-500" />
              </button>
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="space-y-4 py-4">
            {/* Post content placeholders */}
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-4 bg-gray-200 rounded-md ${i % 3 === 0 ? "w-[95%]" : i % 3 === 1 ? "w-[85%]" : "w-[90%]"}`}
                ></div>
              ))}
          </div>

          <div className="pt-8 border-t">
            <h3 className="text-xl font-medium mb-4">Score this post</h3>
            <div className="border rounded-full flex items-center px-4 py-2">
              <span className="text-gray-500 mr-2">Amount</span>
              <input
                type="text"
                className="flex-1 focus:outline-none"
                placeholder="Enter amount"
              />
              <span className="text-gray-400">Avl Amount 200</span>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
