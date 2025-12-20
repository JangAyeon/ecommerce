import { z } from "zod";
export type FieldState = "initial" | "error" | "success";

export const signUpSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(2, { message: "Full name must be at least 2 characters!" })
    .max(50),
  email: z
    .string({ message: "Email is required!" })
    .email({ message: "Please enter valid email address" }),
  password: z
    .string({ message: "Password is required!" })
    .min(8, { message: "Password must be at least 8 characters!" })
    .max(50),
  phone: z
    .string({ message: "Phone number is required!" })
    .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, {
      message: "올바른 휴대폰 번호 형식이 아닙니다.",
    }),
  daumPostAddress: z.string().optional(),
  extraAddress: z.string().optional(),
});

export type SignUpFormInputs = z.infer<typeof signUpSchema>;
