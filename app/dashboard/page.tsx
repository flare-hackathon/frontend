"use client";

import Disconnect from "@/components/magic/wallet-methods/Disconnect";
import { useMagicState } from "@/context/magic.provider";
import { usePostList } from "@/core/queries/post.query";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { token, setToken } = useMagicState();
  const router = useRouter();

  const { data, error } = usePostList();
  console.log(data, "data");
  console.log(error, "error");
  return (
    <>
      {token ? (
        <>
          This is dashboard, you have successfully logged in
          <Disconnect token={token as string} setToken={setToken} />
        </>
      ) : (
        (() => {
          router.push("/auth");
          return null;
        })()
      )}
    </>
  );
};

export default Dashboard;
