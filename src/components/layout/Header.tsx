"use client";
import { Bell, LogOut, Shield, User, UserCog } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-8">
        <div className="flex h-16 items-center justify-between test-yash">
          <Link href="/" className="flex items-center ">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900 ">
              Export Control
            </span>
          </Link>

          {/* right side icons */}
          <div className="flex items-center space-x-4">
            <div>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>
            </div>

            {/* user profile dashboard */}
            <div className="relative">
              <button
                className="p-2 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <UserCog className="h-6 w-6" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <button
                    onClick={() => console.log("profile settings clicked")}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Profile Settings
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() =>
                      signOut({ callbackUrl: "http://localhost:3000/login" })
                    }
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
