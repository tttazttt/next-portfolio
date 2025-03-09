import Image from "next/image";
import React from "react";

const FavItem = ({
  imagePath,
  description,
}: {
  imagePath: string;
  description: string;
}) => {
  return (
    <div className="w-[160px] h-[180px]  bg-[white] shadow-xl border-t-12 border-b-12 border-white rounded-xl relative mx-auto">
      <div className="mx-auto p-5 relative w-[80%] aspect-square pb-[30%]">
        <Image
          src={imagePath}
          alt={description}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center font-bold pt-2">
        <p className="text-[clamp(9px,2vw,11px)]">{description}</p>
      </div>
    </div>
  );
};

export default FavItem;
