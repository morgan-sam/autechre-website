export const runtime = "edge";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-8 mb-8">
      <h2 className="z-10 text-2xl font-semibold text-white tracking-[10px] hover:underline">
        ABOUT
      </h2>
      <h2 className="z-10 text-2xl font-semibold text-white tracking-[10px] hover:underline">
        FAQ
      </h2>
      <h2 className="z-10 text-2xl font-semibold text-white tracking-[10px] hover:underline">
        CONTACT
      </h2>
    </div>
  );
};

export default Footer;
