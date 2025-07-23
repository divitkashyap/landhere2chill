import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CTO, Techify",
    quote: "Uptime monitoring is a must-have for any serious business. This is the tool I wish I had years ago!"
  },
  {
    name: "John Smith",
    role: "DevOps Lead, CloudBase",
    quote: "Downtime is expensive. Proactive monitoring and status pages are a game changer for our team."
  }
];

const logos = [
  "Techify", "CloudBase", "WebWorks", "APIHub", "Statusly"
];

export default function SocialProofSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Join the waitlist to get early access
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass p-6 max-w-sm w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
          >
            <blockquote className="text-lg text-white/80 mb-4">“{t.quote}”</blockquote>
            <div className="text-white/90 font-semibold">{t.name}</div>
            <div className="text-white/60 text-sm">{t.role}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 opacity-80">
        {logos.map((logo, i) => (
          <motion.div
            key={logo}
            className="bg-white/10 px-6 py-3 rounded-lg font-bold text-lg text-white/80 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 