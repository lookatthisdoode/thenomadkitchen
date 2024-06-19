"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import React from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative py-5">
      <label htmlFor="search" className="text-xl font-medium text-gray-700">
        Search
      </label>
      <div className={`pt-2 flex gap-2`}>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Button
          className=" text-primary border bg-green-400 hover:bg-green-300"
          variant={"outline"}
        >
          <Link href={"/dashboard/create"}>Create New Item</Link>
        </Button>
      </div>
    </div>
  );
}
