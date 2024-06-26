import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchItemById } from "@/app/lib/data";
import {
  EditItemImageForm as FormImage,
  EditItemNoImageForm as FormNoImage,
} from "@/app/ui/dashboard/edit-forms";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";

export const metadata: Metadata = {
  title: "Edit Item",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const item = await fetchItemById(id);

  // Defines the size of the form.
  const itemType = () => {
    return item.type === "side" || item.type === "drink";
  };

  // 404 page
  if (!item) {
    notFound();
  }

  return (
    <section className={`px-2 md:px-5`}>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/dashboard/" },
          { label: "Items", href: "/dashboard/items" },
          {
            label: "Edit Item",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      {/* <Form invoice={invoice} customers={customers} /> */}
      {itemType() ? <FormNoImage item={item} /> : <FormImage item={item} />}
    </section>
  );
}
