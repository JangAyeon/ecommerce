"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Eye, EyeOff } from "lucide-react";
import FormField from "../../@components/signup/inputField/FormField";
import SocialButtons from "../../@components/signup/social/SocialButtons";
import AddressField from "../../@components/signup/address/AddressField";
import { FieldState, SignUpFormInputs, signUpSchema } from "./schema";
import LegalAgreement from "../../@components/signup/legal/LegalAgreement";
import SwitchLogin from "../../@components/signup/switch/SwitchLogin";
import Map from "../../@components/map/Map";
import MapMarker from "@/@components/map/MapMarker";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      daumPostAddress: "",
      extraAddress: "",
    },
  });

  const fullName = watch("fullName");
  const email = watch("email");
  const password = watch("password");
  const daumPostAddress = watch("daumPostAddress");
  const extraAddress = watch("extraAddress");

  const getFieldState = (
    fieldName: keyof SignUpFormInputs,
    value: string | undefined
  ): FieldState => {
    if (!value) return "initial";
    if (errors[fieldName]) return "error";
    return "success";
  };

  const fullNameState = getFieldState("fullName", fullName);
  const emailState = getFieldState("email", email);
  const passwordState = getFieldState("password", password);
  const daumPostAddressState = getFieldState(
    "daumPostAddress",
    daumPostAddress
  );
  const extraAddressState = getFieldState("extraAddress", extraAddress);

  const handleDaumPostAddressChange = (daumPostAddress: string) => {
    setValue("daumPostAddress", daumPostAddress, { shouldValidate: true });
  };

  const handleExtraAddressChange = (extraAddress: string) => {
    setValue("extraAddress", extraAddress, { shouldValidate: true });
  };

  const onSubmit = (data: SignUpFormInputs) => {
    console.log("Sign up data:", data);

    alert(JSON.stringify(data));
    // TODO: Implement signup logic
  };

  const isFormValid = isValid && !!fullName && !!email && !!password;

  return (
    <div className="w-full max-w-[440px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-h3-semibold sm:text-h2-semibold text-foreground mb-2">
          Create an account
        </h1>
        <p className="text-b2-regular text-muted-foreground">
          Let&apos;s create your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name Field */}
        <FormField
          id="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          state={fullNameState}
          error={errors.fullName?.message}
          register={register("fullName")}
        />

        {/* Email Field */}
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email address"
          state={emailState}
          error={errors.email?.message}
          register={register("email")}
        />

        {/* Password Field */}
        <FormField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          state={passwordState}
          error={errors.password?.message}
          register={register("password")}
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

        {/* Address & KAKAO MAP */}
        <Map isVisible={!!daumPostAddress} />
        <MapMarker isVisible={!!daumPostAddress} />
        <AddressField
          daumPostAddress={daumPostAddress}
          extraAddress={extraAddress}
          daumPostAddressState={daumPostAddressState}
          extraAddressState={extraAddressState}
          error={
            errors.daumPostAddress?.message || errors.extraAddress?.message
          }
          onDaumPostAddressChange={handleDaumPostAddressChange}
          onExtraAddressChange={handleExtraAddressChange}
        />

        {/* Legal Agreement */}
        <LegalAgreement />

        {/* Create Account Button */}
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
          Create an Account
        </button>
      </form>

      <SocialButtons />

      {/* Footer */}
      <SwitchLogin />
    </div>
  );
};

export default SignUpForm;
