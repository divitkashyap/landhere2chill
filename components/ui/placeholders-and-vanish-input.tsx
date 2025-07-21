"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../src/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  value,
  setValue,
  onVanishSubmit,
  disabled,
  onChange,
}: {
  placeholders: string[];
  value: string;
  setValue: (v: string) => void;
  onVanishSubmit: () => void;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);

  // Cycle placeholders
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [placeholders]);

  // Draw vanish effect
  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Dynamically size canvas to input
    const rect = inputRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    const computedStyles = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#fff"; // white text for vanish effect
    ctx.textBaseline = "middle";
    ctx.fillText(value, 16, rect.height / 2);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    const newData: any[] = [];
    for (let t = 0; t < canvas.height; t++) {
      let i = 4 * t * canvas.width;
      for (let n = 0; n < canvas.width; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }
    // Reduce particle size for subtle effect
    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 2, // was 8
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  // Animate vanish
  const animate = (start: number) => {
    setAnimating(true);
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.r <= 0) {
            current.r = 0;
            continue;
          }
          current.x += Math.random() > 0.5 ? 1 : -1;
          current.y += Math.random() > 0.5 ? 1 : -1;
          current.r -= 0.045 * Math.random(); // slower vanish for more visibility
          newArr.push(current);
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && canvasRef.current) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.globalAlpha = 1;
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            ctx.beginPath();
            ctx.rect(n, i, s, s);
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.stroke();
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
          onVanishSubmit();
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating && value) {
      draw();
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!animating && value) {
      draw();
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  return (
    <form
      className={cn(
        // Set input bg to dark blue for debug
        "w-full relative max-w-xl mx-auto bg-[#0a174e] h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] border border-yellow-400 transition duration-200 flex items-center",
        value && "bg-gray-50"
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          // Remove scale, set high z-index for debug
          "absolute z-50 pointer-events-none text-base top-0 left-0 w-full h-full pr-20",
          "opacity-100"
        )}
        style={{ width: '100%', height: '100%' }}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange && onChange(e);
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none text-white h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20 transition-colors duration-200",
          animating ? "text-transparent bg-transparent" : "bg-[#23272f]"
        )}
        placeholder={placeholders[currentPlaceholder]}
        aria-label="Email address"
        autoComplete="email"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow hover:scale-105 transition-transform disabled:opacity-50 disabled:pointer-events-none"
        disabled={animating || !value}
        tabIndex={0}
        aria-label="Join Waitlist"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 11H17M17 11L12.5 6.5M17 11L12.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{ y: 5, opacity: 0 }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
} 