import type { BenchmarkRow, Dictionary } from "@/content";

/**
 * Measured comparison, presented without spin: the rows are ordered by latency
 * and this project sits wherever the numbers put it. The accent marks which row
 * is ours, not which row is best.
 */
export function BenchmarkTable({ rows, t }: { rows: BenchmarkRow[]; t: Dictionary }) {
  const columns = t.experience.benchmark.columns;

  return (
    <figure className="flex flex-col gap-4">
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                {columns.system}
              </th>
              <th scope="col" className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                {columns.architecture}
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint"
              >
                {columns.latency}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.system}
                className={`border-b border-line last:border-0 ${row.self ? "bg-accent-wash" : ""}`}
              >
                <th
                  scope="row"
                  className={`px-4 py-3 text-[0.85rem] font-medium ${row.self ? "text-accent" : "text-fg"}`}
                >
                  {row.system}
                </th>
                <td className="px-4 py-3 font-mono text-[0.72rem] text-muted">{row.architecture}</td>
                <td
                  className={`px-4 py-3 text-right font-mono text-[0.78rem] tabular-nums ${
                    row.self ? "text-accent" : "text-fg"
                  }`}
                >
                  {row.latency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="text-[0.8rem] leading-relaxed text-muted">{t.experience.benchmark.note}</figcaption>
    </figure>
  );
}
