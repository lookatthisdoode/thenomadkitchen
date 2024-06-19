import Link from "next/link";
import { deleteItem, deleteFeedbackMessage } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";

export function EditItemButton({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/${id}/edit`}>
      <Button variant="link">
        <span className={`text-emerald-700`}>Edit Item</span>
      </Button>
    </Link>
  );
}

export function DeleteItemButton({ id }: { id: string }) {
  const deleteItemWithId = deleteItem.bind(null, id);

  return (
    <form action={deleteItemWithId}>
      <Button variant="link">
        <span className={`text-red-500`}>Delete Item</span>
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
      <Button variant={"link"} className=" md:pl-7 pl-10 rounded-none bg-none">
        <span>Edit Store Info</span>
      </Button>
    </form>
  );
}
