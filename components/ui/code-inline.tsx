import * as React from "react"

import { cn } from "@/lib/utils"

type CodeInlineProps = React.HTMLAttributes<HTMLElement> & {
  as?: "span" | "div"
}

export function CodeInline({
  as: Component = "span",
  className,
  children,
  ...props
}: CodeInlineProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
