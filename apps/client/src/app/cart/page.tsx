import { Suspense } from "react";
import CartContent from "@/@components/CartContent";

const CartPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center mt-12">
          <div className="text-gray-500">Loading cart...</div>
        </div>
      }
    >
      <CartContent />
    </Suspense>
  );
};

export default CartPage;
