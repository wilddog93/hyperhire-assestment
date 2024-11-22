"use client"

import clsx from "clsx";
import { FC, useCallback, useMemo } from "react";

interface BubbleTextProps {
  children: React.ReactNode;
  className?: string;
  arrowPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const BubbleText: FC<BubbleTextProps> = ({ 
  children,
  className,
  arrowPosition = "bottom-left",
}) => {
  const bottomLeftArrow = (
    <div
      className="absolute -bottom-3 left-3 w-0 h-0 
      border-l-[8px] border-l-transparent
      border-t-[12px] border-t-white/20 md:border-t-white
      border-r-[8px] border-r-transparent"
    />
  );

  const bottomRightArrow = (
    <div
      className="absolute -bottom-3 right-3 w-0 h-0 
      border-l-[8px] border-l-transparent
      border-t-[12px] border-t-white/20 md:border-t-white
      border-r-[8px] border-r-transparent"
    />
  );

  const topLeftArrow = (
    <div
      className="absolute -top-3 left-3 w-0 h-0 
      border-l-[8px] border-l-transparent
      border-b-[12px] border-t-white/20 md:border-t-white
      border-r-[8px] border-r-transparent"
    />
  );

  const topRightArrow = (
    <div
      className="absolute -top-3 right-3 w-0 h-0 
      border-l-[8px] border-l-transparent
      border-b-[12px] border-t-white/20 md:border-t-white
      border-r-[8px] border-r-transparent"
    />
  );

  const arrows = {
    "top-left": topLeftArrow,
    "top-right": topRightArrow,
    "bottom-left": bottomLeftArrow,
    "bottom-right": bottomRightArrow,
  };

  return (
    <div className={clsx(
      "bg-background rounded-xl px-4 py-2 relative",
      className)
      }>
      <p className="text-lg md:text-2xl font-medium">{children}</p>
      {arrows[arrowPosition]}
    </div>
  );
};
