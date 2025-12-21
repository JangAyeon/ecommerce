"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import FormField from "@components/signup/inputField/FormField";
import {
  FieldState,
  GuestOrderLookupInputs,
  guestOrderLookupSchema,
} from "./schema";

const GuestOrderLookupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<GuestOrderLookupInputs>({
    resolver: zodResolver(guestOrderLookupSchema),
    mode: "onChange",
  });

  const ordererName = watch("ordererName");
  const orderNumber = watch("orderNumber");
  const guestPassword = watch("guestPassword");

  const getFieldState = (
    fieldName: keyof GuestOrderLookupInputs,
    value: string | undefined
  ): FieldState => {
    if (!value) return "initial";
    if (errors[fieldName]) return "error";
    return "success";
  };

  const ordererNameState = getFieldState("ordererName", ordererName);
  const orderNumberState = getFieldState("orderNumber", orderNumber);
  const guestPasswordState = getFieldState("guestPassword", guestPassword);

  const onSubmit = async (data: GuestOrderLookupInputs) => {
    try {
      // TODO: API call for order lookup and authentication
      // Example: const res = await fetch(`/api/guest-orders/${data.orderNumber}`, {
      //   method: 'POST',
      //   body: JSON.stringify({ ordererName: data.ordererName, password: data.guestPassword })
      // });

      // Navigate to order detail page on success
      router.push(`/guest-order/${data.orderNumber}`);
    } catch (error) {
      console.error("Order lookup failed:", error);
      // TODO: Error handling (toast message, etc.)
    }
  };

  const isFormValid =
    isValid && !!ordererName && !!orderNumber && !!guestPassword;

  return (
    <div className="w-full max-w-[440px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-h3-semibold sm:text-h2-semibold text-foreground mb-2">
          Guest Order Lookup
        </h1>
        <p className="text-b2-regular text-muted-foreground">
          Please enter the information you provided when placing your order.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Orderer Name Field */}
        <FormField
          id="ordererName"
          label="Orderer Name"
          placeholder="Enter orderer name"
          state={ordererNameState}
          error={errors.ordererName?.message}
          register={register("ordererName")}
        />

        {/* Order Number Field */}
        <FormField
          id="orderNumber"
          label="Order Number"
          placeholder="Enter order number"
          state={orderNumberState}
          error={errors.orderNumber?.message}
          register={register("orderNumber")}
        />

        {/* Guest Password Field */}
        <FormField
          id="guestPassword"
          label="Guest Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter guest password"
          state={guestPasswordState}
          error={errors.guestPassword?.message}
          register={register("guestPassword")}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          }
        />

        {/* Lookup Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 px-4 rounded-lg text-b2-semibold transition-all duration-200
            ${
              isFormValid
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }
          `}
        >
          Lookup Order
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6">
        <p className="text-b2-regular text-muted-foreground text-center">
          Are you a member?{" "}
          <Link
            href="/login"
            className="underline hover:text-foreground transition-colors font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GuestOrderLookupPage;
