import { createFileRoute } from "@tanstack/react-router";
import { mockupHtml } from "@/content/profile";
import { seo } from "@/lib/seo";
import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PerformanceChart } from "@/components/site/PerformanceChart";
export const Route = createFileRoute("/")({
  head: () => seo("Finance, Audit & Business Insight", "Bonface Mburu Mwangi — finance, audit and business intelligence leader, open to global opportunities. Internal audit, financial controls and data-led performance reporting."),
  component: Home,
});
function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [chartTarget, setChartTarget] = useState<Element | null>(null);
  useEffect(() => {
    setChartTarget(container.current?.querySelector("[data-performance-chart]") ?? null);
  }, []);
  return <>
    <StaticPortfolio container={container} />
    {chartTarget && createPortal(<PerformanceChart />, chartTarget)}
  </>;
}
const StaticPortfolio = memo(function StaticPortfolio({ container }: { container: React.RefObject<HTMLDivElement | null> }) {
  return <div ref={container} className="portfolio-mockup" dangerouslySetInnerHTML={{ __html: mockupHtml }} />;
});
