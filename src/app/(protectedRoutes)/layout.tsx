import { onAuthenticateUser } from "@/actions/auth.actions";
import { Header } from "@/components/Reusable/Layout/Header";
import { Sidebar } from "@/components/Reusable/Layout/Sidebar";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = async ({ children }: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user) redirect("/sign-in");

  return (
    <div className="flex w-full min-h-screen">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex flex-col w-full h-screen overflow-auto px-4 container mx-auto scrollbar-hide">
        {/* HEADER */}
        <Header user={auth.user} />

        {/* CONTENT */}
        {children}
      </div>
    </div>
  );
};
export default ProtectedLayout;
