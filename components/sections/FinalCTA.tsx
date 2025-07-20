import { motion } from "framer-motion";
import EmailCaptureForm from "@/components/ui/EmailCaptureForm";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 max-w-2xl mx-auto text-center">
      <motion.div
        className="glass p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-persian_red drop-shadow-md">
          Be the first to know when we launch
        </h2>
        <p className="text-lg text-white mb-8">
          Join the waitlist and get early access. No spam, just launch updates.
        </p>
        <EmailCaptureForm cta="Join Waitlist" />
        <div className="text-xs text-white/50 mt-4">No spam, ever. Unsubscribe anytime.</div>
      </motion.div>
    </section>
  );
} 