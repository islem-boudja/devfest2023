import Image from "next/image";
import { Navbar, Hero, SecondSection, ThirdSection } from "../components";
import FourthSection from "@/components/FourthSection";
import Services from "./../components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SecondSection />
      <Services />
    </main>
  );
}
