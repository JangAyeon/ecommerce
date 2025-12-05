"use client";

const AuthButton = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  const handleSignup = () => {
    console.log("Signup");
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default AuthButton;
