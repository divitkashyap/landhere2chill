import { motion } from "framer-motion";
import { Zap, Bell, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Monitoring",
    desc: "Monitor your websites, APIs, and services 24/7 with instant checks."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Receive real-time alerts via email, SMS, or Slack when downtime is detected."
  },
  {
    icon: Globe,
    title: "Status Pages",
    desc: "Create beautiful, customizable public status pages for your customers."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Get detailed uptime analytics and exportable reports for your team."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-persian_red drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            variants={card}
            className="glass p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer group"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <feature.icon className="mb-3 text-persian_red group-hover:text-white transition-colors duration-200 drop-shadow" size={36} />
            <h3 className="font-semibold text-xl mb-2 text-persian_red drop-shadow">
              {feature.title}
            </h3>
            <p className="text-white/70">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 