"use client"

import { useEffect, useRef } from "react"

const StaggerFade = ({ children, staggerDelay = 0.1, initialDelay = 0, className = "", ...props }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const childElements = containerRef.current.children

          Array.from(childElements).forEach((child, index) => {
            setTimeout(
              () => {
                child.classList.add("opacity-100", "translate-y-0")
                child.classList.remove("opacity-0", "translate-y-10")
              },
              initialDelay * 1000 + index * staggerDelay * 1000,
            )
          })

          observer.unobserve(containerRef.current)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)

      // Set initial state for children
      const childElements = containerRef.current.children
      Array.from(childElements).forEach((child) => {
        child.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-500")
      })
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [initialDelay, staggerDelay])

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  )
}

export default StaggerFade
