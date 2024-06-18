import { Button } from "@/app/ui/button";
import Link from "next/link";
import { fetchStoreInfo } from "@/app/lib/data";
import type { StoreInfo } from "@/app/lib/definitions";
import { EditStoreInfoButton } from "@/app/ui/dashboard/buttons";

export default async function StoreInfo() {
  const { openinghours, specials, phone, address }: StoreInfo =
    await fetchStoreInfo();

  return (
    <section>
      {/* Opening hours table*/}
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead className="bg-gray-50">
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
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              edit
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {openinghours}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Buttons */}

      <div className="flex md:flex-row gap-2 mb-5 border md:p-3">
        <Button
          className="border-blue-500 bg-none hover:bg-gray-200"
          variant={"outline"}
        >
          <Link href={"/dashboard/create"}>Create New Item</Link>
        </Button>
        <EditStoreInfoButton></EditStoreInfoButton>
      </div>
    </section>
  );
}
