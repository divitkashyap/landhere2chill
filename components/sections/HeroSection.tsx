import { motion } from "framer-motion";
import EmailCaptureForm from "@/components/ui/EmailCaptureForm";
import { WavyBackground } from "../../src/components/ui/wavy-background";

export default function HeroSection() {
  return (
    <WavyBackground
      colors={["#FFF200", "#FFD700", "#FFB300", "#38BDF8", "#3B82F6", "#2563EB"]}
      backgroundFill="#0d0221"
      blur={20}
      waveOpacity={0.3}
      speed="slow"
      containerClassName="min-h-[80vh] px-4 py-16 text-center relative overflow-hidden"
    >
      {/* Floating badge */}
      <div className="relative z-20 mb-4 flex justify-center">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-persian_red to-yellow-400 border border-persian_red text-xs font-semibold text-white shadow-md backdrop-blur-md hover:scale-105 transition-transform">🚀 Pre-Launch Beta</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass p-8 max-w-2xl w-full relative z-10 shadow-2xl border border-white/20 backdrop-blur-xl"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-persian_red drop-shadow-xl tracking-tight">
          Never Miss Downtime Again
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white drop-shadow">
          Monitor your websites, APIs, and services with real-time alerts and beautiful status pages your customers will love
        </p>
        <EmailCaptureForm cta="Join Waitlist" />
      </motion.div>
      <div className="mt-12 w-full flex justify-center relative z-10">
        {/* Animated Uptime Line */}
        <div className="glass w-full max-w-3xl h-64 flex items-center justify-center text-white/60 text-xl border border-white/10 shadow-lg">
          <motion.svg width="90%" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.polyline
              points="0,60 30,40 60,50 90,30 120,40 150,20 180,30 210,10 240,30 270,20 300,40"
              fill="none"
              stroke="#FFD700"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.svg>
        </div>
      </div>
    </WavyBackground>
  );
} 