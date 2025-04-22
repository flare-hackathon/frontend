"use client";

import { useState } from "react";
import { useMagic } from "@/hooks/MagicProvider";
import showToast from "@/utils/showToast";
import { RPCError, RPCErrorCode } from "magic-sdk";
import type { LoginProps } from "@/utils/types";
import { saveUserInfo } from "@/utils/common";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, ArrowRight, Lock } from "lucide-react";
import { Search, Bell, User } from "lucide-react";
import Link from "next/link";

const EmailOTP = ({ token, setToken }: LoginProps) => {
  const { magic } = useMagic();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoginInProgress, setLoginInProgress] = useState(false);

  const handleLogin = async () => {
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError(true);
    } else {
      try {
        setLoginInProgress(true);
        setEmailError(false);

        const token = await magic?.auth.loginWithEmailOTP({ email });
        console.log("token: " + token);
        const metadata = await magic?.user.getInfo();
        console.log("metadata: " + JSON.stringify(metadata));
        if (!token || !metadata?.publicAddress) {
          throw new Error("Magic login failed");
        }

        setToken(token);
        saveUserInfo(token, "EMAIL", metadata?.publicAddress);
        setEmail("");
      } catch (e) {
        console.log("login error: " + JSON.stringify(e));
        if (e instanceof RPCError) {
          switch (e.code) {
            case RPCErrorCode.MagicLinkFailedVerification:
            case RPCErrorCode.MagicLinkExpired:
            case RPCErrorCode.MagicLinkRateLimited:
            case RPCErrorCode.UserAlreadyLoggedIn:
              showToast({ message: e.message, type: "error" });
              break;
            default:
              showToast({
                message: "Something went wrong. Please try again",
                type: "error",
              });
          }
        }
      } finally {
        setLoginInProgress(false);
      }
    }
  };

  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 p-3 rounded-full">
                <Lock className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Welcome To Curate AI
            </h2>
            <p className="text-gray-600 text-center text-sm mb-8">
              Sign in to access your account, create a post and excess your
              wallet
            </p>
            <div className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder={token ? "Already logged in" : "Enter your email"}
                  value={email}
                  onChange={(e) => {
                    if (emailError) setEmailError(false);
                    setEmail(e.target.value);
                  }}
                  className="w-full h-12 pl-12 pr-4 text-gray-800 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  disabled={token.length > 0}
                />
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-500 mt-2 pl-4">
                  Please enter a valid email address
                </p>
              )}
              <Button
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={handleLogin}
                disabled={
                  isLoginInProgress ||
                  (token.length > 0 ? false : email.length === 0)
                }
              >
                {isLoginInProgress ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Continue with Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-600 text-center">
                By continuing, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Welcome To Curate AI
            </h2>

            <div className="space-y-8">
              <div className="border-b border-gray-300 pb-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent focus:outline-none text-base"
                  value={email}
                  onChange={(e) => {
                    if (emailError) setEmailError(false);
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-500 mt-2 pl-4">
                  Please enter a valid email address
                </p>
              )}

              <button
                className="  border border-gray-300 rounded-full px-6 py-2 flex items-center justify-between w-[250px]"
                onClick={handleLogin}
                disabled={
                  isLoginInProgress ||
                  (token.length > 0 ? false : email.length === 0)
                }
              >
                {isLoginInProgress ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Continue with Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              <div className="text-sm text-gray-600">
                <p>
                  By continuing, you agree to our{" "}
                  <Link href="#" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default EmailOTP;
