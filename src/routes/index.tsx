import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NepalMC — Minecraft Server" },
      { name: "description", content: "Join NepalMC: Survival, SkyBlock, BedWars and more. Meet the staff, join our Discord, visit the store." },
      { property: "og:title", content: "NepalMC — Minecraft Server" },
      { property: "og:description", content: "Survival, SkyBlock, BedWars and more on NepalMC." },
    ],
  }),
  component: Index,
});

const IP = "play.nepalmc.net";
const DISCORD = "https://discord.gg/nepalmc";
const STORE = "https://store.nepalmc.net";

const modes = [
  { icon: "⛏️", name: "Survival", desc: "Classic survival with land claims, jobs and a player economy." },
  { icon: "🏝️", name: "SkyBlock", desc: "Start on a tiny island in the sky and build an empire." },
  { icon: "🛏️", name: "BedWars", desc: "Protect your bed, destroy theirs. Fast team PvP." },
  { icon: "⚔️", name: "KitPvP", desc: "Pick a kit and battle it out in custom arenas." },
  { icon: "🏔️", name: "Himalaya SMP", desc: "Seasonal SMP set in a custom Himalayan world." },
  { icon: "🎉", name: "Minigames", desc: "Parkour, Spleef, Build Battle and weekly events." },
];

const staff = [
  { name: "Notch", role: "Owner", color: "text-primary" },
  { name: "Jeb_", role: "Co-Owner", color: "text-primary" },
  { name: "Dinnerbone", role: "Admin", color: "text-secondary" },
  { name: "Grumm", role: "Developer", color: "text-secondary" },
  { name: "Alex", role: "Moderator", color: "text-foreground" },
  { name: "Steve", role: "Helper", color: "text-muted-foreground" },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(IP); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div className="min-h-screen">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-pixel text-sm text-secondary">NEPAL<span className="text-primary">MC</span></a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#modes" className="hover:text-foreground">Game Modes</a>
            <a href="#staff" className="hover:text-foreground">Staff</a>
            <a href={DISCORD} target="_blank" rel="noreferrer" className="hover:text-foreground">Discord</a>
          </div>
          <a href={STORE} target="_blank" rel="noreferrer" className="pixel-btn bg-secondary px-4 py-2 font-pixel text-[10px] text-secondary-foreground">STORE</a>
        </div>
      </nav>

      <header className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={hero} alt="Blocky Himalayan mountains at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        <div className="relative px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-secondary">Nepal's #1 Minecraft Server</p>
          <h1 className="font-pixel text-5xl leading-tight text-foreground drop-shadow-[0_6px_0_rgba(0,0,0,0.5)] md:text-8xl">
            NEPAL<span className="text-primary">MC</span>
          </h1>
          <button onClick={copy} className="mt-10 inline-flex items-center gap-3 rounded border border-border bg-card/80 px-6 py-4 font-pixel text-xs backdrop-blur hover:border-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            {copied ? "COPIED!" : IP}
          </button>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={DISCORD} target="_blank" rel="noreferrer" className="pixel-btn bg-primary px-6 py-4 font-pixel text-xs text-primary-foreground">JOIN DISCORD</a>
            <a href={STORE} target="_blank" rel="noreferrer" className="pixel-btn bg-secondary px-6 py-4 font-pixel text-xs text-secondary-foreground">VISIT STORE</a>
          </div>
        </div>
      </header>

      <section id="modes" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center font-pixel text-2xl md:text-3xl">GAME <span className="text-secondary">MODES</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((m) => (
            <div key={m.name} className="card-glow rounded border border-border bg-card p-6">
              <div className="mb-4 text-4xl">{m.icon}</div>
              <h3 className="mb-2 font-pixel text-sm text-secondary">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="staff" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-pixel text-2xl md:text-3xl">OUR <span className="text-primary">STAFF</span></h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {staff.map((s) => (
              <div key={s.name} className="card-glow rounded border border-border bg-card p-4 text-center">
                <img src={`https://mc-heads.net/avatar/${s.name}/96`} alt={s.name} loading="lazy" width={96} height={96} className="mx-auto mb-3 rounded [image-rendering:pixelated]" />
                <p className="font-semibold">{s.name}</p>
                <p className={`mt-1 font-pixel text-[9px] ${s.color}`}>{s.role.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-pixel text-xl md:text-2xl">READY TO <span className="text-secondary">PLAY?</span></h2>
        <p className="mt-4 text-muted-foreground">Join thousands of players in our Discord community.</p>
        <a href={DISCORD} target="_blank" rel="noreferrer" className="pixel-btn mt-8 inline-block bg-primary px-8 py-4 font-pixel text-xs text-primary-foreground">JOIN DISCORD</a>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 NepalMC. Not affiliated with Mojang or Microsoft.
      </footer>
    </div>
  );
}
