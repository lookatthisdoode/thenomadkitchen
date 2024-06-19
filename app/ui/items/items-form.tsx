import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip";
import Image from "next/image";
import { DeleteItemButton, EditItemButton } from "@/app/ui/dashboard/buttons";
import React from "react";
import { fetchFilteredItemsByQuery } from "@/app/lib/data";

export default async function ItemsTable({ query }: { query: string }) {
  const filteredFood = await fetchFilteredItemsByQuery(query);

  // just in case
  if (!filteredFood) return;

  return (
    <div>
      <table className="min-w-full ">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredFood.map((_) => (
            <tr className={`border-b shadow-md`} key={_.type + _.name}>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {_.type}
              </td>
              <td className="px-3 py-4 whitespace-normal text-sm text-gray-500">
                {_.name}
              </td>
              <td className="px-3 py-4 whitespace-normal text-sm text-gray-500">
                {_.description}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {_.price}
              </td>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild={false}>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 cursor-pointer">
                      {_.image_url}
                    </td>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className={`w-[150px] h-[150px]`}>
                      <Image
                        src={_.image_url}
                        alt={_.name + "`s image"}
                        fill
                        className={`object-cover`}
                      ></Image>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <td className={`border-l-2`}>
                <EditItemButton id={_.id}></EditItemButton>
                <DeleteItemButton id={_.id}></DeleteItemButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
