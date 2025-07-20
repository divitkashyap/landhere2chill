import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-blue via-primary-purple to-accent-orange text-white">
      <div className="glass p-8 flex flex-col items-center">
        <Loader2 className="animate-spin mb-4" size={48} />
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    </div>
  );
} 