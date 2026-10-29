import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Serve } from "@/components/Serve";
import { House } from "@/components/House";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-bold focus:text-pine"
      >
        Skip to content
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Serve />
        <House />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
