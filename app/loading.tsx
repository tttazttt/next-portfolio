import Spinner from "@/components/elements/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center bg-[#353535]">
      <Spinner />
    </div>
  );
};

export default loading;
