import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
};

export const Spotlight = ({ size, className }: Props) => {
  return (
    <div>
      <Image
        src={"/logo.svg"}
        width={size || 16}
        height={size || 16}
        alt="Spotlight Logo"
        className={`${className}`}
      />
    </div>
  );
};
