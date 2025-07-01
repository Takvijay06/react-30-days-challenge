export type OTPInputProps = {
  length?: number;
  onComplete?: (otp: string) => void;
  inputType?: "number" | "text";
  autoFocus?: boolean;
};
