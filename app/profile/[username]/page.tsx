import { Bookmark, MinusCircle, MoreHorizontal } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header is in layout.tsx */}

      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full border"></div>
            <h1 className="text-3xl font-bold">Username</h1>
          </div>

          {/* Profile Stats */}
          <div className="flex gap-6 border-b pb-4">
            <div className="text-sm">
              <span className="font-medium">Followers</span> 300
            </div>
            <div className="text-sm">
              <span className="font-medium">Following</span> 300
            </div>
            <div className="text-sm">
              <span className="font-medium">Library</span>
            </div>
          </div>

          {/* User Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Posts</h2>

            <div className="space-y-8">
              {[1, 2].map((post) => (
                <article key={post} className="pb-8 border-b">
                  <h3 className="text-xl font-bold mb-3">
                    Post Headline with Tags
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded-md w-[95%]"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-[85%]"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-[90%]"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">08/04/2025</span>
                      <div className="flex items-center gap-1">
                        <svg
                          width="20"
                          height="20"
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
                        <span className="text-sm text-gray-500">25</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button>
                        <MinusCircle className="w-5 h-5 text-gray-400" />
                      </button>
                      <button>
                        <Bookmark className="w-5 h-5 text-gray-400" />
                      </button>
                      <button>
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
