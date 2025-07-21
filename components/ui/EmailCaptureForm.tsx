"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Mail } from "lucide-react";
import { GlareCard } from "../ui/glare-card";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

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
  const [inputValue, setInputValue] = useState("");

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

  const handleVanishSubmit = () => {
    // Only submit if not loading and value is valid
    if (status !== "loading" && inputValue) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <PlaceholdersAndVanishInput
          placeholders={["Enter your email", "you@company.com", "Get notified instantly!"]}
          value={inputValue}
          setValue={setInputValue}
          onVanishSubmit={handleVanishSubmit}
          disabled={status === "loading" || status === "success"}
        />
      </div>
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
    </div>
  );
} 