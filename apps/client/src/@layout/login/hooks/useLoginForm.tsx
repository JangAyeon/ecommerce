import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldState, LoginFormInputs, loginSchema } from "../schema";
import { useLogin } from "@/@service/auth/mutations";
import { LoginRequest } from "@/@service/auth/types";
import { useRouter } from "next/navigation";

const useLoginForm = () => {
  const loginMutation = useLogin();
  const router = useRouter();
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
  /**
   * 필드 상태를 계산하는 헬퍼 함수
   * - initial: 값이 없을 때
   * - error: 에러가 있을 때
   * - success: 값이 있고 에러가 없을 때
   */
  const getFieldState = (
    fieldName: keyof LoginFormInputs,
    value: string | undefined
  ): FieldState => {
    if (!value) return "initial";
    if (errors[fieldName]) return "error";
    return "success";
  };

  // 각 필드의 상태를 계산
  const fieldStates = {
    email: getFieldState("email", email),
    password: getFieldState("password", password),
  };

  const isFormValid = isValid && !!email && !!password;

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login data:", data);

    const loginData: LoginRequest = {
      email: data.email,
      password: data.password,
    };

    try {
      await loginMutation.mutateAsync(loginData);
      router.push("/main");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return {
    register,
    handleSubmit,
    watch,
    errors,
    isValid,
    isFormValid,
    onSubmit,
    fieldStates,
    showPassword,
    setShowPassword,
  };
};

export default useLoginForm;
