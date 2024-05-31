"use client";

import { DesktopNav } from "@/components/NavBar/DesktopNavigation/desktop-nav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/mobile-nav";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-background h-screen bg-fixed">
      <div className="flex justify-center  h-reduced-safari sm:h-full px-3 pt-1 sm:py-11 sm:pr-8 sm:pl-0 flex-col sm:flex-row">
        <div className="hidden sm:block">
          <DesktopNav />
        </div>

        <div className="sm:hidden">
          <MobileNav />
        </div>

        <div className="flex flex-row justify-center grow min-w-[220px] overflow-hidden">
          <div className="bg-white rounded-3xl py-6 w-full">
            <Transition>{children}</Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

function Transition({ children }: { children: React.ReactNode }) {
  const key = usePathname();
  return (
    <React.Fragment>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6 } }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", delay: 0.3 }}
          className="overflow-hidden"
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
}
