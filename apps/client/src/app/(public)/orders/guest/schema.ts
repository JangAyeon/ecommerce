import { z } from "zod";

export type FieldState = "initial" | "error" | "success";

export const guestOrderLookupSchema = z.object({
  ordererName: z
    .string({ message: "Orderer name is required." })
    .min(2, { message: "Orderer name must be at least 2 characters." })
    .max(50, { message: "Orderer name must be at most 50 characters." }),
  orderNumber: z
    .string({ message: "Order number is required." })
    .min(1, { message: "Order number is required." }),
  guestPassword: z
    .string({ message: "Guest password is required." })
    .min(4, { message: "Guest password must be at least 4 characters." })
    .max(20, { message: "Guest password must be at most 20 characters." }),
});

export type GuestOrderLookupInputs = z.infer<typeof guestOrderLookupSchema>;

