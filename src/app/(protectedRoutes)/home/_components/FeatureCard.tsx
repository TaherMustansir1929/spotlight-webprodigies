import Link from "next/link";

type Props = {
  Icon: React.ReactNode;
  heading: string;
  link: string;
};

export const FeatureCard = ({ Icon, heading, link }: Props) => {
  return (
    <Link
      href={link}
      className="px-8 py-6 flex flex-col items-start justify-center gap-14 rounded-xl border border-border bg-secondary backdrop-blur-xl"
    >
      {Icon}
      <p className="text-xl text-primary font-semibold">{heading}</p>
    </Link>
  );
};
