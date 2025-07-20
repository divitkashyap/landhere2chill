import { motion } from "framer-motion";
import { Bell, Globe, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Bell,
    title: "Instant Notifications",
    desc: "Get notified instantly when your services go down."
  },
  {
    icon: Globe,
    title: "Beautiful Status Pages",
    desc: "Keep your customers informed with real-time status updates."
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    desc: "Access uptime reports and analytics to optimize reliability."
  }
];

export default function SolutionPreview() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-persian_red drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        The Solution
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            className="glass p-6 flex flex-col items-center text-center max-w-xs w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
          >
            <sol.icon className="text-persian_red mb-3 drop-shadow" size={36} />
            <h3 className="font-semibold text-xl mb-2 text-persian_red drop-shadow">
              {sol.title}
            </h3>
            <p className="text-white/70">{sol.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 