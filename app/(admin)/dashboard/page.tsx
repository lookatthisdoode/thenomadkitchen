import { fetchStoreInfo } from "@/app/lib/data";
import type { StoreInfo } from "@/app/lib/definitions";
import { EditStoreInfoButton } from "@/app/ui/dashboard/buttons";
import { SlBookOpen } from "react-icons/sl";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/app/ui/card";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import React from "react";

export default async function StoreInfo() {
  const { openinghours, specials, phone, address }: StoreInfo =
    await fetchStoreInfo();

  return (
    <section className={`px-2 md:px-5`}>
      <Breadcrumbs breadcrumbs={[{ label: "Home", href: "/dashboard/" }]} />
      {/* Opening hours table PC*/}
      {/*maybe here jitters?*/}
      <table className="min-w-full hidden md:table shadow-xl">
        <thead className="bg-gray-200 ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Key
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Address
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {address}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Phone
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {phone}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Opening hours
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {openinghours}
            </td>
          </tr>
        </tbody>
      </table>
      {/* Mobile Info */}
      <div className="md:hidden">
        <Card>
          <CardHeader className={`p-3`}>
            <CardTitle>Address</CardTitle>
            <CardDescription>{address}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className={`p-3`}>
            <CardTitle>Number</CardTitle>
            <CardDescription>{phone}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className={`p-3`}>
            <CardTitle>Opening Hours</CardTitle>
            <CardDescription>{openinghours}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className={`p-3`}>
            <CardTitle>Address</CardTitle>
            <CardDescription>{address}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Edit Button */}
      <div className=" shadow-xl gap-2 mb-5 border rounded-b-xl">
        {/*<SlBookOpen className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />*/}
        <EditStoreInfoButton></EditStoreInfoButton>
      </div>
    </section>
  );
}
