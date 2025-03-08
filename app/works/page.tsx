"use client";

import NextList from "@/components/ui/NextList";
import ReactList from "@/components/ui/ReactList";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const WorksPage = () => {
  const [isOnNext, setIsOnNext] = useState(true);

  return (
    <div className="bg-[#907269] min-h-screen w-full flex flex-col pb-25 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 pt-30 pb-10 px-5">
          <h2 className="text-white text-5xl font-bold">Works</h2>
          {isOnNext ? (
            <button
              onClick={() => setIsOnNext(!isOnNext)}
              className="hover:opacity-40 cursor-pointer"
            >
              <Image src="react.svg" alt="React" width={50} height={50} />
            </button>
          ) : (
            <button
              onClick={() => setIsOnNext(!isOnNext)}
              className="hover:opacity-40 cursor-pointer"
            >
              <Image src="nextjs.svg" alt="Next.js" width={50} height={50} />
            </button>
          )}
        </div>
        {isOnNext ? <NextList /> : <ReactList />}
      </motion.div>
    </div>
  );
};

export default WorksPage;
