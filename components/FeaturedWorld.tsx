export default function FeaturedWorld() {
  return (
    <section className="bg-[#0b0b0f] py-28 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/images/world-1.jpg"
            alt="featured world"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-amber-400 mb-4 text-sm">
            Featured World
          </p>

          <h2 className="text-4xl text-amber-100 mb-6">
            The Lantern Tavern
          </h2>

          <p className="text-zinc-400 leading-8">
            A handcrafted miniature world capturing the warmth
            of a medieval tavern at night, where wood, candlelight,
            and memory meet.
          </p>
        </div>

      </div>
    </section>
  );
}
