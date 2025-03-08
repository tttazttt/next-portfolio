"use client";

import { sendGmail } from "@/actions/contact";
import { SendButton } from "@/components/elements/SendButton";
import Spinner from "@/components/elements/Spinner";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [statusBoolean, setStatusBoolean] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSending(true);

    const res = await sendGmail(formData);
    setStatus(res.message);
    setStatusBoolean(res.success);

    setIsSending(false);
  }

  return (
    <div className="bg-[#a8c5bb] min-w-full h-screen grid place-items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-[#dddddde9] w-[90%] max-w-[600px] rounded-3xl shadow-lg p-10 flex flex-col gap-9 z-100 absolute"
      >
        {isSending ? (
          <div className="w-full h-full grid place-items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center text-[#ffaf04]">
              Contact
            </h2>

            {status && (
              <p
                className={`text-lg font-bold ${
                  statusBoolean ? "text-[#8dcb8d]" : "text-[#fd7070]"
                } text-center`}
              >
                {status}
              </p>
            )}

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                await handleSubmit(formData);
              }}
              className="flex flex-col gap-10"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-[#a8c5bb] w-full p-2 rounded-md focus:outline-[#568856] shadow-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="bg-[#a8c5bb] w-full p-2 rounded-md focus:outline-[#568856] shadow-md"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="message"
                className="bg-[#a8c5bb] w-full p-2 rounded-md focus:outline-[#568856] shadow-md"
                required
              />
              <button
                type="submit"
                className="mx-auto hover:opacity-40 cursor-pointer"
              >
                <SendButton className="text-5xl text-[#90ae90]" />
              </button>
            </form>
          </>
        )}
      </motion.div>
      <div
        className="absolute text-white text-[100px] bottom-0 left-10 select-none"
        id="contact-text"
      >
        <p>if you need</p>
        <p>Please</p>
        <p>
          contact <span className="text-[#ffaf04]">me</span>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
