"use client";

import { Check, AlertCircle } from "lucide-react";
import { FieldState } from "./schema";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  state: FieldState;
  error?: string;
  register: any;
  rightElement?: React.ReactNode;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  state,
  error,
  register,
  rightElement,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-b2-medium text-foreground block">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 ${
            rightElement ? "pr-12" : "pr-4"
          } rounded-lg border transition-all duration-200 outline-none text-b2-regular
            ${
              state === "error"
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : state === "success"
                  ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  : "border-input focus:border-ring focus:ring-2 focus:ring-ring/20"
            }
            bg-background text-foreground
            placeholder:text-muted-foreground
          `}
          {...register}
        />
        {state === "success" && !rightElement && (
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
        {state === "error" && !rightElement && (
          <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
        )}
        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {state === "success" && (
              <Check className="w-5 h-5 text-green-500" />
            )}
            {state === "error" && (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
            {rightElement}
          </div>
        )}
      </div>
      {error && <p className="text-b3-regular text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
