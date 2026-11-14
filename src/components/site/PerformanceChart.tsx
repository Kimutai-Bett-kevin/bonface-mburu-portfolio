import { performanceVisual } from "@/content/profile";
export function PerformanceChart() {
  return <figure className="performance-chart" aria-label={performanceVisual.title}>
    <figcaption className="chart-heading"><span>{performanceVisual.title}</span><span>{performanceVisual.period}</span></figcaption>
    <div className="chart-grid"><span>12%</span><span>8%</span><span>4%</span><span>0%</span></div>
    <div className="chart-bars">
      {performanceVisual.metrics.map((metric, index) => <div className="chart-column" key={metric.label}>
        <strong>{metric.value}%</strong>
        <div className={`chart-bar ${index === 0 ? "chart-bar-subscribers" : "chart-bar-revenue"}`} />
        <span>{metric.label}</span>
      </div>)}
    </div>
    <p className="chart-note">{performanceVisual.note}</p>
  </figure>;
}