"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Spotlight } from "@/icons/Spotlight";
import { sidebarData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border border-border bg-background flex flex-col items-center justify-start gap-10">
      <div>
        <Spotlight size={24} />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
          {sidebarData.map((item) => (
            <TooltipProvider key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.link}
                    className={cn(
                      "flex items-center gap-2 cursor-pointer rounded-lg p-2",
                      pathname.includes(item.link) && "iconBackground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-4",
                        !pathname.includes(item.link) && "opacity-80"
                      )}
                    />
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <UserButton />
      </div>
    </div>
  );
};
