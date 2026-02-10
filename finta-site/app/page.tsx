import Container from "@/components/container";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <Container>
          <Navbar />
          <Hero />
        </Container>
        <div className="relative w-full">
          <div className="h-px w-full absolute inset-0 bg-linear-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" >
            <div className="max-w-7xl mx-auto p-4"></div>
              <Image src="/hero-ui-v6.webp" alt="banner image" width={1920} height={1080} 
              className="rounded-xl w-full object-cover object-top-left border border-neutral-200 shadow-md mask-b-from-20% to-40% pointer-events-none"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
