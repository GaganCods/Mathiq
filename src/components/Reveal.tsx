import React from "react";
import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  spring?: boolean;
  className?: string;
  key?: React.Key;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  direction = "up",
  duration = 0.6,
  spring = false,
  className = "",
  ...props
}: RevealProps) => {
  const getVariants = (): any => {
    let y = 0, x = 0;
    if (direction === "up") y = 40;
    if (direction === "down") y = -40;
    if (direction === "left") x = 40;
    if (direction === "right") x = -40;

    return {
      hidden: { opacity: 0, y, x, filter: "blur(4px)" },
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: spring ? [0.17, 0.67, 0.83, 1] : "easeOut",
          type: spring ? "spring" : "tween",
        }
      }
    };
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }} className={className} {...props}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  key?: React.Key;
}

export const StaggerContainer = ({ children, delayChildren = 0.1, staggerChildren = 0.1, className = "", ...props }: StaggerContainerProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export const StaggerItem = ({ children, className = "", ...props }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: "easeOut" }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
