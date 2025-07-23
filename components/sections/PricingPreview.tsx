import { motion } from "framer-motion";

export default function PricingPreview() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <motion.div
        className="glass p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-persian_red drop-shadow-md">
          Plans starting at <span className="text-white">$9/month</span>
        </h2>
        <p className="text-lg text-white mb-2">
          Free tier available at launch
        </p>
        <p className="text-lg text-white mb-6">
          14-day free trial for all plans
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="bg-white/10 rounded-lg px-6 py-4 text-white font-semibold shadow-md">
            <span>Free Tier</span>
          </div>
          <div className="bg-gradient-to-r from-auburn-500 to-red-700 rounded-lg px-6 py-4 text-white font-bold shadow-lg">
            <span>Pro — $19/mo</span>
          </div>
          <div className="bg-white/10 rounded-lg px-6 py-4 text-white font-semibold shadow-md">
            <span>14-day Free Trial</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 