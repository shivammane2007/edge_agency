import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface DockProps {
  className?: string
  tooltipSide?: "top" | "bottom"
  items: {
    icon: LucideIcon
    label: string
    onClick?: () => void
  }[]
}

interface DockIconButtonProps {
  icon: LucideIcon
  label: string
  tooltipSide?: "top" | "bottom"
  onClick?: () => void
  className?: string
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, tooltipSide = "top", onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "relative group p-1.5 md:p-3 rounded-lg",
          "hover:bg-secondary transition-colors",
          className
        )}
      >
        <Icon className="w-5 h-5 text-foreground" />
        <span className={cn(
          "absolute left-1/2 -translate-x-1/2",
          tooltipSide === "top" ? "-top-10" : "top-full mt-3",
          "px-2 py-1 rounded text-xs",
          "bg-popover text-popover-foreground border border-border/50",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity whitespace-nowrap pointer-events-none shadow-xl"
        )}>
          {label}
        </span>
      </motion.button>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className, tooltipSide = "top" }, ref) => {
    return (
      <div ref={ref} className={cn("relative flex items-center justify-center", className)}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className={cn(
            "flex items-center gap-0 md:gap-1 p-1 md:p-2 rounded-2xl",
            "backdrop-blur-xl border border-white/10 shadow-2xl",
            "bg-black/40",
            "hover:shadow-white/5 transition-shadow duration-500"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} tooltipSide={tooltipSide} {...item} />
          ))}
        </motion.div>
      </div>
    )
  }
)
Dock.displayName = "Dock"

export { Dock }
