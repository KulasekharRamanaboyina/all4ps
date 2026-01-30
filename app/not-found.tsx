import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#800080] mb-4">404</h1>

      <p className="text-lg text-gray-300 mb-6">
        Page not found.
        <br />
        Looks like you took a wrong turn.
      </p>

      <Link
        href="/"
        className="bg-[#800080] hover:bg-purple-700 px-6 py-3 font-bold transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
