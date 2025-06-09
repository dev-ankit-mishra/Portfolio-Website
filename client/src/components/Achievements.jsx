export default function Achievements() {
  return (
    <section
      className="scroll-mt-20 w-full min-h-screen bg-slate-700"
      id="Achievements"
    >
      <h1 className="text-3xl font-semibold text-white text-center py-6">
        Achievements
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-start px-6">
        {/* Milestones */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Milestones
          </h2>
          <div className="flex flex-col gap-8">
            {/* Leetcode */}
            <div className="flex flex-row items-center justify-evenly">
              <img
                className="rounded-2xl h-20 w-20 cursor-pointer"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAA3lBMVEUAAAD/////..."
                alt="LeetCode"
              />
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-xl font-medium text-white">
                  Solved More than 500 Questions on LeetCode
                </p>
              </div>
            </div>

            {/* Codeforces */}
            <div className="flex flex-row items-center justify-evenly">
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-xl font-medium text-white">
                  Rated Expert on Codeforces
                </p>
              </div>
              <img
                className="rounded-2xl h-20 w-40 cursor-pointer"
                src="https://codeforces.org/s/44706/images/codeforces-sponsored-by-ton.png"
                alt="Codeforces"
              />
            </div>

            {/* CodeChef */}
            <div className="flex flex-row items-center justify-evenly">
              <img
                className="rounded-2xl h-20 w-40 cursor-pointer"
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="Codechef"
              />
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-xl font-medium text-white">
                  Rated 5 Star Coder on Codechef
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-row items-center justify-evenly">
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-xl font-medium text-white">
                  Contributed 1000+ times on GitHub
                </p>
              </div>
              <img
                className="rounded-2xl h-20 w-20 cursor-pointer"
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="GitHub"
              />
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Certifications
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <img
                className="rounded-xl w-52 h-auto"
                src="./images/CoreJava.png"
                alt="Core Java"
              />
              <img
                className="rounded-xl w-52 h-auto"
                src="./images/Android.png"
                alt="Android"
              />
            </div>
            <div className="bg-slate-800 rounded-xl px-6 py-4">
              <p className="text-xl font-medium text-white text-center">
                Internshala Trainings: Core Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
