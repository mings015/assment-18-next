import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return children;
};

export default ProtectRoute;
