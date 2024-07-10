export const runtime = "edge";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-8 mb-16 md:mb-8">
      <a
        href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`}
        className="z-10 text-2xl font-semibold text-white tracking-[10px] cursor-none hover:underline"
      >
        ABOUT
      </a>
      <a
        href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`}
        className="z-10 text-2xl font-semibold text-white tracking-[10px] cursor-none hover:underline"
      >
        FAQ
      </a>
      <a
        href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`}
        className="z-10 text-2xl font-semibold text-white tracking-[10px] cursor-none hover:underline"
      >
        CONTACT
      </a>
    </div>
  );
};

export default Footer;
