"use client";

import { useStatus } from "@/@service/auth/mutations";

const CheckStatusButton = () => {
  const checkStatusMutation = useStatus();

  const handleCheckStatus = async () => {
    try {
      await checkStatusMutation.mutateAsync();
    } catch (error) {
      console.error(error);
    }
  };
  return <button onClick={handleCheckStatus}>Check Status</button>;
};

export default CheckStatusButton;
