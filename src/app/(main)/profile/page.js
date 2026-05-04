import ProfileClient from "@/components/profile/ProfileClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function generateMetadata() {
  const session = await auth.api.getSession({
      headers: await headers(),
    });

  return {
    title: `${session?.user.name} Profile | SkillSphere`,
  description: "View and manage your SkillSphere profile and learning progress.",
  };
}

const ProfilePage = () => {
  
  return (
    <div className="min-h-[calc(100vh-301.4px)]">
      <ProfileClient />
    </div>
  );
};

export default ProfilePage;
