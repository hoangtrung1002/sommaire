import BgGradient from "@/components/bg-gradient";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
      {children}
    </section>
  );
};

export default AuthLayout;
