import { ProductResponse } from "@repo/types";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  products: ProductResponse[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="w-full relative z-[1] mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow gap-3">
                <h3 className="text-base font-semibold text-gray-900 leading-snug m-0">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed m-0 flex-grow">
                  {product.description.length > 60
                    ? `${product.description.substring(0, 60)}...`
                    : product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                  <span className="text-lg font-bold text-gray-900">
                    ₩{product.price.toLocaleString()}
                  </span>
                  {product.stock > 0 ? (
                    <span className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded">
                      재고: {product.stock}
                    </span>
                  ) : (
                    <span className="text-xs text-red-500 px-2 py-1 bg-red-100 rounded font-medium">
                      품절
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


