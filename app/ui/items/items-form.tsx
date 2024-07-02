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
      {/* PC TABLE */}
      <table className="w-full hidden lg:table table-fixed">
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
              <td className={`relative`}>
                <div className={`absolute inset-2 `}>
                  <Image
                    src={_.image_url ? _.image_url : "/"}
                    alt={_.image_url ? _.name + "`s image" : "no image"}
                    sizes={"500px"}
                    fill
                    className={`object-cover`}
                  ></Image>
                </div>
                {/*<TooltipProvider>*/}
                {/*  <Tooltip>*/}
                {/*    <TooltipTrigger asChild={false}>*/}
                {/*      <div className="px-6 py-4 text-left text-sm text-gray-500 cursor-pointer">*/}
                {/*        {_.image_url}*/}
                {/*      </div>*/}
                {/*    </TooltipTrigger>*/}
                {/*    <TooltipContent>*/}
                {/*      <div className={`w-[150px] h-[150px] relative`}>*/}
                {/*        <Image*/}
                {/*          src={_.image_url}*/}
                {/*          alt={_.name + "`s image"}*/}
                {/*          sizes={"500px"}*/}
                {/*          fill*/}
                {/*          className={`object-cover`}*/}
                {/*        ></Image>*/}
                {/*      </div>*/}
                {/*    </TooltipContent>*/}
                {/*  </Tooltip>*/}
                {/*</TooltipProvider>*/}
              </td>
              <td className={`border-l-2`}>
                <EditItemButton id={_.id}></EditItemButton>
                <DeleteItemButton id={_.id}></DeleteItemButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Simplified Table for smaller screens */}
      <table className="w-full lg:hidden">
        <thead className="bg-gray-200">
          <tr>
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredFood.map((item) => (
            <tr className="border-b shadow-md" key={item.type + item.name}>
              <td className="px-3 py-4 whitespace-normal text-sm text-gray-500">
                {item.name}
              </td>
              <td className="border-l-2 flex space-x-2">
                <EditItemButton id={item.id} />
                <DeleteItemButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
