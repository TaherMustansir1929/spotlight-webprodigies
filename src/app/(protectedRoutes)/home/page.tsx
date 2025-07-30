import { Upload, Webcam } from "lucide-react";
import { OnBoarding } from "./_components/OnBoarding";
import { FeatureCard } from "./_components/FeatureCard";
import { FeatureSectionLayout } from "./_components/FeatureSectionLayout";
import Image from "next/image";
import { potentialCustomer } from "@/lib/data";
import UserInfoCard from "@/components/Reusable/UserInfoCard";

const HomePage = () => {
  return (
    <div className="w-full h-full mx-auto">
      <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-14">
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-primary">
            Get maximum Conversion from your webinars
          </h2>
          <OnBoarding />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-content-center">
          <FeatureCard
            Icon={<Upload className="size-10" />}
            heading="Browse or drag a pre-recorded webinar file"
            link="#"
          />
          <FeatureCard
            Icon={<Webcam className="size-10" />}
            heading="Browse or drag a pre-recorded webinar file"
            link="/webinars"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-background-10">
        <FeatureSectionLayout
          heading="See how far along are your potential customers"
          link="/lead"
        >
          <div className="p-5 flex flex-col gap-4 items-start border border-border rounded-xl backdrop-blur-3xl">
            <div className="w-full flex items-center justify-between gap-3">
              <p className="text-primary font-semibold text-sm">
                Conversations
              </p>
              <p className="text-xs text-muted-foreground font-normal">50</p>
            </div>

            <div className="flex flex-col gap-4 items-start">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  key={index}
                  src={"/featurecard.png"}
                  alt="Info Card"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </FeatureSectionLayout>

        <FeatureSectionLayout
          heading="See the list of your current customers"
          link="/pipeline"
        >
          <div className="relative w-full h-full flex items-center justify-center gap-4 flex-wrap">
            {potentialCustomer.slice(0, 2).map((customer, index) => (
              <UserInfoCard
                key={index}
                customer={customer}
                tags={customer.tags}
              />
            ))}

            <Image
              src={"/glowCard.png"}
              alt="Info-Card"
              width={350}
              height={350}
              className="absolute object-cover rounded-xl px-5 mb-28 hidden sm:flex"
            />
          </div>
        </FeatureSectionLayout>
      </div>
    </div>
  );
};
export default HomePage;
