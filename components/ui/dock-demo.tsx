import { Dock } from "@/components/ui/dock-two"
import {
  Home,
  LayoutGrid,
  CreditCard,
  MessageSquare,
  Zap,
  Phone
} from "lucide-react"

interface DockDemoProps {
  tooltipSide?: "top" | "bottom";
  onOpenContact?: () => void;
}

function DockDemo({ tooltipSide = "top", onOpenContact }: DockDemoProps) {
  const items = [
    { 
      icon: Home, 
      label: "Home",
      onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      icon: LayoutGrid, 
      label: "Work",
      onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      icon: Zap, 
      label: "Services",
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      icon: CreditCard, 
      label: "Pricing",
      onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      icon: MessageSquare, 
      label: "FAQ",
      onClick: () => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      icon: Phone, 
      label: "Book a Call",
      className: "bg-white/10 rounded-full ml-2",
      onClick: () => onOpenContact?.()
    }
  ]

  return (
    <div className="flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock items={items} tooltipSide={tooltipSide} />
      </div>
    </div>
  )
}

export { DockDemo }
