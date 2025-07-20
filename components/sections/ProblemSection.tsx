import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Late Detection",
    desc: "Downtime is often discovered too late, after customers complain."
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    desc: "Every minute down costs businesses $5,600 on average."
  },
  {
    icon: Users,
    title: "Poor Communication",
    desc: "Customers are left in the dark, damaging trust and reputation."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-persian_red drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Website downtime costs businesses <span className="text-white">$5,600 per minute</span>
      </motion.h2>
      <motion.p
        className="text-center text-lg text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        The real cost of downtime is more than just lost revenue. It's lost trust, lost customers, and lost opportunities.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {painPoints.map((point, i) => (
          <motion.div
            key={point.title}
            className="glass p-6 flex flex-col items-center text-center max-w-xs w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
          >
            <point.icon className="text-persian_red mb-3 drop-shadow" size={36} />
            <h3 className="font-semibold text-xl mb-2 text-persian_red drop-shadow">{point.title}</h3>
            <p className="text-white/70">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 