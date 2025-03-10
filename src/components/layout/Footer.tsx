import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-8">
        <div className="flex -items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-sm text-gray-500">
              Export Control System
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900">
                About
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="hover:text-gray-900"></a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
