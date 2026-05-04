import UpdateProfileClient from "@/components/profile/UpdateProfileClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const session = await auth.api.getSession({
      headers: await headers(),
    });

  return {
    title: `Update Profile ${session?.user.name} | SkillSphere`,
    description:
      `${session?.user.name} Update your personal information, avatar, and account settings.`,
  };
}

const UpdatePage = () => {
  return (
    <div className="min-h-[calc(100vh-301.4px)]">
      <UpdateProfileClient />
    </div>
  );
};

export default UpdatePage;
