"use client";

import { HeroImage } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

const MainVisual = ({ heroImage }: { heroImage: HeroImage | null }) => {
  return (
    <div className="relative min-w-screen min-h-screen overflow-hidden">
      {heroImage && (
        <motion.div
          initial={{ scale: 1.5, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImage?.imageUrl ?? ""}
            alt={heroImage?.title ?? ""}
            fill
            style={{ objectFit: "cover" }}
            priority
            className=""
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-black opacity-30"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute inset-0 flex flex-col justify-center text-white px-10"
      >
        <h1
          className="text-left text-3xl md:text-5xl xl:text-6xl font-bold tracking-wider select-none"
          id="main-visual-title"
        >
          <p className="pb-4">I have such a desire</p>
          <p className="pb-4">to do everything,</p>
          <p className="pb-10">my head is bursting with it.</p>
          <p className="text-3xl text-[#ffaf04]">Claud Monet</p>
        </h1>
      </motion.div>
    </div>
  );
};

export default MainVisual;
