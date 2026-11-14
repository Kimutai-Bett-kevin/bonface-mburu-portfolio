/** Framed preview of a financial statement. Figures are intentionally redacted for confidentiality. */
export function ReportFrame({ statement, entity, lines }: { statement: string; entity: string; lines: string[] }) {
  return (
    <div className="border border-border bg-background p-3 shadow-soft">
      <div className="border border-border bg-background p-6">
        <div className="border-b-2 border-primary pb-3 text-center">
          <p className="font-display text-lg italic text-muted-foreground">{entity}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{statement}</p>
        </div>
        <table className="mt-4 w-full text-xs">
          <tbody>
            {lines.map((l, i) => (
              <tr key={l} className={i === lines.length - 1 ? "border-t border-primary font-semibold" : "border-b border-border"}>
                <td className="py-2">{l}</td>
                <td className="py-2 text-right">
                  <span className="inline-block h-2.5 w-12 rounded-full bg-border align-middle" aria-hidden />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Illustrative layout · figures redacted for confidentiality</p>
      </div>
    </div>
  );
}
