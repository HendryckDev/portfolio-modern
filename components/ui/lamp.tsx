"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full h-20 pt-52 flex-col items-center justify-center",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "0" }}
          whileInView={{ opacity: 1, width: "100vw" }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-96 overflow-visible w-[30rem] bg-gradient-conic from-[#13003679] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "0" }}
          whileInView={{ opacity: 1, width: "100vw" }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-96 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#13003679] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-40 z-50 h-10 w-[100vw] bg-transparent opacity-100 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#130036] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "0rem" }}
          whileInView={{ width: "100vw" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-40 h-0.5 w-[0rem] -translate-y-[12rem] bg-[#130036] "
        ></motion.div>

      </div>

      <div className="relative -top-36 z-50 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};
