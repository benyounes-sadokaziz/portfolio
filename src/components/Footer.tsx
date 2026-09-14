import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile, type Dictionary } from "@/content";
import { Container } from "./ui/Backdrop";

export function Footer({ t }: { t: Dictionary }) {
  const links = [
    { href: profile.github, label: "GitHub", Icon: GithubIcon, external: true },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ];

  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-fg">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.72rem] text-muted">{t.hero.role}</p>
          </div>

          <ul className="flex flex-wrap gap-5">
            {links.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center gap-2 text-[0.8rem] text-muted transition-colors hover:text-fg"
                >
                  <Icon size={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.68rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
          </span>
          <span>{t.footer.credit}</span>
        </div>
      </Container>
    </footer>
  );
}
