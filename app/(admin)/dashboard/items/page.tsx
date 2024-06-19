import { fetchFilteredItemsByQuery } from "@/app/lib/data";
import React, { Suspense } from "react";
import Search from "@/app/ui/dashboard/search";
import { ItemsSkeleton } from "@/app/ui/skeletons";
import ItemsTable from "@/app/ui/items/items-form";

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
    <section className={`container`}>
      <Search placeholder={"'dinner', 'Chicken Burger', 'side'"}></Search>

      <Suspense key={query} fallback={<ItemsSkeleton />}>
        <ItemsTable query={query}></ItemsTable>
      </Suspense>
    </section>
  );
}
