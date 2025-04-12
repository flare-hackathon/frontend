"use client";

import Login from "@/components/magic/Login";
import MagicDashboardRedirect from "@/components/ui/MagicDashboardRedirect";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useMagicState } from "../../context/magic.provider";
import { useRouter } from "next/navigation";

export default function Auth() {
  const { token, setToken } = useMagicState();
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");
  }, [setToken]);

  return (
    <>
      <ToastContainer />
      {process.env.NEXT_PUBLIC_MAGIC_API_KEY ? (
        !token ? (
          <Login token={token} setToken={setToken} />
        ) : (
          router.push("/dashboard")
        )
      ) : (
        <MagicDashboardRedirect />
      )}
    </>
  );
}
