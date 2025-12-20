"use client";

import {
  useRef,
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
  ClipboardEvent,
} from "react";
import { Check, AlertCircle } from "lucide-react";
import { FieldState } from "@layout/signup/schema";

interface PhoneInputProps {
  id: string;
  label: string;
  state: FieldState;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const PhoneInput = ({
  id,
  label,
  state,
  error,
  value,
  onChange,
  onBlur,
}: PhoneInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [digits, setDigits] = useState<string[]>(() => {
    // 초기값에서 숫자만 추출하여 배열로 변환
    const numbers = value.replace(/[^\d]/g, "").split("");
    return Array(11)
      .fill("")
      .map((_, i) => numbers[i] || "");
  });

  // 외부 value 변경 시 digits 업데이트
  useEffect(() => {
    const numbers = value.replace(/[^\d]/g, "").split("");
    const newDigits = Array(11)
      .fill("")
      .map((_, i) => numbers[i] || "");
    setDigits(newDigits);
  }, [value]);

  // digits 배열을 문자열로 변환 (010-3055-4xxx 형식)
  const formatPhoneValue = (digitsArray: string[]): string => {
    const numbers = digitsArray.join("");
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
  };

  // 값이 변경될 때 부모 컴포넌트에 알림
  const updateValue = (newDigits: string[]) => {
    setDigits(newDigits);
    const formatted = formatPhoneValue(newDigits);
    onChange(formatted);
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // 숫자만 허용
    if (input && !/^\d$/.test(input)) {
      return;
    }

    const newDigits = [...digits];
    newDigits[index] = input.slice(-1); // 마지막 숫자만 사용

    updateValue(newDigits);

    // 다음 필드로 포커스 이동
    if (input && index < 10) {
      const nextIndex = index + 1;
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // 백스페이스 처리
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      const prevIndex = index - 1;
      inputRefs.current[prevIndex]?.focus();
    }

    // 화살표 키 처리
    if (e.key === "ArrowLeft" && index > 0) {
      const prevIndex = index - 1;
      inputRefs.current[prevIndex]?.focus();
    }

    if (e.key === "ArrowRight" && index < 10) {
      const nextIndex = index + 1;
      inputRefs.current[nextIndex]?.focus();
    }

    // 숫자가 아닌 키는 차단 (백스페이스, 화살표, 탭 등 제외)
    if (
      !/^\d$/.test(e.key) &&
      ![
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Home",
        "End",
      ].includes(e.key) &&
      !(e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
    ) {
      e.preventDefault();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const numbers = pastedText.replace(/[^\d]/g, "").slice(0, 11).split("");
    const newDigits = Array(11)
      .fill("")
      .map((_, i) => numbers[i] || "");
    updateValue(newDigits);

    // 마지막 입력된 필드로 포커스 이동
    const lastFilledIndex = newDigits.findIndex((d, i) => !d && i > 0) - 1;
    const focusIndex =
      lastFilledIndex >= 0 ? lastFilledIndex : Math.min(numbers.length - 1, 10);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  return (
    <div className="space-y-2">
      <label className="text-b2-medium text-foreground block">{label}</label>
      <div className="relative">
        <div className="flex items-center gap-1">
          {/* 첫 번째 그룹: 010 */}
          {[0, 1, 2].map((idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digits[idx]}
              onChange={(e) => handleChange(idx, e)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(idx)}
              onBlur={onBlur}
              className={`w-10 h-12 text-center text-b2-semibold rounded-lg border transition-all duration-200 outline-none
                ${
                  state === "error"
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : state === "success"
                      ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      : "border-input focus:border-ring focus:ring-2 focus:ring-ring/20"
                }
                bg-background text-foreground
              `}
            />
          ))}

          {/* 첫 번째 하이픈 */}
          <span className="text-b2-semibold text-muted-foreground mx-1">-</span>

          {/* 두 번째 그룹: 3055 */}
          {[3, 4, 5, 6].map((idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digits[idx]}
              onChange={(e) => handleChange(idx, e)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(idx)}
              onBlur={onBlur}
              className={`w-10 h-12 text-center text-b2-semibold rounded-lg border transition-all duration-200 outline-none
                ${
                  state === "error"
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : state === "success"
                      ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      : "border-input focus:border-ring focus:ring-2 focus:ring-ring/20"
                }
                bg-background text-foreground
              `}
            />
          ))}

          {/* 두 번째 하이픈 */}
          <span className="text-b2-semibold text-muted-foreground mx-1">-</span>

          {/* 세 번째 그룹: 4xxx */}
          {[7, 8, 9, 10].map((idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digits[idx]}
              onChange={(e) => handleChange(idx, e)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(idx)}
              onBlur={onBlur}
              className={`w-10 h-12 text-center text-b2-semibold rounded-lg border transition-all duration-200 outline-none
                ${
                  state === "error"
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : state === "success"
                      ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      : "border-input focus:border-ring focus:ring-2 focus:ring-ring/20"
                }
                bg-background text-foreground
              `}
            />
          ))}
        </div>

        {/* 상태 아이콘 */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex items-center">
          {state === "success" && <Check className="w-5 h-5 text-green-500" />}
          {state === "error" && (
            <AlertCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
      </div>
      {error && <p className="text-b3-regular text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInput;
