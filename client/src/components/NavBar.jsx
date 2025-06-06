export default function NavBar() {
  return (
    <nav className="w-full h-14 flex items-center justify-between bg-slate-800 px-4 py-2 text-white">
      <div>
        <h4 className="font-bold">Ankit Mishra</h4>
      </div>

      <ul className="flex items-center gap-4">
        {["Home", "About", "Skills", "Projects", "Achievements", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-blue-400 font-medium transition"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <a href="https://github.com/dev-ankit-mishra">
        <img
          className="h-10 rounded-full"
          alt="Github"
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        />
      </a>
    </nav>
  );
}
