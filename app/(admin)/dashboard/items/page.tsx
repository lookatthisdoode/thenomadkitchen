import { fetchFilteredItemsByQuery } from "@/app/lib/data";
import React, { Suspense } from "react";
import Search from "@/app/ui/dashboard/search";
import { ItemsSkeleton } from "@/app/ui/skeletons";
import ItemsTable from "@/app/ui/items/items-form";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items",
};

export default async function Items({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  // Save for pagination
  // const currentPage = Number(searchParams?.page) || 1;
  // const filteredFood = await fetchFilteredItemsByQuery(query);

  return (
    <section className={`px-2 md:px-5 `}>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/dashboard/" },
          { label: "Items", href: "/dashboard/items", active: true },
        ]}
      />
      <Search placeholder={"'dinner', 'Chicken Burger', 'side'"}></Search>

      <Suspense key={query} fallback={<ItemsSkeleton />}>
        <ItemsTable query={query}></ItemsTable>
      </Suspense>
    </section>
  );
}
