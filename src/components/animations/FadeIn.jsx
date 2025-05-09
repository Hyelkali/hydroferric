"use client"

import { useEffect, useRef } from "react"

const FadeIn = ({ children, delay = 0, duration = 0.6, className = "", ...props }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0")
              entry.target.classList.remove("opacity-0", "translate-y-10")
            }, delay * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`opacity-0 translate-y-10 transition-all ${className}`}
      style={{ transitionDuration: `${duration}s` }}
      {...props}
    >
      {children}
    </div>
  )
}

export default FadeIn
