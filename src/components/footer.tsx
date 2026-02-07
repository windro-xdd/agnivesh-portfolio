import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-serif font-bold tracking-tight">AGNIVESH SARANG</span>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Cinematographer & Photographer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://instagram.com" target="_blank" className="hover:text-white/60 transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white/60 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:hello@agniveshsarang.com" className="hover:text-white/60 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}