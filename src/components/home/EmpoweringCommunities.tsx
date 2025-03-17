"use client";

import React from "react";
import Link from "next/link";

const EmpoweringCommunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
          Are you a Kirana?
        </h2>

        <p className="text-xl md:text-2xl text-gray-800 font-medium text-center mt-4">
        We guarantee you're business will grow 10x faster by joining us.
        </p>

        <div className="flex justify-center mt-8">
  <Link href="/signup-form">
    <button className="bg-red-600  backdrop-blur-lg hover:bg-red-600  text-white text-xl px-6 py-3 rounded-full transition transform duration-200 ease-in-out border border-white/20 hover:scale-105">
      Join us for free
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default EmpoweringCommunities;
