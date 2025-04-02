"use client"

import * as React from "react"
import { GripVertical } from "lucide-react"
import SplitPane from "react-split-pane"
import { cn } from "@/lib/utils"

const ResizablePanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    defaultSize?: number
    minSize?: number
    maxSize?: number
    split?: "vertical" | "horizontal"
  }
>(({ className, defaultSize = 50, minSize = 30, maxSize = 70, split = "vertical", ...props }, ref) => {
  return (
    <SplitPane
      split={split}
      defaultSize={defaultSize}
      minSize={minSize}
      maxSize={maxSize}
      className={cn("relative", className)}
      {...props}
    />
  )
})
ResizablePanel.displayName = "ResizablePanel"

export { ResizablePanel }
