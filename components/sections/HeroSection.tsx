import { motion } from "framer-motion";
import EmailCaptureForm from "@/components/ui/EmailCaptureForm";
import { WavyBackground } from "../../src/components/ui/wavy-background";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
  CartesianGrid,
} from "recharts";

const uptimeData = [
  { time: "00:00", uptime: 99 },
  { time: "02:00", uptime: 99 },
  { time: "04:00", uptime: 98.7, alert: true },
  { time: "06:00", uptime: 99 },
  { time: "08:00", uptime: 99 },
  { time: "10:00", uptime: 99 },
  { time: "12:00", uptime: 99 },
  { time: "14:00", uptime: 99 },
  { time: "16:00", uptime: 99 },
  { time: "18:00", uptime: 98.5, alert: true },
  { time: "20:00", uptime: 99 },
  { time: "22:00", uptime: 99 },
  { time: "24:00", uptime: 99 },
];

export default function HeroSection() {
  return (
    <WavyBackground
      colors={["#FFF200", "#FFD700", "#FFB300", "#FF8C00", "#FF6F00", "#FFA500", "#FFC300"]}
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
        {/* Animated Uptime Chart */}
        <div className="glass w-full max-w-3xl h-64 flex flex-col items-center justify-center text-white/60 text-xl border border-white/10 shadow-lg">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={uptimeData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                <CartesianGrid stroke="#FFD70033" strokeDasharray="4 4" />
                <XAxis dataKey="time" tick={{ fill: '#FFD700', fontSize: 13, fontFamily: 'Inter, sans-serif' }} axisLine={false} tickLine={false} />
                <YAxis domain={[98, 100]} tick={{ fill: '#FFD700', fontSize: 13, fontFamily: 'Inter, sans-serif' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#222', border: 'none', color: '#FFD700', fontFamily: 'Inter, sans-serif' }} labelStyle={{ color: '#FFD700', fontFamily: 'Inter, sans-serif' }} />
                <Line
                  type="monotone"
                  dataKey="uptime"
                  stroke="#FFD700"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                />
                {/* Alert markers */}
                {uptimeData.map((d, i) =>
                  d.alert ? (
                    <ReferenceDot
                      key={i}
                      x={d.time}
                      y={d.uptime}
                      r={8}
                      fill="#FF6F00"
                      stroke="#fff"
                      strokeWidth={2}
                      label={{ value: "Alert", position: "top", fill: "#FF6F00", fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                    />
                  ) : null
                )}
                {/* 99% Uptime Label */}
                <Label
                  value="99% Uptime"
                  position="insideTopLeft"
                  offset={10}
                  fill="#FFD700"
                  fontSize={16}
                  fontWeight={700}
                  fontFamily="Inter, sans-serif"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
} 