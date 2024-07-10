import Image from "next/image";
import MousePosition from "@/app/components/MousePosition";
import PlusTrackListing from "@/app/components/PlusTrackListing";
import SignTrackListing from "@/app/components/SignTrackListing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#48494b]">
      <PlusTrackListing />
      <div className="relative z-[10] flex place-items-center flex-col">
        <Image
          className="relative hue-rotate"
          src="/plus.svg"
          alt="PLUS Logo"
          width={600}
          height={600}
          priority
        />
      </div>
      <SignTrackListing />
      <MousePosition />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-2xl lg:grid-cols-5">
        <h2 className="mb-3 text-2xl font-semibold text-white">Plus</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">Autechre</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">Sign</h2>
      </div>
    </main>
  );
}
