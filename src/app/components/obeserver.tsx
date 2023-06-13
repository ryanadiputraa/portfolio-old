"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

interface Props {
  children: ReactNode
  animationClass: string
  className: string
}

// Observer component render animation-class when component is visible on every page load
// animation-class won't be removed when children is not visible the same page load
export const Observer = ({ children, animationClass, className }: Props) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting ? setVisible(true) : null
      )
    })
    if (domRef.current) {
      observer.observe(domRef.current)
    }
    return () => {
      if (domRef.current) return observer.unobserve(domRef.current)
    }
  }, [])

  return (
    <div
      className={`${isVisible ? animationClass : ""} ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}
