import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "../ui/text-reveal-card";

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
    <section className="py-20 px-4 max-w-5xl mx-auto flex flex-col items-center">
      <div className="mb-12 text-center flex flex-col items-center">
        <TextRevealCard
          text={<span className="text-neutral-200">Most people have no idea how much money is lost to downtime.</span>}
          revealText={<span>Website downtime costs businesses <span className="text-persian_red">$5,600 per minute</span></span>}
          className="glass-dark mx-auto my-4 px-8 py-8 flex flex-col items-center gap-2 w-full max-w-2xl"
          beforeTextClass="text-neutral-200 leading-loose tracking-wide"
          afterTextClass="leading-loose tracking-wide text-white"
        >
          <span className="text-yellow-400 font-semibold uppercase tracking-wide text-xs mb-2 block">Hover to find out</span>
          <TextRevealCardTitle className="font-bold text-xl sm:text-2xl font-jakarta leading-snug mb-2">
            Can you guess how much businesses lose every minute they're down?
          </TextRevealCardTitle>
        </TextRevealCard>
        <motion.p
          className="text-center text-lg text-white mt-8 max-w-2xl mx-auto font-jakarta leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The real cost of downtime is more than just lost revenue. It's lost trust, lost customers, and lost opportunities.
        </motion.p>
      </div>
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