import { Link } from "@tanstack/react-router";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import vutorsLogo from "@/assets/vutors-logo.jpg";

const MAIN_SITE_URL = "https://vutors.com"; // Replace with your main website URL

const navItems = [
  { to: "/", label: "Home" },
  { to: "/papers", label: "Past Papers" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5 transition-base hover:opacity-80">
          <img src={vutorsLogo} alt="Vutors" className="h-10 w-10 rounded-lg object-cover shadow-soft" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-base hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer">
              Main Website <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer">
                Main Website <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
