'use client'

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBoxes = React.memo(({ className }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const getBoxColor = () => {
    const random = Math.random();
    if (random < 0.4) {
      return "rgba(1, 101, 252, 0.1)";
    } else if (random < 0.7) {
      return "rgba(255, 255, 255, 0.02)";
    } else if (random < 0.9) {
      return "rgba(1, 101, 252, 0.05)";
    } else {
      return "rgba(1, 101, 252, 0.2)";
    }
  };

  return (
    <div
    className={cn(
        "absolute left-0 top-0 flex h-full w-full overflow-hidden bg-[#0f0f0f]",
        className
    )}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-8 h-8 border-l border-slate-700 relative"
          animate={{
            backgroundColor: getBoxColor(),
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: "rgba(1, 101, 252, 0.6)",
                transition: { duration: 0 },
            }}
              animate={{
                backgroundColor: getBoxColor(),
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
              key={`col` + j}
              className="w-8 h-8 border-r border-t border-slate-700 relative"
            >
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
});

BackgroundBoxes.displayName = "BackgroundBoxes";