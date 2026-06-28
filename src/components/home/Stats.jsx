import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, suffix: "x", label: "Average Traffic Growth" },
  { value: 14, suffix: " days", label: "Typical Turnaround" },
  { value: 100, suffix: "%", label: "Fixed-Price Projects" },
];

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1200;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min((t - start) / duration, 1);
              setCount(Math.floor(end * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
              else setCount(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40 py-16 md:py-20">
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 grid-cols-1 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
