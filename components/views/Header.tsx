"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MobileSearchOverlay from "./MobileSearchOverlay";

const navLinks = [
  { label: "Pria", href: "/men" },
  { label: "Wanita", href: "/woman" },
  { label: "Anak", href: "/kids" },
  { label: "Sport", href: "/sport" },
  { label: "Collection", href: "/collection" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="w-full z-50 fixed top-0">
      <div className="bg-zinc-950 text-white h-[40px] flex items-center justify-center relative px-4 z-60">
        <p className="text-xs md:text-sm font-medium text-center">
          GRATIS ONGKIR MULAI Rp 500K DI JABODETABEK
        </p>
        <button
          aria-label="Next announcement"
          className="absolute right-4 md:static md:ml-4 text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b-2 border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 items-center h-[72px] md:h-[88px]">
            <div className="flex items-center justify-start">
              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className="text-[16px] font-medium text-zinc-950 hover:text-zinc-800 transition-colors relative z-10 block py-2"
                    >
                      {link.label}
                    </Link>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-950 origin-center"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    <div className="absolute bottom-1 left-0 w-full h-[2px] bg-zinc-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out" />
                  </li>
                ))}
              </ul>

              <div className="lg:hidden p-1 -ml-1 text-zinc-950 relative w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.button
                      key="close"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Close Menu"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  ) : (
                    <motion.button
                      key="menu"
                      onClick={() => setIsMobileMenuOpen(true)}
                      aria-label="Open Menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <Link href="/" className="flex items-center justify-center">
              <h2 className="text-2xl font-bold tracking-tight font-secondary">
                Flexmode
              </h2>
            </Link>

            <div className="flex items-center justify-end gap-5">
              <div className="hidden md:flex items-center relative">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="overflow-hidden mr-2 bg-zinc-100 rounded-full flex items-center"
                    >
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-transparent border-none focus:ring-0 text-sm px-4 py-1 outline-none"
                        onBlur={() => {}}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="cursor-pointer text-zinc-950 hover:text-zinc-800 transition-colors z-10"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Trigger */}
              <button
                aria-label="Search"
                onClick={() => setIsMobileSearchOpen(true)}
                className="md:hidden cursor-pointer text-zinc-950 hover:text-zinc-800 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                aria-label="My Account"
                className="hidden md:block cursor-pointer text-zinc-950 hover:text-zinc-800 transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              <button
                aria-label="Shopping Bag"
                className="cursor-pointer text-zinc-950 hover:text-zinc-800 transition-colors relative group"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-950 text-[9px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-b border-zinc-100 shadow-lg"
            >
              <div className="p-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-zinc-950 py-2 border-b border-zinc-50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="flex items-center gap-2 py-2 text-white font-medium">
                  <User className="w-5 h-5" />
                  <span>Login Your Account</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Search Overlay */}
      <MobileSearchOverlay
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
    </header>
  );
}
