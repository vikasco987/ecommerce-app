// // src/components/ui/button.tsx
// "use client";

// import * as React from "react";
// import { cn } from "@/lib/utils";

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, ...props }, ref) => (
//     <button
//       ref={ref}
//       className={cn(
//         "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition",
//         className
//       )}
//       {...props}
//     />
//   )
// );

// Button.displayName = "Button";



import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"
import { cn } from "../../../app/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
        ghost: "hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

