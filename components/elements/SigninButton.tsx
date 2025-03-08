import Image from "next/image";
import React from "react";

const SigninButton = ({
  handleSignin,
  src,
  alt,
}: {
  handleSignin: () => void;
  src: string;
  alt: string;
}) => {
  return (
    <button onClick={handleSignin} className="hover:opacity-60 cursor-pointer">
      <Image src={src} alt={alt} width={70} height={50} />
    </button>
  );
};

export default SigninButton;
