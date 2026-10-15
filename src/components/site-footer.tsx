import { Link } from "@tanstack/react-router";
import vutorsLogo from "@/assets/vutors-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-gradient-subtle">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={vutorsLogo} alt="Vutors" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-base font-bold">Vutors — AKUEB Past Papers</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Free access to AKUEB question papers, marking schemes, and answer keys for Classes IX–XII.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/papers" className="hover:text-foreground">Past Papers</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About / Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            We do not host any files on this website. All PDFs are hosted on Google Drive
            and accessed via external links. AKUEB and related trademarks belong to their respective owners.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AKUEB Past Papers. All rights reserved.
      </div>
    </footer>
  );
}
