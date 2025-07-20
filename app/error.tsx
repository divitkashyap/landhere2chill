"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log error details to the console for debugging
    // eslint-disable-next-line no-console
    console.error("GlobalError: ", error);
    if (error?.stack) {
      // eslint-disable-next-line no-console
      console.error("Stack trace:", error.stack);
    }
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-blue via-primary-purple to-accent-orange text-white">
        <div className="glass p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="mb-6 text-white/80">{error.message || "An unexpected error occurred. Please try refreshing the page."}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue via-primary-purple to-accent-orange font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
} 