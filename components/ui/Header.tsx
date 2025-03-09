"use client";

import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LogoutButton } from "../elements/LogoutButton";
import LiStyle from "./LiStyle";
import { motion } from "framer-motion";

const Header = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="w-full h-20 fixed z-100 flex justify-between items-center"
    >
      <ul className="flex space-between flex-wrap gap-x-8 h-16 items-center text-md sm:text-xl sm:gap-x-12 pl-10 font-bold text-white flex-7">
        <LiStyle href="/" section="Home" />
        <LiStyle href="/about" section="About" />
        <LiStyle href="/works" section="Works" />
        <LiStyle href="/contact" section="Contact" />
        <LiStyle href="/favorite" section="Favorite" />
      </ul>
      {session && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pr-5 cursor-pointer"
          >
            <Image
              src={session.user.image ?? ""}
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full hover:opacity-60"
            />
          </button>
          {isOpen && (
            <div
              ref={modalRef}
              className="absolute right-5 mt-2 w-50 bg-white shadow-xl rounded-lg p-4"
            >
              <p className="text-gray-700 font-semibold">
                {session.user?.name}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                {session.user?.email}
              </p>
              <button onClick={() => signOut()}>
                <LogoutButton className="text-2xl cursor-pointer hover:opacity-40" />
              </button>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Header;
