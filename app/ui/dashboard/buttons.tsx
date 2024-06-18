import Link from "next/link";
import { deleteItem, deleteFeedbackMessage } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";

export function EditItemButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/${id}/edit`}
      className="rounded-md text-center border-1 bg-blue-500 text-secondary p-2 hover:bg-gray-400"
    >
      Edit Item
    </Link>
  );
}

export function DeleteItemButton({ id }: { id: string }) {
  const deleteItemWithId = deleteItem.bind(null, id);

  return (
    <form action={deleteItemWithId}>
      <Button
        variant="destructive"
        className=" border-red-600 bg-none hover:bg-gray-400"
      >
        <span>Delete Item</span>
      </Button>
    </form>
  );
}

export function DeleteFeedBackButton({ id }: { id: string }) {
  const deleteFeedbackMessageWithId = deleteFeedbackMessage.bind(null, id);

  return (
    <form action={deleteFeedbackMessageWithId}>
      <Button className="rounded-none bg-blue-500 hover:bg-slate-400 mb-3">
        Delete Message
      </Button>
    </form>
  );
}

export function EditStoreInfoButton() {
  // create action to edit storeinfo
  return (
    <form>
      <Button
        variant={"outline"}
        className="border-blue-500 bg-none hover:bg-gray-200"
      >
        <span>Edit Store Info</span>
      </Button>
    </form>
  );
}
