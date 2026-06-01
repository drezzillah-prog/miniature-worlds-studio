const collections = [
  "Historical Worlds",
  "Dark Fantasy",
  "Quiet Worlds",
  "Custom Commissions",
];

export default function CollectionsGrid() {
  return (
    <section className="bg-[#09090c] py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl text-center text-amber-100 mb-16">
          Choose a Realm
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {collections.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-12 hover:scale-[1.02] transition duration-500"
            >
              <h3 className="text-2xl text-zinc-100 mb-4">
                {item}
              </h3>

              <p className="text-zinc-400">
                Enter a carefully crafted miniature universe.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
