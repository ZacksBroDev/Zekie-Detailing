import React from "react";
import { cn } from "@/app/components/ui/utils";

interface DetailButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function DetailButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: DetailButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-heading tracking-wider uppercase transition-all duration-300 overflow-hidden group",
        {
          // Primary (Red with glow)
          "bg-[#DC2626] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-[#EF4444]":
            variant === "primary",
          // Secondary (outlined)
          "border-2 border-white/20 text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]":
            variant === "secondary",
          // Ghost
          "text-white/70 hover:text-white hover:bg-white/5":
            variant === "ghost",
          // Sizes
          "px-6 py-2 text-sm rounded-md": size === "sm",
          "px-8 py-3 text-base rounded-lg": size === "md",
          "px-10 py-4 text-lg rounded-xl": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
