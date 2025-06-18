export default function AchievementsSection() {
  const milestones = [
    {
      title: "400+",
      subtitle: "LeetCode Problems Solved",
      color: "text-yellow-400",
    },
    {
      title: "800+",
      subtitle: "GitHub Contributions (2024)",
      color: "text-green-400",
    },
  ];

  const certificates = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      date: "Apr 2024",
      link: "#",
      description: "Hands-on React and UI development experience.",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "Jan 2024",
      link: "#",
      description: "Mastered core algorithms and data structures in JS.",
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Udemy",
      date: "Mar 2024",
      link: "#",
      description: "Learned complex queries and analytics techniques.",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      date: "Feb 2024",
      link: "#",
      description: "Solid understanding of React components and state.",
    },
    {
      title: "Advanced CSS",
      issuer: "Scrimba",
      date: "May 2024",
      link: "#",
      description: "Mastered Flexbox, Grid, and responsive UI design.",
    },
  ];

  return (
    <section
      id="Achievements"
      className="px-6 py-10 bg-gradient-to-br from-[#0f172a] via-[#0b3c49] to-[#052e2c]


 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        🏆 Achievements & Certifications
      </h2>
      <div className="w-18 h-1 bg-blue-500 hover:w-32 transition-all duration-200 rounded-2xl mx-auto  mb-10" />

      {/* Milestones */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a]/80 backdrop-blur-sm border border-white/10 shadow-md rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-all "
          >
            <h3 className={`text-2xl font-bold ${m.color}`}>{m.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{m.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a]/80 backdrop-blur-sm border border-white/10 shadow-md rounded-2xl p-6  hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-400 mb-2">
              {cert.issuer} · {cert.date}
            </p>
            <p className="text-sm mb-3">{cert.description}</p>
            <a
              href={cert.link}
              className="text-blue-400 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
