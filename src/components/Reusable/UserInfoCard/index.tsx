import { Attendee } from "@/generated/prisma";
import { cn } from "@/lib/utils";

type Props = {
  customer: Attendee;
  tags: string[];
  className?: string;
};

const UserInfoCard = ({ customer, tags, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col w-fit text-primary p-3 pr-10 gap-3 rounded-xl border-[0.5px] border-border backdrop-blur-[20px] bg-background/10",
        className
      )}
    >
      <h3 className="text-xs font-semibold">{customer.name}</h3>
      <p className="text-sm">{customer.email}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-foreground rounded-md border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default UserInfoCard;
