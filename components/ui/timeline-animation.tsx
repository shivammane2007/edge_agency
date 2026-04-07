'use client'

import React from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface TimelineContentProps {
  children: React.ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLElement>
  customVariants?: Variants
  className?: string
  as?: React.ElementType
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = 'div',
}) => {
  const Component = motion[as as keyof typeof motion] as any
  const fallbackRef = React.useRef(null)
  const targetRef = timelineRef || fallbackRef
  const isInView = useInView(targetRef, { once: true, margin: "-100px" })

  return (
    <Component
      ref={fallbackRef}
      custom={animationNum}
      variants={customVariants || defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </Component>
  )
}
