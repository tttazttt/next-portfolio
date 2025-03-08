import MainVisual from "@/components/ui/MainVisual";
import { authOptions } from "@/lib/auth";
import { fetchHeroImage } from "@/lib/FetchHeroImage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("No session, redirecting to signin");
    return redirect("/signin");
  }
  const heroImage = await fetchHeroImage("Impressionism");
  return <MainVisual heroImage={heroImage} />;
}
