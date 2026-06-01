export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold tracking-wide text-amber-200">
          Virena Atelier
        </h1>

        <div className="flex gap-8 text-sm text-zinc-300">
          <button>Worlds</button>
          <button>Atelier</button>
          <button>Commissions</button>
        </div>
      </div>
    </nav>
  );
}
