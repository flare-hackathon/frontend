"use client";
import Disconnect from "@/components/magic/wallet-methods/Disconnect";
import { useMagicState } from "@/context/magic.provider";
import { useRouter } from "next/navigation";
import {
  Search,
  Bell,
  User,
  Bookmark,
  MoreHorizontal,
  MinusCircle,
} from "lucide-react";

const Dashboard = () => {
  const { token, setToken } = useMagicState();
  const router = useRouter();
  return (
    <>
      {token ? (
        <>
          {/* <Disconnect token={token as string} setToken={setToken} /> */}
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-[#2d2a3d] text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Curate AI</h1>
                <div className="ml-8 relative hidden sm:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-white/10 rounded-md py-2 pl-10 pr-4 w-[300px] text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm">
                  <span className="hidden sm:inline">Write</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.07 11.57a8.84 8.84 0 0 0-1.07-1.21L7.58 1.94A2.12 2.12 0 0 0 4.9 1.94L1.94 4.9a2.12 2.12 0 0 0 0 3l8.42 8.42c.4.39.82.76 1.21 1.07" />
                    <path d="m8 14.58 3.79-3.79a6 6 0 0 1 8.42 8.42l-3.79 3.79a2.12 2.12 0 0 1-3 0l-5.42-5.42a2.12 2.12 0 0 1 0-3Z" />
                    <path d="m18 9 3-3" />
                    <path d="M21 14v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1Z" />
                  </svg>
                </button>
                <button>
                  <Bell className="w-5 h-5" />
                </button>
                <button className="bg-white rounded-full p-1">
                  <User className="w-5 h-5 text-[#2d2a3d]" />
                </button>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex">
              {/* Feed Section */}
              <div className="flex-1 max-w-3xl mx-auto px-4 py-6">
                {/* Navigation Tabs */}
                <div className="flex border-b mb-6">
                  <button className="pb-2 px-4 font-medium border-b-2 border-black">
                    For You
                  </button>
                  <button className="pb-2 px-4 font-medium text-gray-500">
                    Latest
                  </button>
                </div>

                {/* Posts */}
                <div className="space-y-8">
                  {[1, 2, 3].map((post) => (
                    <article key={post} className="pb-8 border-b">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-sm">Author Name</span>
                      </div>

                      <h2 className="text-xl font-bold mb-3">
                        Post Headline with Tags
                      </h2>

                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-200 rounded-md w-[95%]"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-[85%]"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-[90%]"></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">
                            08/04/2025
                          </span>
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

              {/* Trending Topics Sidebar */}
              <div className="hidden lg:block w-80 p-6">
                <h3 className="text-xl font-bold mb-6">Trending Topics</h3>
                {/* Trending topics content would go here */}
              </div>
            </main>
          </div>
        </>
      ) : (
        router.push("/auth")
      )}
    </>
  );
};

export default Dashboard;
