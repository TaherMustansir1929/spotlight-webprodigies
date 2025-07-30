"use client";

import { onBoardingSteps } from "@/lib/data";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const OnBoarding = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start">
      {onBoardingSteps.map((step, index) => (
        <Link href={step.link} key={index} className="flex items-center gap-2">
          <FaCheckCircle size={16} />
          <p className="text-base text-foreground">{step.title}</p>
        </Link>
      ))}
    </div>
  );
};
