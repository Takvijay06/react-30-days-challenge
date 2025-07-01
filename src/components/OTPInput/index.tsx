import { useOTPInput } from "./useOtp";
import type { OTPInputProps } from "./interface";
import { styles } from "./style";
import { defaultValues } from "./constant";

export const OTPInput = ({
  length = defaultValues.length,
  onComplete,
  inputType = "number",
  autoFocus = true,
}: OTPInputProps) => {
  const {
    otp,
    activeIndex,
    inputRefs,
    setActiveIndex,
    handleKeyDown,
    handlePaste,
  } = useOTPInput({ length, autoFocus, onComplete });

  return (
    <div style={styles.container}>
      {otp.map((value: string, index: number) => (
        <input
          key={index}
          ref={(element) => (inputRefs.current[index] = element)}
          type={inputType === "number" ? "tel" : "text"}
          inputMode={inputType === "number" ? "numeric" : "text"}
          maxLength={1}
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onFocus={() => setActiveIndex(index)}
          onBlur={() => setActiveIndex(null)}
          style={{
            ...styles.input,
            ...(activeIndex === index ? styles.inputFocus : {}),
          }}
        />
      ))}
    </div>
  );
};
