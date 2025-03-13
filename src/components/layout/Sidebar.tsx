import {
  ChevronLeft,
  ChevronRight,
  Database,
  LayoutDashboard,
  SubtitlesIcon,
  Shield,
  Target,
  Container,
  SquareUserRound,
  BookOpen,
  Home,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300   ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* sidebar toggle button */}
      <div className="h-full flex flex-col">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4 hover:bg-gray-800 flex items-center justify-end"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>

        {/* navigation items */}
        <nav className="flex flex-col space-y-4 mt-4">
          <Link
            href="/dashboard"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <Home className="w-6 " />
            {!isCollapsed && <span className="ml-3">Home</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <Database className="w-6 " />
            {!isCollapsed && <span className="ml-3">Authorization</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <Target className="w-6 " />
            {!isCollapsed && <span className="ml-3">Workforce</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <Container className="w-6 " />
            {!isCollapsed && <span className="ml-3">Supply Chain</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <SquareUserRound className="w-6 " />
            {!isCollapsed && <span className="ml-3">Training</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <BookOpen className="w-6 " />
            {!isCollapsed && (
              <span className="ml-3">Information management</span>
            )}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <SubtitlesIcon className="w-6 " />
            {!isCollapsed && <span className="ml-3">Reporting</span>}
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-4 hover:bg-gray-800"
          >
            <Shield className="w-6 " />
            {!isCollapsed && <span className="ml-3">Administration</span>}
          </Link>
        </nav>
      </div>
    </aside>
  );
};
