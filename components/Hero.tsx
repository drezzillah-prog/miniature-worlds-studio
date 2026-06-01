"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
 <div
  className="absolute inset-0 bg-cover bg-center scale-105"
  style={{
    backgroundImage:
      "url('/images/magnific-dark-tavern-fantasy-mini-1.jpg')",
  }}
/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-semibold text-amber-100 mb-6">
          Virena Atelier
        </h1>

        <p className="text-zinc-300 max-w-2xl mx-auto text-lg mb-8">
          Handcrafted miniature worlds inspired by history,
          fantasy, and forgotten places.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-full bg-amber-200 text-black font-medium hover:scale-105 transition">
            Explore Worlds
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20 text-zinc-200 hover:bg-white/10 transition">
            Commissions
          </button>
        </div>
      </motion.div>
    </section>
  );
}
