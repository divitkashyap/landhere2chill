"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Mail } from "lucide-react";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormData = z.infer<typeof schema>;

interface EmailCaptureFormProps {
  cta?: string;
}

export default function EmailCaptureForm({ cta = "Join Waitlist" }: EmailCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setError(null);
    try {
      // --- API Integration Point ---
      // 1. Send POST to /api/waitlist with { email: data.email }
      // 2. Integrate with Resend or Supabase here
      // Example:
      // await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email: data.email }) });
      await new Promise((res) => setTimeout(res, 1200)); // Simulate network
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center gap-3 w-full max-w-md mx-auto">
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
          disabled={status === "loading" || status === "success"}
        />
        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        {errors.email && (
          <motion.span
            className="absolute left-0 -bottom-6 text-sm text-accent-orange"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.email.message}
          </motion.span>
        )}
      </div>
      <motion.button
        type="submit"
        className="flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue via-primary-purple to-accent-orange font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue relative"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? (
          <Loader2 className="animate-spin mr-2" size={20} />
        ) : status === "success" ? (
          <CheckCircle2 className="mr-2 text-green-400" size={20} />
        ) : null}
        {status === "success" ? "Joined!" : cta}
      </motion.button>
      {/* Toast notifications can be added here for better UX */}
      {status === "error" && (
        <motion.span
          className="text-accent-orange text-sm mt-2 md:mt-0 md:ml-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      )}
    </form>
  );
} 