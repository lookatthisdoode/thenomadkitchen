import Link from "next/link";

export function UpdateItem({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/${id}/edit`}
      className="rounded-md text-center border-1 bg-blue-200 p-2 hover:bg-blue-100"
    >
      {/* <PencilIcon className="w-5" /> */}
      Edit Item
    </Link>
  );
}

// export function DeleteItem({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);

//   return (
//     <form action={deleteInvoiceWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//     </form>
//   );
// }
