import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchItemById } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Edit Item",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const item = await fetchItemById(id);

  // 404 page
  if (!item) {
    notFound();
  }

  //create edit form and pass this item to fill form upon loading
  // Form item={item}
  //defaultValue={item.name}

  return (
    <section>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      /> */}

      {/* <Form invoice={invoice} customers={customers} /> */}
      {item.name}
    </section>
  );
}
