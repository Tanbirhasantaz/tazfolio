import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="container min-h-screen flex items-center justify-center">

        <div className="text-center">

          <p className="text-blue-500 font-semibold mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-7xl font-bold mb-6">

            Alex <span className="gradient">Carter</span>

          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">

            Full Stack Developer &
            Cybersecurity Engineer

          </p>

          <div className="mt-10 flex gap-5 justify-center">

            <Link href="/projects">

              <button className="btn">

                View Projects

              </button>

            </Link>

            <Link href="/contact">

              <button className="border border-gray-700 px-7 py-3 rounded-xl">

                Contact

              </button>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
