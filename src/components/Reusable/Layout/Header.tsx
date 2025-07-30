"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma";
import { ArrowLeft } from "lucide-react";
import { BsLightningCharge } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import PurpleIcon from "../PurpleIcon";

// TODO: Stripe and Assistant Props
type Props = {
  user: User;
};

export const Header = ({ user }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full px-4 pt-10 sticky top-0 z-10 flex items-center justify-between flex-wrap gap-4 bg-background">
      {pathname.includes("pipeline") ? (
        <Button
          variant={"outline"}
          className="bg-primary/10 border border-border rounded-xl"
          onClick={() => router.push("/webinars")}
        >
          <ArrowLeft /> Back to Webinars
        </Button>
      ) : (
        <div className="px-4 py-2 flex items-center justify-center font-bold rounded-xl bg-background border border-border text-primary capitalize">
          {pathname.split("/")[1]}
        </div>
      )}

      {/* TODO: Build stripe subscription and create webinar button */}

      <div className="flex gap-6 items-center flex-wrap">
        <PurpleIcon>
          <BsLightningCharge size={20} />
        </PurpleIcon>
      </div>
    </div>
  );
};
