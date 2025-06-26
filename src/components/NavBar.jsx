import { LayoutDashboard, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16  border-b border-[#f0f0f0] px-32 flex items-center justify-between shadow-sm">
      <Link to="/" className="text-xl font-bold text-[#4860a5]">
        FareLens
      </Link>

      <div className="flex items-center gap-6 text-white">
        <div className="flex items-center gap-2 cursor-pointer transition">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>
        <Link
          to="/upload"
          className="flex items-center gap-2 cursor-pointer transition"
        >
          <Upload size={20} />
          <span>Upload</span>
        </Link>
      </div>
    </nav>
  );
}
