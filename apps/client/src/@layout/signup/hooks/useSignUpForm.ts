import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useRegister } from "@/@service/auth/mutations";
import { signUpSchema, SignUpFormInputs, FieldState } from "../schema";
import { RegisterRequest } from "@/@service/auth/types";

export const useSignUpForm = () => {
  const router = useRouter();
  const registerMutation = useRegister();

  const form = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      daumPostAddress: "",
      extraAddress: "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = form;

  // 폼 필드 값들을 watch로 실시간 추적
  const fullName = watch("fullName");
  const email = watch("email");
  const password = watch("password");
  const phone = watch("phone");
  const daumPostAddress = watch("daumPostAddress");
  const extraAddress = watch("extraAddress");

  /**
   * 필드 상태를 계산하는 헬퍼 함수
   * - initial: 값이 없을 때
   * - error: 에러가 있을 때
   * - success: 값이 있고 에러가 없을 때
   */
  const getFieldState = (
    fieldName: keyof SignUpFormInputs,
    value: string | undefined
  ): FieldState => {
    if (!value) return "initial";
    if (errors[fieldName]) return "error";
    return "success";
  };

  // 각 필드의 상태를 계산
  const fieldStates = {
    fullName: getFieldState("fullName", fullName),
    email: getFieldState("email", email),
    password: getFieldState("password", password),
    phone: getFieldState("phone", phone),
    daumPostAddress: getFieldState("daumPostAddress", daumPostAddress),
    extraAddress: getFieldState("extraAddress", extraAddress),
  };

  // 폼 유효성 검사 (모든 필수 필드가 채워져 있고 유효한지 확인)
  const isFormValid = isValid && !!fullName && !!email && !!password && !!phone;

  /**
   * 폼 제출 핸들러
   * - API 요청 형식에 맞게 데이터 변환
   * - 회원가입 API 호출
   * - 성공 시 로그인 페이지로 이동
   */
  const onSubmit = async (data: SignUpFormInputs) => {
    // 서버로 보낼 때 핸드폰 번호는 숫자만 추출
    const phoneNumbersOnly = data.phone.replace(/-/g, "");

    // API 요청 형식에 맞게 데이터 변환
    const registerData: RegisterRequest = {
      username: data.fullName, // fullName을 username으로 매핑
      email: data.email,
      password: data.password,
      phone: phoneNumbersOnly,
      // 주소는 필요시 추가 (API 스펙에 따라)
    };

    try {
      await registerMutation.mutateAsync(registerData);
      // 성공 시 메인 페이지로 이동
      router.push("/");
    } catch (error) {
      // 에러는 mutation의 onError에서 처리됨
      console.error("회원가입 실패:", error);
    }
  };

  // 필드 값 변경 핸들러들
  const handleDaumPostAddressChange = (daumPostAddress: string) => {
    setValue("daumPostAddress", daumPostAddress, { shouldValidate: true });
  };

  const handleExtraAddressChange = (extraAddress: string) => {
    setValue("extraAddress", extraAddress, { shouldValidate: true });
  };

  const handlePhoneChange = (value: string) => {
    setValue("phone", value, { shouldValidate: true });
  };

  return {
    // Form methods
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isFormValid,
    isLoading: registerMutation.isPending,

    // Field values
    fullName,
    email,
    password,
    phone,
    daumPostAddress,
    extraAddress,

    // Field states
    fieldStates,

    // Handlers
    handleDaumPostAddressChange,
    handleExtraAddressChange,
    handlePhoneChange,
  };
};
