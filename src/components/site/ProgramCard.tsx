import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/programs";

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <Link
      to="/programs"
      hash={program.slug}
      className="group block rounded-3xl border border-border bg-card p-7 md:p-9 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)]"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs tracking-[0.2em] text-muted-foreground">
          0{index + 1}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl mt-8">{program.title}</h3>
      <p className="text-primary mt-2 text-sm">{program.tagline}</p>
      <p className="text-muted-foreground mt-5 leading-relaxed text-[15px]">
        {program.description}
      </p>
      <div className="mt-7 pt-6 border-t border-border/70 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span>For — {program.for.split(" ").slice(0, 3).join(" ")}…</span>
        <span>{program.duration}</span>
      </div>
    </Link>
  );
}
