"use client";
import SigninButton from "@/components/elements/SigninButton";
import Spinner from "@/components/elements/Spinner";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Signinpage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignin = async (provider: string) => {
    setLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error("Error during signin", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid place-items-center h-screen w-screen bg-[#282828]">
      <div className="flex flex-col justify-center  gap-10 p-5 bg-[#ebebeb] w-[70%] h-[400px] max-w-[500px] rounded-2xl shadow-2xl text-center">
        {loading ? (
          <div className="w-full h-full grid place-items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold">Login</h2>
            <div className="flex justify-center gap-10">
              <SigninButton
                handleSignin={() => handleSignin("google")}
                src={"/googleLogo.svg"}
                alt={"google"}
              />
              <SigninButton
                handleSignin={() => handleSignin("github")}
                src={"/githubLogo.svg"}
                alt={"github"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signinpage;
