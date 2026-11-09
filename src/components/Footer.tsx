/** Quiet closing line. Sits at the bottom even on short viewports (mt-auto). */
export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm text-mist-500 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Gustavo Zeta — designed & built in Brazil
        </p>
        <p>Vite · React · Three.js · Tailwind CSS</p>
      </div>
    </footer>
  );
}
