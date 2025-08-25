import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section - Avatar + Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://zruvlxdbpjavmxdbngho.supabase.co/storage/v1/object/public/images/users/profile.png"
            alt="Avatar"
            className="w-14 h-14 rounded-full ring-2 ring-indigo-300 shadow-md"
          />
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              Muhamad Hilman
            </h4>
            <p className="text-slate-500 text-sm">Fullstack Developer</p>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-5 text-slate-600">
          <a
            href="https://github.com/hilmanm011"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/muhamad-h-b5a22b17b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:muhamadhilman885@gmail.com"
            className="hover:text-indigo-600 transition"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-slate-400 pb-6">
        © {new Date().getFullYear()} Muhamad Hilman. All rights reserved.
      </div>
    </footer>
  );
}
