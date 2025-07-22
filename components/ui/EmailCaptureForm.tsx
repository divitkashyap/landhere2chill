"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2, CheckCircle2, Mail } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({ email: z.string().email({ message: "Please enter a valid email address" }) });
type FormData = z.infer<typeof schema>;

interface EmailCaptureFormProps {
  cta?: string;
}

export default function EmailCaptureForm({ cta = "Join Waitlist" }: EmailCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const result = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(result.error || "Something went wrong. Please try again.");
        toast.error(result.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      toast.success("You&apos;re on the waitlist! Check your email for confirmation.");
      reset();
    } catch {
      setStatus("error");
      setError("Server error. Please try again later.");
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto flex flex-col items-center gap-3">
      <div className="w-full flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register("email")}
          disabled={status === "loading" || status === "success"}
          className="flex-1 rounded-full px-5 py-3 bg-[#23272f] text-white placeholder:text-white/60 border border-yellow-400 focus:border-persian_red focus:ring-2 focus:ring-persian_red outline-none transition-all duration-200 font-jakarta text-base shadow-md disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-persian_red to-yellow-400 text-white font-bold text-base shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-persian_red transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin mr-2" size={20} />
          ) : (
            <Mail className="mr-2" size={20} />
          )}
          {cta}
        </button>
      </div>
      {errors.email && (
        <span className="text-red-400 text-sm font-medium mt-1">{errors.email.message}</span>
      )}
      {status === "error" && error && (
        <span className="text-red-400 text-sm font-medium mt-1">{error}</span>
      )}
      {status === "success" && (
        <span className="text-green-400 text-sm font-medium mt-1 flex items-center gap-1"><CheckCircle2 size={18} /> You&apos;re on the waitlist!</span>
      )}
    </form>
  );
} 