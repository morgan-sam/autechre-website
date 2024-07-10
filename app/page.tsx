import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center">
        <Image
          className="relative hue-rotate"
          src="/plus.svg"
          alt="PLUS Logo"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3">
        <h2 className="mb-3 text-2xl font-semibold">Autechre</h2>
        <h2 className="mb-3 text-2xl font-semibold">Autechre</h2>
        <h2 className="mb-3 text-2xl font-semibold">Autechre</h2>
      </div>
    </main>
  );
}
