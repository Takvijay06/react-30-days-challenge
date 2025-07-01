import { useEffect, useRef, useState } from "react";

export const useOTPInput = ({
  length,
  autoFocus,
  onComplete,
}: {
  length: number;
  autoFocus: boolean;
  onComplete?: (otp: string) => void;
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus) inputRefs.current[0]?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (otp.every((char) => char !== "") && onComplete) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;
    const updated = [...otp];

    if (key === "Backspace") {
      updated[index] = "";
      setOtp(updated);
      if (index > 0) inputRefs.current[index - 1]?.focus();
    } else if (key === "ArrowLeft") {
      inputRefs.current[index - 1]?.focus();
    } else if (key === "ArrowRight") {
      inputRefs.current[index + 1]?.focus();
    } else if (!isNaN(Number(key))) {
      updated[index] = key.slice(-1);
      setOtp(updated);
      if (index < length - 1) inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);
    const updated = [...otp];

    for (let i = 0; i < length; i++) {
      updated[i] = pasted[i] || "";
    }

    setOtp(updated);
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return {
    otp,
    activeIndex,
    inputRefs,
    setActiveIndex,
    handleKeyDown,
    handlePaste,
    setOtp,
  };
};
