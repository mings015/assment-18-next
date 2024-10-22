import { Button } from "../ui/button";
import Link from "next/link";
import UseLogout from "@/hooks/useLogout";

const Header = () => {
  const { isLoggedIn, handleLogout } = UseLogout();

  return (
    <header className="px-4 py-4 bg-white border-b-4 border-black font-base">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-mainAccent">DemoApp</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
