"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../@components/signup/inputField/FormField";
import SocialLoginButtons from "../../@components/login/social/SocialButtons";
import { FieldState, LoginFormInputs, loginSchema } from "./schema";
import GuestButton from "@/@components/login/guest/guestButton";
import SignupButton from "@/@components/login/signup/signupButton";
import FindEmail from "@/@components/login/account/email";
import FindPassword from "@/@components/login/account/password";
import RememberMeCheckbox from "@/@components/login/remember/rememberMe";
import TogglePasswordVisibility from "@/@components/login/toggle/visiblePW";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const email = watch("email");
  const password = watch("password");

  const getFieldState = (
    fieldName: keyof LoginFormInputs,
    value: string | undefined
  ): FieldState => {
    if (!value) return "initial";
    if (errors[fieldName]) return "error";
    return "success";
  };

  const emailState = getFieldState("email", email);
  const passwordState = getFieldState("password", password);

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
    // TODO: Implement login logic
  };

  const isFormValid = isValid && !!email && !!password;

  return (
    <div className="w-full max-w-[440px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-h3-semibold sm:text-h2-semibold text-foreground mb-2">
          Welcome back
        </h1>
        <p className="text-b2-regular text-muted-foreground">
          Sign in to your account to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <TogglePasswordVisibility
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          }
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <RememberMeCheckbox register={register("rememberMe")} />
          <div className="flex gap-4">
            <FindEmail />
            <FindPassword />
          </div>
        </div>

        {/* Login Button */}
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
          Sign In
        </button>
      </form>

      <SocialLoginButtons />

      {/* Footer Links */}
      <div className="mt-6 sm:mt-8 space-y-4">
        {/* Sign Up Link */}
        <SignupButton />

        {/* Continue as Guest Link */}
        <GuestButton />
      </div>
    </div>
  );
};

export default LoginForm;
