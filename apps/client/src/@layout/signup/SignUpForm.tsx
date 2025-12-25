"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormField from "@components/signup/inputField/FormField";
import PhoneInput from "@components/signup/inputField/PhoneInput";
import SocialButtons from "@components/signup/social/SocialButtons";
import AddressField from "@components/signup/address/AddressField";
import LegalAgreement from "@components/signup/legal/LegalAgreement";
import SwitchLogin from "@components/signup/switch/SwitchLogin";
import Map from "@components/map/Map";
import MapMarker from "@components/map/MapMarker";
import { useSignUpForm } from "./hooks/useSignUpForm";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 모든 폼 로직을 커스텀 훅에서 가져옴
  const {
    register,
    handleSubmit,
    errors,
    isFormValid,
    isLoading,
    fullName,
    email,
    password,
    phone,
    daumPostAddress,
    extraAddress,
    fieldStates,
    handleDaumPostAddressChange,
    handleExtraAddressChange,
    handlePhoneChange,
  } = useSignUpForm();

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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <FormField
          id="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          state={fieldStates.fullName}
          error={errors.fullName?.message}
          register={register("fullName")}
        />

        {/* Email Field */}
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email address"
          state={fieldStates.email}
          error={errors.email?.message}
          register={register("email")}
        />

        {/* Password Field */}
        <FormField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          state={fieldStates.password}
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

        {/* Phone Number Field */}
        <PhoneInput
          id="phone"
          label="Phone Number"
          state={fieldStates.phone}
          error={errors.phone?.message}
          value={phone || ""}
          onChange={handlePhoneChange}
        />

        {/* Address & KAKAO MAP */}
        <Map isVisible={!!daumPostAddress} />
        <MapMarker isVisible={!!daumPostAddress} />
        <AddressField
          daumPostAddress={daumPostAddress}
          extraAddress={extraAddress}
          daumPostAddressState={fieldStates.daumPostAddress}
          extraAddressState={fieldStates.extraAddress}
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
          disabled={!isFormValid || isLoading}
          className={`w-full py-3 px-4 rounded-lg text-b2-semibold transition-all duration-200
            ${
              isFormValid && !isLoading
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }
          `}
        >
          {isLoading ? "Creating Account..." : "Create an Account"}
        </button>
      </form>

      <SocialButtons />

      {/* Footer */}
      <SwitchLogin />
    </div>
  );
};

export default SignUpForm;
