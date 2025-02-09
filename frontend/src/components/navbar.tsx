import Link from "next/link";
import { Home, BookOpen, GraduationCap, HelpCircle, Library } from "lucide-react";
import type React from "react"; // Import React

const Navbar = () => {
  return (
    <nav className="w-20 bg-white-100 shadow-lg flex flex-col items-center py-4 space-y-8 h-full">
      {/* Logo Section */}
      <div className="mb-4">
        <img
          src="/Logo.png" // Use the relative path to the public folder
          alt="Logo"
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-4">
        <NavButton href="/" icon={<Home size={24} />} label="Home" />
        <NavButton href="/books" icon={<BookOpen size={24} />} label="AI Books" />
        <NavButton href="/counsellor" icon={<GraduationCap size={24} />} label="AI Counselor" />
        <NavButton href="/doubts" icon={<HelpCircle size={24} />} label="Doubt Solver" />
        {/* <NavButton href="/library" icon={<Library size={24} />} label="Library" /> */}
      </div>
    </nav>
  );
};

const NavButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link href={href}>
    <button
      className="w-12 h-12 flex items-center justify-center text-orange-900 hover:text-orange-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
      title={label}
    >
      {icon}
    </button>
  </Link>
);

export default Navbar;
