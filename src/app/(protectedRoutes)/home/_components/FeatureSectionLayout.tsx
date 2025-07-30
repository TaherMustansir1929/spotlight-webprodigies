import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  heading: string;
  link: string;
  children?: React.ReactNode;
  className?: string;
};

export const FeatureSectionLayout = ({
  heading,
  link,
  children,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "p-10 flex flex-col items-center justify-between gap-10 border border-border rounded-3xl bg-background-10",
        className
      )}
    >
      {children}

      <div className="w-full flex items-center justify-between gap-10 flex-wrap">
        <h3 className="sm:w-[70%] font-semibold text-3xl text-primary">
          {heading}
        </h3>
        <Link
          href={link}
          className="text-lg text-primary font-semibold flex items-center justify-center rounded-md opacity-50"
        >
          View <ArrowRightIcon className="ml-2 size-6" />
        </Link>
      </div>
    </div>
  );
};
