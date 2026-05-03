"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Loading from "@/app/loading";

const ProfileClient = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <Loading></Loading>;
  if (!user) return <p className="p-10">Please login</p>;

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-5">

        {/* User Image */}
        <div className="flex flex-col items-center">
          <Image
            src={user.image}
            alt={user.name}
            width={90}
            height={90}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold mt-2">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        {/* User Info */}
        <div className="text-sm space-y-2">
          <p><b>ID:</b> {user.id}</p>
          <p>
            <b>Email Verified:</b>{" "}
            {user.emailVerified ? "Yes" : "No"}
          </p>
        </div>

        {/* Update Button */}
        <Link href="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative btn w-full bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 font-bold overflow-hidden shadow-xl"
                  suppressHydrationWarning
                >
                  <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

                  <span className="relative z-10">Update Profile</span>
                </motion.button>
              </Link>

      </div>
    </div>
  );
};

export default ProfileClient;