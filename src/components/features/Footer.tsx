import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

// Placeholder Logo component (same as before)
const Logo = () => (
  <Image 
    src="/sellwell-logo-black.svg"
    alt="Sellwell Logo"
    width={200}
    height={200}
  />
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const menu1Links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "Über uns" },
    { href: "/karriere", label: "Karriere" },
    { href: "#b2b", label: "Produktpartner" },
  ]

  const menu2Links = [
    { href: "/rechtliches/impressum", label: "Impressum" },
    { href: "/rechtliches/datenschutz", label: "Datenschutz" }
  ]

  const socialLinks = [
    { href: "https://instagram.com/kress_maximilian/", icon: Instagram, label: "Instagram" },
  ]

  return (
    <footer className="bg-white text-[#333] border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left Column: Logo, Description, Social, Copyright */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col items-start">
            <div className="mb-4 mt-[-25px]">
              <Link href="/" aria-label="Zur Startseite">
                <Logo />
              </Link>
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-xs font-semibold ml-3 mt-[-5px]">
                Nr. 1 D2D Vertrieb in Bayern
            </p>
            <div className="flex space-x-4 mb-6">
              <Link href="/karriere">
              <button className="header-btn">Jetzt bewerben</button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-auto">
              &copy; {currentYear} Sellwell Consulting GmbH. Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Right Columns: Structured Menus */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Menu 1 */}
            <div>
              <h5 className="text-sm font-semibold uppercase mb-4">Unternehmen</h5>
              <ul className="space-y-2">
                {menu1Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5 mt-5" />
                </Link>
              ))}
              </ul>
            </div>

            {/* Menu 2 */}
            <div>
              <h5 className="text-sm font-semibold uppercase mb-4">Rechtliches</h5>
              <ul className="space-y-2">
                {menu2Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

