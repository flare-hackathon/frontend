"use client";
import Disconnect from "@/components/magic/wallet-methods/Disconnect";
import { useMagicState } from "@/context/magic.provider";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { token, setToken } = useMagicState();
  const router = useRouter();
  return (
    <>
      {token ? (
        <>
          This is dashboard, you have successfully logged in
          <Disconnect token={token as string} setToken={setToken} />
        </>
      ) : (
        router.push("/auth")
      )}
    </>
  );
};

export default Dashboard;
