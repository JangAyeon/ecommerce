import { z } from "zod";
export type FieldState = "initial" | "error" | "success";
export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required!" })
    .email({ message: "Please enter valid email address" }),
  password: z
    .string({ message: "Password is required!" })
    .min(1, { message: "Password is required!" }),
  rememberMe: z.boolean(),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
