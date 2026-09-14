import { ChevronDown } from "lucide-react";
import type { ArchLayer } from "@/content";

/**
 * Renders a system as ordered layers of named nodes. Layers flow downward, so
 * the diagram reads as a request path; the focus layer is where the system's
 * core idea lives and is the only one given the accent.
 */
export function ArchitectureDiagram({
  layers,
  labels,
  compact = false,
}: {
  layers: ArchLayer[];
  labels: Record<string, string>;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "flex flex-col gap-1" : "flex flex-col gap-2"}>
      {layers.map((layer, index) => (
        <div key={layer.key} className="flex flex-col">
          <div
            className={`grid gap-3 rounded-lg border px-3 py-2.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4 ${
              layer.focus ? "border-accent/35 bg-accent-wash" : "border-line bg-surface"
            }`}
          >
            <span className={`font-mono text-[0.65rem] uppercase tracking-[0.14em] ${layer.focus ? "text-accent" : "text-faint"} sm:pt-1`}>
              {labels[layer.key] ?? layer.key}
            </span>

            <ul className="flex flex-wrap gap-1.5">
              {layer.nodes.map((node) => (
                <li
                  key={node}
                  className={`rounded border px-2 py-1 font-mono text-[0.7rem] ${
                    layer.focus ? "border-accent/30 text-fg" : "border-line text-muted"
                  } ${compact ? "text-[0.65rem]" : ""}`}
                >
                  {node}
                </li>
              ))}
            </ul>
          </div>

          {index < layers.length - 1 ? (
            <div className="flex justify-center py-0.5" aria-hidden>
              <ChevronDown size={compact ? 11 : 13} className="text-faint" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
