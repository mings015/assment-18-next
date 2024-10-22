import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const UseLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/login");
  };

  return {
    handleLogout,
  };
};

export default UseLogout;
