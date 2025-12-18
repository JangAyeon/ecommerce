import { Eye, EyeOff } from "lucide-react";

interface TogglePasswordVisibilityProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const TogglePasswordVisibility = ({
  showPassword,
  setShowPassword,
}: TogglePasswordVisibilityProps) => {
  return (
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
  );
};

export default TogglePasswordVisibility;
