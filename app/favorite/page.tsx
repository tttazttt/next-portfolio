import FavItemList from "@/components/ui/FavItemList";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const FavoritePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("No session, redirecting to signin");
    return redirect("/signin");
  }

  return (
    <div className="bg-amber-200 w-full min-h-screen relative">
      <div
        className="bg-amber-200 absolute top-20 left-0 w-full pb-20"
        id="animationWrapper"
      >
        <FavItemList />
      </div>
    </div>
  );
};

export default FavoritePage;
