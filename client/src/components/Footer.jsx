import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-12 px-8 gap-6 text-lg tracking-wide  flex items-center justify-between absolute bottom-0 left-0 bg-neutral-950/90 backdrop-blur-md text-neutral-400 border-t border-neutral-800 z-50">
      <p className="text-sm">© 2025 Ankit Mishra Development.</p>
      <div className="flex justify-center items-center gap-6">
        <a href="https://github.com/dev-ankit-mishra" target="_blank">
          <FaGithub size={24} className="hover:text-gray-600 cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-mishra-44a179225/"
          target="_blank"
        >
          <FaLinkedin
            size={24}
            className="hover:text-gray-600 cursor-pointer"
          />
        </a>
      </div>
      <p className="text-sm">All rights reserved.</p>
    </footer>
  );
}
