"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-w-full min-h-screen bg-[#3a373c] grid place-items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-[70%] max-w-[600px] h-[66%] py-10 px-5 bg-[#ebebebf3] rounded-2xl shadow-2xl flex flex-col gap-3 justify-between items-center absolute z-10"
      >
        <div>
          <Image
            src="/az.jpeg"
            alt="profile-image"
            width={150}
            height={150}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="font-bold text-sm sm:text-xl flex flex-col gap-2">
          <h1>Kazuki Ito</h1>
          <h2>age: 36</h2>
          <h2>location: Kawasaki→Nagoya→Osaka→Tokyo</h2>
          <h2>私立南山高校男子部卒業</h2>
          <h2>青山学院大学経済学部経済学科中退</h2>
          <h2>React,TypeScript,Next.js,TailwindCSS</h2>
        </div>
        <ul className="flex gap-8 items-center">
          <li className="hover:opacity-40">
            <Link href="https://github.com/tttazttt">
              <Image src="githubLogo.svg" alt="github" width={30} height={30} />
            </Link>
          </li>
          <li className="hover:opacity-40">
            <Link href="https://x.com/fox_inthehell">
              <Image src="/xLogo.png" alt="x" width={30} height={30} />
            </Link>
          </li>
          <li className="hover:opacity-40">
            <Link href="">
              <Image
                src="Instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li className="hover:opacity-40">
            <Link href="https://www.youtube.com/@afoxinthehell">
              <Image src="/youtube.png" alt="youtube" width={30} height={30} />
            </Link>
          </li>
        </ul>
      </motion.div>
      <div
        className="absolute text-white text-[100px] bottom-5 left-10 z-5 select-none"
        id="about-text"
      >
        <p>Everything is</p>
        <p>kaleidoscopical.</p>
        <p>Even a stone.</p>
        <p className="text-[50px] text-[#ffaf04]">Claude Monet</p>
      </div>
    </div>
  );
};

export default AboutPage;
