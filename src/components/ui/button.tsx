import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:shadow-lg active:scale-95 transform google-hover-lift relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "text-primary-foreground shadow-lg hover:shadow-xl active:shadow-lg gov-button-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95 shadow-lg hover:shadow-xl active:shadow-lg",
        outline:
          "border-2 border-primary/30 bg-transparent hover:bg-primary/8 hover:text-primary-600 hover:border-primary/60 active:bg-primary/12 shadow-md hover:shadow-lg backdrop-blur-sm",
        secondary:
          "bg-white/90 backdrop-blur-sm border-2 border-primary/20 text-primary-700 hover:bg-primary/5 hover:border-primary/40 active:bg-primary/10 shadow-md hover:shadow-lg",
        ghost: "hover:bg-primary/8 hover:text-primary-600 active:bg-primary/5 rounded-xl",
        link: "text-primary underline-offset-4 hover:underline active:scale-95 rounded-xl",
      },
      size: {
        default: "h-10 px-4 py-2.5 text-sm",
        sm: "h-8 rounded-lg px-3 py-1.5 text-xs font-medium",
        lg: "h-12 rounded-xl px-6 py-3 text-base font-semibold",
        icon: "h-10 w-10 rounded-xl",
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
