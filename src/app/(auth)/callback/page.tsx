import { onAuthenticateUser } from "@/actions/auth.actions";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

const CallbackPage = async () => {
  const auth = await onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    redirect("/home");
  } else {
    redirect("/");
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Loader className="size-8 animate-spin" />
    </div>
  );
};
export default CallbackPage;
