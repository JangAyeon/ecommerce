import { UseFormRegisterReturn } from "react-hook-form";

const RememberMeCheckbox = ({
  register,
}: {
  register: UseFormRegisterReturn<"rememberMe">;
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        {...register}
        className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
      />
      <span className="text-b2-regular text-foreground">Remember me</span>
    </label>
  );
};

export default RememberMeCheckbox;
