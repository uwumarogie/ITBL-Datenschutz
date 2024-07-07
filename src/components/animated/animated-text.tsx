import { AnimatePresence, motion } from "framer-motion";
import React, { CSSProperties } from "react";

export default function AnimatedText({
  children,
  className,
  style,
}: {
  children: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <AnimatePresence>
      <motion.span
        key={children}
        initial={{ opacity: 0, position: "absolute" }}
        animate={{
          opacity: 1,
          position: "relative",
          transition: { delay: 0.31 },
        }}
        exit={{ opacity: 0, transitionEnd: { position: "absolute" } }}
        transition={{ duration: 0.3 }}
        className={className}
        style={style}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}
