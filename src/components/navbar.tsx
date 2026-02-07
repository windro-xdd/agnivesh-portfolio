"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Work", href: "/photos" },
  { name: "Films", href: "/videos" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)
  const [bg, setBg] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    
    if (latest > 50) {
      setBg(true)
    } else {
      setBg(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300",
        bg ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          AGNIVESH SARANG
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] hover:text-white/60 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 md:hidden flex flex-col gap-6 items-center shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}