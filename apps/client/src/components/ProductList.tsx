import { Suspense } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";
import { mockProducts } from "@/lib/mock-data";

const fetchData = async ({
  category,
  sort,
  search,
  params,
}: {
  category?: string;
  sort?: string;
  search?: string;
  params: "homepage" | "products";
}) => {
  // Use mock data instead of fetch
  let filteredProducts = [...mockProducts];

  // Filter by category if provided
  if (category != "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.categorySlug === category
    );
  }

  // Filter by search if provided
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort products
  if (sort === "oldest") {
    filteredProducts.sort(
      (a, b) => (a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0)
    );
  } else if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    // newest (default)
    filteredProducts.sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  // Limit for homepage
  if (params === "homepage") {
    filteredProducts = filteredProducts.slice(0, 8);
  }

  return filteredProducts;

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/products?${category ? `category=${category}` : ""}${search ? `&search=${search}` : ""}&sort=${sort || "newest"}${params === "homepage" ? "&limit=8" : ""}`
  // );
  // const data: ProductType[] = await res.json();
  // return data;
};

const ProductList = async ({
  category,
  sort,
  search,
  params,
}: {
  category?: string;
  sort?: string;
  search?: string;
  params: "homepage" | "products";
}) => {
  const products = await fetchData({ category, sort, search, params });

  return (
    <div className="w-full">
      <Suspense fallback={<div className="h-20" />}>
        <Categories />
      </Suspense>
      {params === "products" && (
        <Suspense fallback={<div className="h-8" />}>
          <Filter />
        </Suspense>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
