import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--background)] text-white hover:bg-emerald-500 focus-visible:ring-emerald-500 border-1 border-[var(--background)]",
        outline:
          "bg-white text-emerald-500 border border-emerald-500 hover:bg-emerald-50 focus-visible:ring-emerald-500 border-1 border-white",
        ghost:
          "bg-transparent text-emerald-500 hover:bg-emerald-50 focus-visible:ring-emerald-500",
      },
      size: {
        default: "h-12",
        sm: "h-9",
        lg: "h-14 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
