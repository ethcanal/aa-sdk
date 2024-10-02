"use client";

import { Authentication } from "@/components/configuration/Authentication";
import { Styling } from "@/components/configuration/Styling";
import { Inter, Public_Sans } from "next/font/google";
import { useState } from "react";
import { AuthCardWrapper } from "../components/preview/AuthCardWrapper";
import { CodePreview } from "../components/preview/CodePreview";
import { CodePreviewSwitch } from "../components/shared/CodePreviewSwitch";
import { TopNav } from "../components/topnav/TopNav";
import { useUser } from "@account-kit/react";
import { RenderUserConnectionAvatar } from "@/components/shared/user-connection-avatar/RenderUserConnectionAvatar";
import { MobileSplashPage } from "@/components/preview/MobileSplashPage";
import { cn } from "@/lib/utils";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [showCode, setShowCode] = useState(false);
  const user = useUser();
  return (
    <main className={`flex flex-col h-screen ${publicSans.className}`}>
      <TopNav />
      <div
        className={`flex flex-col flex-1 px-4 md:px-6 lg:px-10 py-4 md:py-6 w-full max-w-screen-2xl mx-auto overflow-visible overflow-x-hidden ${inter.className} md:overflow-hidden`}
      >
        <div className="hidden md:flex flex-1 gap-6 overflow-hidden">
          <div className=" flex-col w-[392px] bg-white border border-border rounded-lg p-6 overflow-y-auto scrollbar-none gap-10">
            <Authentication />
            <Styling />
          </div>

          <div className="flex flex-col flex-[2] basis-0 relative bg-white border border-border rounded-lg overflow-hidden">
            {/* Code toggle header */}
            <div
              className={`relative md:absolute h-auto px-6 pt-6 md:px-0 md:pt-0 md:h-7 md:top-6 flex items-center md:left-6 md:right-6 ${
                !user || showCode ? "justify-end" : "justify-between"
              }  z-10`}
            >
              {!showCode && user && <RenderUserConnectionAvatar />}
              <div className="flex gap-2 items-center">
                <div
                  className={cn(
                    " px-2 py-1 h-5 rounded text-xs font-semibold flex items-center justify-center",
                    showCode
                      ? "bg-[#F3F3FF] text-[#8B5CF6]"
                      : "bg-[#EFF4F9] text-[#374151]"
                  )}
                >
                  Code preview
                </div>
                <CodePreviewSwitch
                  checked={showCode}
                  onCheckedChange={setShowCode}
                />
              </div>
            </div>

            {/* Don't unmount when showing code preview so that the auth card retains its state */}
            <AuthCardWrapper className={showCode ? "hidden" : "mt-0"} />
            {showCode && <CodePreview />}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 md:hidden">
          {!user ? (
            <MobileSplashPage />
          ) : (
            <RenderUserConnectionAvatar />
            // Rest of Mint UI
          )}
        </div>
      </div>
    </main>
  );
}
